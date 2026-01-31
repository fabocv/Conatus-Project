class ConatusEngine:
    def __init__(self):
        self.k = 10  # Fortaleza inicial
        self.k_max = 100
        self.epsilon = 0.01
        self.alpha = 0.15
        self.C_0 = 0.55
        
    def compute_state(self, S_raw, X_substances, delta_RPE):
        # Paso 1: Normalizar
        S_norm = {nt: (val - 1) / 9 for nt, val in S_raw.items()}
        
        # Paso 2: Calcular Γ para cada neurotransmisor
        Gamma = self.compute_gamma(X_substances)
        
        # Paso 3: Calcular x_ef secuencialmente
        N_ef = S_norm['N'] * Gamma['N']
        x_ef_D = max(0, (S_norm['D'] + delta_RPE) * Gamma['D'] * (1 - 0.2 * N_ef))
        
        x_ef_G = (S_norm['G'] * Gamma['G']) * (S_norm['S'] * Gamma['S']) * (1 - self.alpha * x_ef_D)
        
        x_ef_Psi = (1 - S_norm['Glu'] * Gamma['Glu']) * (S_norm['O'] / (1 + N_ef))
        
        # Paso 4: Calcular k_ef
        C = S_norm['C']
        k_ef = self.k * exp(-2.5 * (C - self.C_0)**2)
        
        # Paso 5: Calcular F
        F = (x_ef_Psi / (1 + x_ef_G)) * exp(-(k_ef * S_norm['S']))
        
        # Paso 6: Actualizar k
        delta_k = self.epsilon * S_norm['ACh'] * (1 - F) * (1 - self.k / self.k_max)
        self.k += delta_k
        
        return {
            'x_ef': {'D': x_ef_D, 'G': x_ef_G, 'Psi': x_ef_Psi},
            'k_ef': k_ef,
            'F': F,
            'alertas': self.check_alerts(x_ef_D, S_norm['M'], k_ef, Gamma)
        }
