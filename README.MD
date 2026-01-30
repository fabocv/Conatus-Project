# 🧭 Conatus v4.6: Cartografía de la Potencia y Resiliencia
**Documento de Especificación Técnica y Fenomenológica**

Este modelo describe la capacidad de un sujeto para perseverar en su ser (*Conatus*), analizando la interacción entre los recursos bioquímicos endógenos ($S_{int}$), la estructura de identidad ($\Theta$) y la deformación causada por las afecciones externas ($X$).

---

## 1. Arquitectura de Entrada (Inputs)

El sistema opera sobre dos niveles de realidad: la **Potencia** (recursos fluidos) y la **Esencia** (estructura resiliente).

### A. El Vector de Estado Interno ($S_{int}$)
Representa los recursos endógenos fluidos. Es el inventario de "combustible" y "clima" interno.
$$\mathbf{S}_{int} = [D, N, G, Glu, S, O, ACh, C, M, E, I]$$

> **Nota Spinozista:** $S_{int}$ representa la *Potentia agendi* (potencia de actuar) en su estado puro, antes de ser modificada por las afecciones del mundo externo.

### B. Estructura del Modo ($\Theta$)
Define la identidad de resiliencia del sujeto. Es una variable de dinámica lenta que representa el "acero" del sistema.
$$\Theta = k$$

> **Comentario Spinozista sobre Arquitectura:** Esta distinción plasma la realidad existencial: "Hoy puedo tener baja potencia (tristeza) pero mantener una estructura fuerte (razón)", o "tener mucha energía hoy (alegría pasiva) pero estar estructuralmente vacío".

| Variable | Nombre | Rol en el Conatus |
| :--- | :--- | :--- |
| **k (Fortaleza)** | Estructura | Resiliencia acumulada y capacidad de soporte de carga. |

### C. Normalización de Variables
Para garantizar la consistencia matemática, todos los inputs subjetivos (1-10) se normalizan a un rango $[0, 1]$ antes de procesarse:
$$S_{norm} = \frac{S_{raw} - 1}{9}$$

---

## 2. Cuestionario Fenomenológico (Captura de Datos)

Las respuestas se modelan como distribuciones para capturar la incertidumbre inherente a la introspección: $S_{user} \sim \mathcal{N}(\mu, \sigma^2)$.

### SECCIÓN 1: Sustento y Recursos Base ($M, E, H, I$)
* **Reparación (M):** ¿Qué tan profundo y reparador fue tu sueño anoche?
* **Energía (E):** ¿Cómo sientes tu nivel de combustible metabólico ahora?
* **Ayuno (H):** Horas sin ingesta sólida.
* **Coherencia (I):** ¿Tus acciones de hoy están alineadas con tu propósito?

### SECCIÓN 2: Eje de Conquista y Ejecución ($D, N, ACh$)
* **Impulso (D):** ¿Ganas de iniciar tareas/conquistar?
* **Tensión (N):** ¿Presión interna o urgencia física?
* **Plasticidad (ACh):** ¿Capacidad de aprender/adaptar estrategia hoy?

### SECCIÓN 3: Eje de Filtro y Resolución ($G, Glu$)
* **Freno (G):** ¿Facilidad para ignorar distracciones/impulsos?
* **Ruido (Glu):** ¿Zumbido mental o pensamientos intrusivos?
* **Enfoque ($\Psi$):** ¿Nitidez para resolver problemas complejos?

### SECCIÓN 4: Eje de Arraigo y Tolerancia ($S, O, C$)
* **Seguridad (S):** ¿Sensación de seguridad/estatus actual?
* **Vínculo (O):** ¿Conexión y validación con el entorno?
* **Capacidad de Carga (C):** ¿Espalda para recibir demanda extra?

### SECCIÓN 5: Perturbadores y Exógenos ($X$)
Captura de las "Afecciones Pasivas" (lo que el mundo nos hace).

* **Estimulantes ($X_e$):** Dosis (Baja=0.3, Media=0.6, Alta=1.0) y Tiempo ($t$).
* **Moduladores ($X_p$):** Tipo y Fase.
* **Metabolismo ($X_m$):** Tiempo y Tipo de combustible.

---

## 3. El Motor Matemático: Deformación y Transformación

Aquí ocurre la alquimia del sistema. Convertimos los recursos brutos ($S_{int}$) y los perturbadores ($X$) en experiencia vivida ($x_{ef}$).

### A. Vector de Deformación ($\mathbf{\Gamma}$)
Los perturbadores no son escalares simples; son vectores que alteran la afinidad de receptores específicos.
$$\mathbf{\Gamma}_j(X) = 1 + \sum_{i} \beta_{ij} \cdot \text{Dosis}(X_i) \cdot e^{-\lambda_i T_{exp}}$$

> **Nota Spinozista:** Aquí cuantificamos la servidumbre humana. $\Gamma$ representa cómo las *causas externas* nos determinan a obrar de cierta manera, desviando nuestra naturaleza original ($S_{int}$).

**Parámetros de Referencia ($\beta$):**
* **Cafeína ($X_e$):** $\beta_{N}=1.4$, $\beta_{D}=1.2$, $\beta_{M}=0.5$ (bloqueo). $\lambda \approx 0.14 h^{-1}$.
* **Ayuno ($X_m$):** $\beta_{C}=1.3$, $\beta_{\Psi}=1.2$ (claridad cetogénica).

### B. Vector de Salida Operativo ($x_{ef}$)
La simplificación fenomenológica. Incorpora la corrección de **Inhibición Dopaminérgica** (Dopamina alta reduce el freno GABA).

$$\mathbf{x}_{ef} =
\begin{bmatrix}
x_{ef, D} \\
x_{ef, G} \\ 
x_{ef, \Psi}
\end{bmatrix} =
\begin{bmatrix}
(D \cdot \Gamma_D) \cdot (1 - 0.2(N \cdot \Gamma_N)) \\
(G \cdot \Gamma_G) \cdot (S \cdot \Gamma_S) \cdot (1 - \alpha \cdot x_{ef, D}) \\
(1 - (Glu \cdot \Gamma_{Glu})) \cdot \frac{(O \cdot \Gamma_O)}{1+(N \cdot \Gamma_N)}
\end{bmatrix}$$

*Donde $\alpha \approx 0.15$ (Coeficiente de Impulsividad).*

---

## 4. Dinámica de Trayectoria y Estructura ($k$)

El Conatus es un sistema vivo que aprende. La estructura no es estática, se "curte" con el tiempo.

### A. Evolución de la Fortaleza ($\Delta k$)
Define cómo el aprendizaje y la experiencia se sedimentan en la estructura del modo.

$$k_{t+1} = k_t + \epsilon \cdot ACh \cdot (1 - F) \cdot \left(1 - \frac{k}{k_{max}}\right)$$

* **Constantes v4.6:**
    * $k_{max} = 100$ (Potencial biológico asintótico).
    * $\epsilon \approx 0.01$ (Crecimiento lento y realista).

> **Nota Spinozista:** Este es el *aumento de la potencia de obrar*. No crecemos simplemente por vivir (paso del tiempo), sino por comprender (ACh) y sobrevivir activamente (1-F).

### B. Expresión de la Fortaleza ($k_{ef}$)
¿Cuánto de tu fortaleza puedes usar hoy?
$$k_{ef} = k \cdot e^{-\delta (C - C_0)^2}$$
*El Cortisol fuera de rango ($C \neq C_0$) bloquea el acceso a la virtud propia.*

### C. Retorno de Inversión de Potencia (R.O.I.P.)
Tasa de recarga para el ciclo siguiente.
$$\Delta \text{Recurso} = (\gamma_{base} \cdot \eta) \cdot T_i \cdot (1 - F)$$

### D. Métricas de Estabilidad
* **Blindaje y Fragilidad Estructural ($F$)**
  Mide la probabilidad de disolución del modo. Usamos la lógica de "Absorción Estructural":
  
  $$F = \frac{x_{ef, \Psi}}{1 + x_{ef, G}} \cdot e^{-(k_{ef} \cdot S)}$$

    * **Interpretación:** La lucidez ($x_{ef, \Psi}$) es carga. El GABA es refrigeración. La estructura ($k \cdot S$) es el blindaje. Si el blindaje es alto, el término exponencial tiende a 0, anulando la fragilidad.

* **Índice de Fatiga de Material ($\tau$):**
  $$\tau = \frac{\Gamma(X)}{k_{ef}}$$
  > **Comentario Existencial:** Si $\tau > 2.0$, tu funcionamiento depende de químicos prestados, no de tu propia naturaleza. Eres "pasivo" ante el mundo.

---

## 5. Diagnóstico y Radar (+4h)

### A. Radar de Trayectoria
Proyección del estado $x_{ef}$ considerando la vida media de $\Gamma(X)$.
$$x_{t+4} = x_{ef} \cdot \text{Decay}(\Gamma_X) - \Delta \text{Fatiga}(C, M)$$

| Tendencia | Fenomenología | Causa Bioquímica |
| :--- | :--- | :--- |
| **Crash Motivacional** | Apatía súbita, "sin sentido". | Retiro de $X_e$ + Deuda de $M$. |
| **Pico de Irritabilidad** | Reactividad, agresión defensiva. | Hipoglucemia ($H$) $\to$ Cortisol. |

### B. Detección de Fracturas (Disonancias)
* **Fractura de Recuperación:** $D \uparrow$ vs $M \downarrow$ (Overclocking).
* **Quiebre de Materiales:** $S / C < 0.6$ (Riesgo de colapso sistémico).

---

## 6. Protocolos de Intervención (Maniobras)

Acciones para restaurar la *ratio* de movimiento y reposo.

### 🔴 PROTOCOLO GAMMA: Rescate de Estructura
* **Objetivo:** Restaurar $S$ y reducir $C$.
* **Ciencia:** Ingesta de Triptófano + Carbohidratos complejos. *Evidencia:* Los carbohidratos facilitan el paso del triptófano por la barrera hematoencefálica al liberar insulina.
* **Acción Spinozista:** Buscar "Amor Intelectual" o vínculos seguros que refuercen la existencia.

### 🟡 PROTOCOLO ALPHA: Rescate de Filtro
* **Objetivo:** Aumentar $G$, reducir $N$.
* **Ciencia:** L-Teanina (200mg) + Magnesio. *Evidencia:* Unno et al. (2013) demostraron reducción de respuestas de estrés agudo con L-Teanina.
* **Acción:** Aislamiento sensorial (Disminuir afecciones externas).

### 🔵 PROTOCOLO BETA: Rescate de Plasticidad
* **Objetivo:** Restaurar $ACh$.
* **Acción:** Hidratación + Colina (Huevos/Suplemento) + Cese de input de datos.

---

## 7. Validación y Ética

### Plan de Validación
1.  **Tests Sintéticos:** Verificar que dosis altas de cafeína ($X_e=1.0$) generen el crash esperado en $t+5h$.
2.  **Estudio Piloto:** Correlacionar las alertas de "Fractura" con reportes STAI (Ansiedad) en $n=20$ sujetos.

### AVISO DE RESPONSABILIDAD
Este modelo es una herramienta teórica de autoconocimiento y filosofía práctica. **No constituye consejo médico.** Los desequilibrios neuroquímicos reales (depresión, ansiedad clínica) requieren atención profesional. El *Conatus* digital es un mapa, no el territorio.