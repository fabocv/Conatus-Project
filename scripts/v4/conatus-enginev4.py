import math

# Hecho con Gemini v3 free. 

class ConatusEngine:
    def __init__(self):
        # --- CONSTANTES DEL GLOSARIO (README v4.7) ---
        self.k_base = 10        # Fortaleza inicial (k0)
        self.k_max = 100        # Límite biológico
        self.epsilon = 0.01     # Tasa de aprendizaje
        self.alpha = 0.15       # Modulación Dopa/GABA
        self.C_0 = 0.55         # Cortisol óptimo (C_opt)
        self.delta = 2.5        # Sensibilidad al cortisol (Yerkes-Dodson)
        self.rho = 0.1          # Factor de mejora ACh sobre Psi
        
        # --- BASE DE DATOS DE SUSTANCIAS (Tabla Beta) ---
        # Formato targets: 'Neurotransmisor': multiplicador_beta
        # Si dice x1.4 en tabla -> beta es +0.4 (si es aditivo) o factor directo.
        # Modelo v4.7 usa deformación multiplicativa en Gamma: 1 + beta * dosis * decay
        # Para obtener x1.4, beta debe ser 0.4. Para x0.3 (reducción), beta debe ser -0.7.
        self.substance_db = {
            'Cafeina': {
                'half_life': 5.0, 
                'targets': {'N': 0.4, 'D': 0.2, 'M': -0.7} # N(x1.4), D(x1.2), M(x0.3)
            },
            'Alcohol': {
                'half_life': 1.5,
                'targets': {'G': 0.6, 'Psi': -0.6, 'ACh': -0.5, 'M': -0.8} # G(x1.6), Psi(x0.4), M(x0.2)
            },
            'Nicotina': {
                'half_life': 2.0,
                'targets': {'ACh': 0.5, 'D': 0.1, 'N': 0.2} # ACh(x1.5), D(x1.1), N(x1.2)
            }
        }

    def normalize(self, raw_val):
        """Normaliza input 1-10 a rango 0-1"""
        return (raw_val - 1) / 9

    def compute_gamma(self, substances_input):
        """Calcula vector de deformación Γ basado en farmacocinética"""
        # Valor base de Gamma es 1.0 (sin alteración)
        Gamma = {k: 1.0 for k in ['D', 'N', 'G', 'Glu', 'S', 'O', 'M', 'E', 'I', 'ACh', 'C', 'Psi']}
        
        for sub_name, data in substances_input.items():
            if sub_name not in self.substance_db:
                continue
            
            props = self.substance_db[sub_name]
            dosis = data['dosis']  # 0.3, 0.6, 1.0
            t_exp = data['t_exp']  # Horas desde ingesta
            
            # Decaimiento exponencial: e^(-lambda * t)
            # lambda = ln(2) / vida_media ≈ 0.693 / hl
            lambd_val = 0.693 / props['half_life']
            decay = math.exp(-lambd_val * t_exp)
            
            # Aplicar impacto acumulativo
            for target, beta in props['targets'].items():
                # Gamma = 1 + sum(beta * dosis * decay)
                Gamma[target] += (beta * dosis * decay)
        
        return Gamma

    def compute_state(self, inputs_raw, substances, delta_RPE_raw):
        """Motor Matemático Central"""
        
        # 1. Normalización
        S_norm = {k: self.normalize(v) for k, v in inputs_raw.items()}
        delta_RPE = delta_RPE_raw / 9 # Normalizar escala RPE
        
        # 2. Deformación (Gamma)
        Gamma = self.compute_gamma(substances)
        
        # 3. Computación Secuencial (Algoritmo de Estado)
        
        # A. Tensión Efectiva (N_ef)
        # N deformado por sustancias (ej. Cafeína sube N)
        N_ef = S_norm['N'] * Gamma['N']
        
        # B. Impulso Efectivo (x_ef,D)
        # Fórmula: max(0, (D + RPE) * Gamma_D * (1 - 0.2 * N_ef))
        raw_drive = S_norm['D'] + delta_RPE
        # Factor de freno por tensión excesiva (ley Yerkes-Dodson implícita)
        tension_drag = (1 - 0.2 * N_ef) 
        x_ef_D = max(0, raw_drive * Gamma['D'] * tension_drag)
        
        # C. Filtro Efectivo (x_ef,G)
        # Fórmula: G*Gamma * S*Gamma * (1 - alpha * D_ef) -> El impulso consume filtro
        x_ef_G = (S_norm['G'] * Gamma['G']) * (S_norm['S'] * Gamma['S']) * (1 - self.alpha * x_ef_D)
        
        # D. Lucidez Efectiva (x_ef,Psi)
        # Fórmula: (1 - Glu*Gamma) * (O / (1+N_ef)) * (1 + rho * ACh)
        noise_ef = S_norm['Glu'] * Gamma['Glu']
        social_anchor = S_norm['O'] / (1 + N_ef) # La tensión aísla
        plasticity_boost = (1 + self.rho * S_norm['ACh'])
        
        x_ef_Psi = (1 - noise_ef) * social_anchor * plasticity_boost
        x_ef_Psi = max(0, x_ef_Psi) # Clamp
        
        # 4. Dinámica de Fortaleza (k)
        # El cortisol bloquea el acceso a la fortaleza
        C_norm = S_norm['C']
        k_ef = self.k_base * math.exp(-self.delta * (C_norm - self.C_0)**2)
        
        # 5. Fragilidad (F)
        # F = (Carga / Freno) * e^(-Blindaje)
        # Carga = Psi (paradoja: más lucidez requiere más energía), Freno = G, Blindaje = k*S
        denominator = 1 + x_ef_G
        shield = k_ef * S_norm['S']
        
        try:
            F = (x_ef_Psi / denominator) * math.exp(-shield)
        except OverflowError:
            F = 1.0

        # 6. Índice Tau (Fatiga de Material)
        # Relación entre deformación externa y capacidad interna
        # Usamos Gamma['N'] como el principal vector de tensión a resistir
        tau = Gamma['N'] / k_ef if k_ef > 0 else 10.0

        return {
            'raw': inputs_raw,
            'norm': S_norm,
            'Gamma': Gamma,
            'x_ef': {'D': x_ef_D, 'G': x_ef_G, 'Psi': x_ef_Psi},
            'k_ef': k_ef,
            'F': F,
            'tau': tau,
            'delta_RPE': delta_RPE
        }

    def generate_diagnostic_report(self, state):
        """Genera la salida narrativa basada en los criterios de la tabla"""
        
        x_ef = state['x_ef']
        Gamma = state['Gamma']
        raw = state['raw']
        delta_RPE = state['delta_RPE']
        
        report = []
        
        # --- 1. Deformación de Sustancias ---
        # Detectar sustancia dominante (la que tenga Gamma != 1)
        substance_active = False
        for k, v in Gamma.items():
            if abs(v - 1.0) > 0.05:
                substance_active = True
                break
        
        if substance_active:
            report.append(f"> **Resultado de deformación de sustancias**: La sustancia activa está multiplicando la tensión ($N$) por {Gamma['N']:.2f} y el impulso ($D$) por {Gamma['D']:.2f}.")
        
        # --- 2. Interpretación de Impulso (D) ---
        impulse_msg = ""
        if delta_RPE < -0.05 and x_ef['D'] < 0.1:
            impulse_msg = f"La decepción ($δ_{{RPE}}$) anuló por completo el efecto motor. El sujeto tiene energía física ($E={raw['E']}$), pero cero ganas de hacer cosas."
        elif delta_RPE>0.5 :
            impulse_msg = f"Ráfaga fásica activa. La expectativa superada potencia la capacidad de acción."
        elif x_ef['D'] > 0.8:
            impulse_msg = "Motor sobre-revolucionado. Impulso muy alto."
        elif delta_RPE >-0.5 and delta_RPE <=0.5:
            impulse_msg = "Motor estable. El impulso sigue a la tensión biológica sin perturbaciones mayores por expectativa."
        else:
            impulse_msg = f"Motor operativo a nivel {x_ef['D']:.2f}."
            
        report.append(f"--> **Interpretación de impulso ({x_ef['D']:.2f})**: {impulse_msg}")
        
        # --- 3. Interpretación de Filtro (G) ---
        filter_msg = ""
        if x_ef['G'] < 0.25:
            filter_msg = "Tiene un filtro bajísimo. No puede frenar sus pensamientos negativos."
        if x_ef['G'] > 0.7:
            filter_msg = "Inhibición robusta. Control estoico sobre los impulsos."
        else:
            filter_msg = "Filtro funcional."
        report.append(f"> **Interpretación de filtro ({x_ef['G']:.2f})**: {filter_msg}")
        
        # --- 4. Interpretación de Lucidez (Psi) ---
        psi_msg = ""
        if x_ef['Psi'] < 0.2:
            psi_msg = "Lucidez casi inexistente. El ruido mental ($Glu$) y la tensión ($N$) 'nublaron' su visión. "
        elif x_ef['Psi'] > 0.8:
            psi_msg += "Claridad cristalina. La mente opera con distinción adecuada.  "
        else:
            psi_msg = "Lucidez estable. "


        ACh = raw['ACh']
        if ACh>7:
            psi_msg += f"Además gozas actualmente de atención plena. "
        elif ACh>5 and ACh <=7:
            psi_msg += f" Te cuesta concentrarte. "
        else:
            psi_msg += f"Tu capacidad de atención y de aprender están bajos."
        psi_msg += f" (Acetilcolina proxy {ACh} de 10.)"


        glu = raw["Glu"]
        if (glu>6):
            psi_msg+= f", además tienes mucho ruido mental. "
        elif(glu>4 and glu <= 6):
            psi_msg += f", además tienes un ruido mental interno. "
        else:
            psi_msg += f", notamos que tienes POCO ruido mental, es bueno: "
        psi_msg+= f"(Ruido percibido: {glu} de 10)"
        report.append(f"> **Interpretación de lucidez ({x_ef['Psi']:.2f})**: {psi_msg}")
        
        # --- 5. Fortaleza (k) ---
        k_percent = (state['k_ef'] / self.k_base) * 100
        loss = 100 - k_percent
        loss_msje = f"Ha perdido casi un {loss:.1f}% de su resiliencia solo por la tensión biológica. "
        if(loss <5):
            loss_msje += "Esto significa que tu resiliencia es bastante alta, estás óptimo."
        if(loss >=5):
            loss_msje += "Esto significa que tu resiliencia es alta, puedes soportar lo suficiente."
        if(loss >13):
            loss_msje += "Esto significa que tu resiliencia es estable para situaciones estresantes."
        if(loss >20):
            loss_msje += "Esto significa que tu resiliencia es normal para situaciones estresantes."
        if(loss >35):
            loss_msje += "Esto significa que tu resiliencia es baja, cuida tu estabilidad."
        if(loss >45):
            loss_msje += "Esto significa que tu resiliencia es inestable, refúgiate y busca estabilidad."

        report.append(f"- **Interpretación fortaleza (k)**: Aunque el sujeto 'vale' {state['k_ef']:.1f} en fortaleza, su nivel de estrés actual le permite usar el {k_percent:.1f}% de su capacidad. {loss_msje}")
        
        # --- 6. Fragilidad (F) y Trampa del Sistema ---
        f_val = state['F']
        f_msg = ""
        
        # Criterio específico: Fragilidad baja numéricamente PERO lucidez muy baja = Estancamiento
        if f_val < 0.3 and x_ef['Psi'] < 0.2:
            f_msg = (f"El valor de F ({f_val:.2f}) es bajo, pero esto es una **trampa del sistema**. "
                     "El sujeto no está en colapso activo (pánico), sino en un **estado de estancamiento o parálisis por análisis**. "
                     "Al tener una Lucidez ($Ψ$) tan baja, el sistema no tiene 'presión' suficiente para estallar, pero tampoco tiene potencia para obrar. "
                     "Si un estímulo externo subiera la demanda, el sistema colapsaría porque el blindaje estructural ($k_{ef} * S$) está debilitado.")
        elif f_val > 0.8:
            f_msg = "El sistema está en **Zona de Colapso**. Fragilidad crítica."
        else:
            f_msg = f"Fragilidad estructural contenida ({f_val:.2f})."
            
        report.append(f"\n> **Significado Fragilidad en conjunto**: {f_msg}")

        kef_s = state['k_ef'] * raw['S']

        tipo_blindaje = ""
        msje_blindaje = ""

        if(kef_s> 70):
            tipo_blindaje = "Inexpugnable"
            msje_blindaje = "Blindaje Nivel Diamante. Tu estructura es tan sólida que el ruido externo es incapaz de generar distorsión. Estás en un estado de 'Ataraxia' spinozista."
        elif(kef_s> 50 and kef_s <=70):
            tipo_blindaje = "Robusto"
            msje_blindaje = "Blindaje de Alta Calidad. Posees una base segura que absorbe el impacto de la tensión sin trasladarla a tus órganos o pensamientos."
        elif(kef_s> 30 and kef_s <=50):
            tipo_blindaje = "Funcional"
            msje_blindaje = "Blindaje Estándar. Tu estructura es equilibrada; aguantas bien el día a día, pero las crisis agudas podrían empezar a sentirse."
        elif(kef_s> 15 and kef_s <=30):
            tipo_blindaje = "Vulnerable"
            msje_blindaje = "Blindaje Poroso. La protección es baja. El ruido mental (Glu) y la tensión (N) se filtran fácilmente hacia tu estabilidad emocional."
        else:
            tipo_blindaje = "Crítico"
            msje_blindaje = "Blindaje de Papel. Exposición total. Estás operando con los 'nervios a flor de piel'. Urge fortalecer el Arraigo (S) y el descanso."

        report.append(f"\n> **Blindaje {tipo_blindaje} (kef​ * S = {kef_s:.2f}):** {msje_blindaje} ")
        report.append(f"--- [Capacidad de Carga: Tu sistema absorbe el {(kef_s/100)*100:.1f}% del impacto externo antes de afectar el Conatus] ---")
        
        # --- 7. Diagnóstico del Sistema y Alertas ---
        report.append("\n### Diagnóstico del Sistema:\n")
        
        # Alerta: Fractura de Recuperación
        # Condición: Impulso alto sin reparación O Impulso nulo intentando arrancar sin reparación
        norm_M = state['norm']['M']
        
        if (x_ef['D'] > 0.7 and norm_M < 0.4) or (x_ef['D'] < 0.1 and norm_M < 0.3):
             report.append(f"> - **Fractura de Recuperación**: **Activa**. Existe una disonancia crítica. "
                           f"Impulso ($x_{{ef,D}}={x_ef['D']:.2f}$) vs Reparación ($M={norm_M:.2f}$). "
                           "El sistema carece de recursos basales para sostener cualquier demanda.")
        else:
            report.append(f"> Fractura de Recuperación: Estás en buen estado")
        
        # Índice Tau
        tau = state['tau']
        tau_formula = f"$tau = Γ/k_{{ef}} ≈ {Gamma['N']:.2f}/{state['k_ef']:.2f} ≈ {tau:.2f}$"
        
        tau_interp = ""
        if tau < 1.0:
            tau_interp = "Autonomía estructural."
            status = "Autonomía"
        elif tau < 2.0:
            tau_interp = "Asistencia química (funcional)."
            status = "Asistencia"
        else:
            # Caso especifico del prompt
            tau_interp = ("Aunque el valor global pueda parecer bajo, la **calidad de la autonomía es pobre**. "
                          f"El sujeto ha usado sustancia para 'inflar' una tensión ($N$) que su estructura debilitada ($k_{{ef}}$) no puede canalizar.")
            status = "**Servidumbre Pasional**"
            
        report.append(f">   - **Interpretación de Autonomía (tau ={tau:.2f})**: {tau_interp}")
        
        return "\n".join(report)

# ==========================================
# EJECUCIÓN DEL CASO DE USO
# ==========================================

# 1. Inputs del Usuario (Escala 1-10)
def prom(a,b): return (a+b)/2

d1,d2 = [9,9]
inputs_usuario = {
    'M': prom(7,8), 'E': prom(7,9), 'I': prom(8,9),       # Basal
    'D': prom(d1,d2), 'N': prom(2,1), 'ACh': prom(7,9),     # Motor
    'G': prom(7,7), 'Glu': prom(5,1),                     # Filtro
    'S': prom(8,7), 'O': prom(5,5), 'C': prom(5,8)        # Arraigo
}

# 2. Sustancias
sustancias_activas = {
    'Cafeina': {'dosis': 1.0, 't_exp': 1.0} # Dosis alta hace 1 hora
}

# 3. Decepción RPE
# El usuario esperaba un 10 (disfrute total) y obtuvo un 5 (o menos).
# Delta bruto negativo fuerte para simular la "anulación" del motor.
delta_rpe_usuario = inputs_usuario['D'] - d2 

# Instanciar y Ejecutar
engine = ConatusEngine()
estado = engine.compute_state(inputs_usuario, sustancias_activas, delta_rpe_usuario)

# Generar Reporte
print(engine.generate_diagnostic_report(estado))
# --- EJECUCIÓN DEL ESCENARIO ---

# 1. Configuración de Inputs (del prompt)


