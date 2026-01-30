import math

#Conatus v3.1

def solicitar_datos():
    # 1. Captura de Datos (Proxies)
    d1 = int(input("D1 (Impulso): "))
    d2 = int(input("D2 (Interés): "))
    g1 = int(input("G1 (Freno): "))
    g2 = int(input("G2 (Control): "))
    glu1 = int(input("Glu1 (Ruido - Inv): "))
    glu2 = int(input("Glu2 (Distracción - Inv): "))
    n1 = int(input("N1 (Tensión Física - Inv): "))
    n2 = int(input("N2 (Estrés Percibido - Inv): "))
    s1 = int(input("S1 (Humor): "))
    s2 = int(input("S2 (Calma): "))
    m1 = int(input("M1 (Calidad Sueño): "))
    m2 = int(input("M2 (Sincronía): "))
    o1 = int(input("O1 (Seguridad Social): "))
    i1 = int(input("I1 (Coherencia/Integración): "))
    return d1,d2,g1,g2,glu1,glu2,n1,n2,s1,s2,m1,m2,o1,i1


def calcular_conatus():
    print("--- Cuestionario Conatus v3.2 ---")
    print("Responde del 1 al 10 (1: Mínimo, 10: Máximo)")
    
    d1, d2 = 9, 10
    g1, g2 = 8, 8
    glu1, glu2 = 1, 2
    n1, n2 = 2, 3
    s1, s2 = 8, 7
    m1, m2 = 6, 8
    o1, i1 = 6, 8

    # 2. Ponderación Asimétrica (Normalización a escala 0-1)
    # Suelo Biológico (0.9/0.1)
    n = ((n1 * 0.9 + n2 * 0.1) / 10)
    m = ((m1 * 0.9 + m2 * 0.1) / 10)
    # Estructurales (0.7/0.3)
    d = ((d1 * 0.7 + d2 * 0.3) / 10)
    g = ((g1 * 0.7 + g2 * 0.3) / 10)
    s = ((s1 * 0.7 + s2 * 0.3) / 10)
    glu = ((glu1 * 0.7 + glu2 * 0.3) / 10)
    # Afectos/Integración (0.6/0.4 o Directos)
    o = (o1 / 10)
    i = (i1 / 10)

    # Invertir escalas de estrés (para que N y Glu altos resten potencia)
    n_inv = 1 - n # Nivel de Noradrenalina real
    glu_real = 1 - glu

    d_ef = d * (1.0 - 0.2 * n)
    
    # G_ef: El freno disponible.
    g_ef = g * s * math.exp(-n)
    
    # Psi_ef: La claridad. Ahora con n=0.21 dará un valor alto.
    psi_ef = (1.0 - glu) * (o / (1.0 + n))
    
    # 3. FORTALEZA Y FRAGILIDAD
    k_fortaleza = 3.5 * (i**2) + (s * 0.5)
    blindaje = 1.0 - math.exp(-(k_fortaleza * s))
    fragilidad = (psi_ef * g_ef) * blindaje
    
    # eta: Velocidad Segura
    eta = min(max((0.2 + 0.6 * m) * (o / (n + 0.1)), 0.1), 0.8)
    
    # Tensión de Red: El costo interno del diferencial
    dif = math.sqrt((1-d_ef)**2 + (1-psi_ef)**2 + (1-g_ef)**2)
    t_tension = dif * (1 + n)
    
    # 5. Salidas Humanistas
    print("\n" + "="*30)
    print(f"RESULTADOS CONATUS v3.2")
    print("="*30)
    print(f"Potencia Efectiva (D_ef): {d_ef:.2f}")
    print(f"Claridad Mental (Psi_ef): {psi_ef:.2f}")
    print(f"Fragilidad (F): {fragilidad:.3f}")
    print(f"Velocidad Segura (eta): {eta:.2f}")
    print(f"Tensión de Red (T): {t_tension:.3f}")
    print("-" * 30)

    # Lógica de Protocolos
    if fragilidad < 0.15 or g_ef < 0.1:
        print("PROTOCOLO I: REDUCCIÓN DE DAÑOS (Rojo)")
        print("Acción: Abstención total. No tomes decisiones. Enfócate en dormir y silencio.")
    elif fragilidad <= 0.4:
        print("PROTOCOLO II: REGULACIÓN (Amarillo)")
        print("Acción: Firmeza. Mantén hábitos mínimos. Evita novedades o riesgos altos.")
    else:
        print("PROTOCOLO III: EXPANSIÓN (Verde)")
        print("Acción: Generosidad. Momento ideal para proyectos complejos y vínculos profundos.")
    strs = ["[n,m,d,g,s,glu,o,i,glu_real,n_inv]",
    "[d_ef,g_ef, psi_ef]", 
    "[k_fortaleza,blindaje,fragilidad,eta,t_tension]"]

    print("\n" + "="*30)
    print(strs)
    print(str([n,m,d,g,s,glu,o,i,glu_real,n_inv]),str([d_ef,g_ef, psi_ef]), str([k_fortaleza,blindaje,fragilidad,eta,t_tension]))
    print("\n" + "="*30)
if __name__ == "__main__":
    calcular_conatus()