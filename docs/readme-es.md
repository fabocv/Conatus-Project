# Conatus-project 

**Modelación Matemática de la Potencia de Actuar y la Homeostasis Afectiva.**

`conatus-project` es un marco de trabajo (framework) basado en TypeScript diseñado para cuantificar la **Función Tranquilidad (T)**. El proyecto integra la ética de **Baruch Spinoza**, la etología de **Gilles Deleuze** y la **neuroquímica del estrés** contemporánea en un modelo de sistemas dinámicos.

##  El Concepto
El modelo no entiende la tranquilidad como una ausencia de movimiento, sino como una **resultante de eficiencia existencial**. Un cuerpo está tranquilo cuando su capacidad de procesar la realidad es mayor al costo biológico de existir.

### La Ecuación T (v2.0)
$$T = \frac{S(\Gamma) \cdot [p(A \cdot D) - (1-p)(t + \ln(1/K))]}{F_{entorno} \cdot \Gamma}$$

Donde:
- **S (Sujeto):** Integridad sistémica basada en Autovalencia Física ($\delta$) y Psíquica ($\phi$).
- **Γ (Gamma):** Permeabilidad al estrés (Cortisol/Carga Alostática).
- **p (Fricción):** Capacidad de obrar con presencia y firmeza.
- **K (Saber):** Potencia de integración cognitiva de los afectos.

## Características Técnicas
- **Detección de Clusters:** Clasificación automática en regímenes dinámicos (K, L, M, N, O, P) según perfiles de sensibilidad y respuesta.
- **Análisis de Disociación:** Identificación de brechas entre la percepción cognitiva y el estado somático real.
- **Métricas de Desviación:** Detección algorítmica de estados de **Autoexplotación** (rendimiento a costa de infraestructura) y **Autosabotaje** (conocimiento sin acción).

## ⚖️ Ética y Alcance
Este software es una herramienta de **cartografía afectiva**. No emite diagnósticos clínicos. Su objetivo es proporcionar indicadores de coherencia para que usuarios y profesionales puedan visualizar nudos de estrés y puntos de fuga de potencia.

---

# Conatus Project: Documentación de la Métrica Likert (v2.2)

## 1. El Concepto: Simetría Ontológica
En las versiones iniciales, el motor arrojaba un valor de **Tranquilidad ($T$)** basado en mecánica de fluidos y termodinámica, resultando en números abstractos (ej. `1.12`). La transformación a **Escala Likert 1-10 (Flotante)** permite que el cálculo matemático sea simétrico a la percepción humana, facilitando el diagnóstico de **Coherencia Afectiva**.

---

## Implementación Técnica (TypeScript) 
Para lograr este reescalado del resultado de la tranquilidad sin perder la sensibilidad a la vulnerabilidad del sujeto ($\delta, \phi$), se aplica un factor de expansión ($\kappa$) y un ajuste basal de existencia.

### El Salto Cualitativo: Escalamiento Likert

Para que el modelo sea un espejo, aplicamos una función de normalización que mapea la potencia de actuar a través de la tranquilidad ($T_{raw}$​) en una escala de 1 a 10. La Fórmula de Ajuste es la siguiente

$$ T_{likert}​=min(10,max(1,(T_{raw}​ \cdot k)+1))$$

Donde:
- $T_{raw} = T$
- k (Factor de Escala (v2.2) = 5.5): Es el coeficiente que traduce la "presión biológica" al lenguaje de la percepción humana.
- +1: Establece el piso basal de la existencia (mientras hay vida, hay un mínimo de tranquilidad basal ϵ).

## El Motor de Cálculo (Ajuste v2.2)
```typescript
// Fragmento actualizado en motor.ts
private static readonly SCALE_FACTOR = 5.5; 

static calculate(data: NormalizedData): number {
    // ... lógica interna de Numerador (S, p, A, D, R) y Denominador (F_ext, gamma)
    const rawT = numerator / denominator;

    // Mapeo a rango humano [1, 10]
    // El +1 asegura que mientras haya vida (Conatus), el valor mínimo sea 1.
    let tLikert = (rawT * this.SCALE_FACTOR) + 1;

    // Clamp de seguridad para no desbordar la escala
    return Math.min(Math.max(tLikert, 1), 10);
}
```

## 3. Interpretación de la Potencia Activa

Al normalizar T, el sistema clasifica la potencia del sujeto en cuatro estadios fenomenológicos:

|Rango T | Estado del Conatus| Significado Clínico|
|----|----|--|
|1.0 - 3.0 | Entropía Alta|Agotamiento. El costo de existir supera la energía generada.|
|3.1 - 5.0 | Homeostasis Límite|Supervivencia funcional. Poco margen para la expansión.|
|5.1 - 7.5 | Potencia Activa|"Zona de Salud. Capacidad de composición, creación y resiliencia."|
|7.6 - 10.0 | Plenitud| Grado máximo de autonomía. Independencia de las fluctuaciones externas.|

## 4. El Índice de Coherencia (Δ)

La gran innovación de esta versión es la comparación directa con la Calibración Subjetiva.

$$ \Delta = | T_{usuario} - T_{calculada} | $$

### Diagnóstico Automatizado:

- Δ≤1.5 (Alineado): El sujeto posee Lucidez Afectiva. Su percepción mental coincide con su realidad biológica.
- Δ>1.5 (Desconectado): Existe un Punto Ciego.
    - Si Tusuario​>Tcalc​: Posible Anestesia Operativa (Cluster M). El sujeto no siente el desgaste que su cuerpo reporta.
    - Si Tusuario​<Tcalc​: Posible Hiper-reflexividad. El sujeto se siente peor de lo que su infraestructura sugiere.


Detalles completos del modelo en español, revisar ['acá'](función-tranquilidad.md)