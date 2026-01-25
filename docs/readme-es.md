# Conatus-Project v2.2

**Modelado Matemático de la Potencia de Actuar y Homeostasis Afectiva.**

`conatus-project` es un framework basado en TypeScript diseñado para cuantificar la **Tranquilidad ($T$)**. Basado en la síntesis ontológica de **Spinoza**, **Deleuze** y la **Bioquímica del Estrés**, mide la eficiencia del *Conatus*: el esfuerzo por perseverar en el propio ser.

---

## Ⅰ. Marco Teórico

El modelo define la tranquilidad no como estasis, sino como una **tracción existencial óptima**. Integra tres pilares:
1. **Spinoza:** La alegría como aumento de la potencia de actuar; la tristeza como su disminución.
2. **Deleuze:** El cuerpo como un sistema que se compone o descompone en sus encuentros.
3. **Bioquímica:** La carga alostática ($\Gamma$) y su impacto en la infraestructura sistémica ($S$).

---

## Ⅱ. La Ecuación Maestra (v2.2)

La Potencia de Actuar ($T$) se calcula de la siguiente manera:

$$T = \frac{S(\Gamma) \cdot R \cdot [p(A \cdot D) - (1-p)(t + \ln(\frac{1}{K + \epsilon }))]}{F_{entorno} \cdot (\Gamma + \epsilon)}$$

### Variables Clave y Mapeo de Encuesta

| Variable | Métrica / Pregunta de Encuesta | Rol Ontológico |
| :--- | :--- | :--- |
| **$\delta$ (Delta)** | Energía física, calidad del sueño y nutrición. | Autovalencia Física |
| **$\phi$ (Phi)** | Claridad mental y autorregulación emocional. | Autovalencia Psíquica |
| **$A \cdot D$** | Motivación y búsqueda de metas (Dopamina). | Potencia Activa |
| **$t$** | Peso emocional de fondo o melancolía. | Tristeza de Fondo |
| **$p_c$** | Capacidad de identificar cognitivamente los afectos. | Claridad Cognitiva |
| **$p_x$** | Firmeza y resolución en la ejecución física. | Praxis / Firmeza |
| **$K$** | Comprensión de las causas de los afectos actuales. | Conocimiento de Integración |
| **$F_{ent}$** | Resistencia ambiental y densidad social. | Fricción del Entorno |
| **$\Gamma$** | Permeabilidad al estrés y saturación de cortisol. | Carga Alostática |
| **$R$** | Calidad del capital social y vínculos de soporte. | Resonancia Relacional |
| **$\epsilon$** | **Constante: 0.1** | Resistencia Vital |

---

## Ⅲ. Arquitectura Técnica

### 1. Infraestructura Sistémica $S(\Gamma)$
La estabilidad estructural decae exponencialmente a medida que el estrés ($\Gamma$) aumenta:
$$S = (\delta \cdot \phi) \cdot e^{-\lambda \Gamma}$$

### 2. Integración Ponderada ($p$)
La capacidad de aterrizar la potencia depende más de la firmeza ($p_x$) que de la mera claridad ($p_c$):
$$p = (0.4 \cdot p_c) + (0.6 \cdot p_x)$$

---

## Ⅳ. Diagnósticos Ontológicos

El sistema identifica cinco "Patologías del Conatus" principales:

1. **Autoexplotación:** Usar la potencia activa ($A$) para suprimir el agotamiento; el éxito oculta el decaimiento de $S$.
2. **Eficiencia Anestesiada:** Forzar $p \to 1$ para evitar sentir; paz quebradiza sin integración ($K$).
3. **Parálisis por Análisis (Hiper-K):** El conocimiento se vuelve un sumidero de energía que no se traduce en praxis ($p$).
4. **Místico Disociado:** Buscar $T$ mediante bypass espiritual ignorando la degradación de $S$.
5. **Hiper-Resistencia:** Fe ciega en que la voluntad ($p$) puede vencer una fricción ambiental ($F_{ent}$) superior.

---

## Ⅴ. Umbrales de Viabilidad ($S$)

El producto de la autovalencia física ($\delta$) y psíquica ($\phi$) determina la viabilidad del sistema:

| Valor ($\delta \cdot \phi$) | Régimen | Estado Sistémico |
| :--- | :--- | :--- |
| **< 0.3** | Supervivencia Pasiva | Colapso inminente; $T$ es inalcanzable. |
| **0.3 - 0.6** | Vulnerabilidad Activa | Funcional pero con alto riesgo de rotura. |
| **> 0.6** | Estabilidad Operativa | Base sólida para el ejercicio de la potencia. |

---

## ⚖️ Ética y Alcance
Esta es una **herramienta de mapeo afectivo** destinada a la recalibración existencial. No proporciona diagnósticos médicos o clínicos. Su propósito es visualizar nodos de estrés y fugas de potencia para fomentar "ideas adecuadas" spinozianas.

> *"La felicidad no es el premio de la virtud, sino la virtud misma."* — **Baruch Spinoza**

---

### 📝 Encuesta Fenomenológica v2.2

Utiliza las siguientes preguntas para alimentar el modelo. Cada respuesta debe mapearse a un valor entre **1 y 10 (Escala Likert)**.

| Variable | Dimensión | Pregunta Fenomenológica (La Experiencia Sentida) |
| :--- | :--- | :--- |
| **$\delta$** | Física | **¿Cómo está tu base biológica hoy?** (Reflexiona sobre sueño, nutrición y energía somática). |
| **$\phi$** | Psíquica | **¿Te sientes "en casa" dentro de tu mente?** (Claridad, enfoque y regulación emocional). |
| **$A \cdot D$** | Dinámica | **¿Hay un motor interno impulsándote?** (Motivación y deseo de lograr objetivos). |
| **$t$** | Afectiva | **¿Qué tan pesado es tu trasfondo emocional?** (Presencia de melancolía o peso en el pecho). |
| **$p_c$** | Cognitiva | **¿Puedes nombrar tus sombras?** (Claridad para identificar qué afectos te atraviesan). |
| **$p_x$** | Práctica | **¿Son tus acciones firmes y resueltas?** (Capacidad de ejecutar sin vacilación ni fugas). |
| **$K$** | Ontológica | **¿Entiendes el "por qué"?** (Comprensión de las causas de tu estado actual). |
| **$F_{ent}$** | Externa | **¿Qué tan denso es el mundo a tu alrededor?** (Resistencia o presión que ejerce el entorno). |
| **$\Gamma$** | Bioquímica | **¿Está tu filtro saturado?** (Sensación de estar abrumado o "empapado" en cortisol). |
| **$R$** | Relacional | **¿Sientes la resonancia de los demás?** (¿Tus vínculos amplifican tu potencia o la drenan?). |

---

## Ⅵ. Interpretación de Resultados

### 1. La Brecha Potencia-Conocimiento
* **Si $T$ es alta pero $K < 0.3$:** Experimentas "Alegría Ciega". Te sientes potente pero no entiendes por qué; estado vulnerable a cambios del entorno.
* **Si $K$ es alto pero $T$ es baja:** Estás en "Parálisis por Análisis". Tienes el mapa, pero te falta el combustible. Aumenta $A$ o $p_x$.

### 2. Saturación de Estrés ($\Gamma$)
* **Si $\Gamma > 0.8$:** Independientemente de tu $A$ o $K$, tu sistema está saturado. La prioridad es restaurar $S$ mediante descanso ($\delta$) y silencio ($\phi$).

---

## Ⅶ. Instalación y Ejecución

El framework se encuentra en la carpeta `scripts`.

### Requisitos
* **Node.js** (v16.0 o superior).
* **TypeScript** instalado.

### Configuración
1. **Clonar el repositorio:**
```bash
git clone [https://github.com/tu-usuario/conatus-project.git](https://github.com/tu-usuario/conatus-project.git)
cd conatus-project
```
2. **Instalar dependencias**:

```bash
cd scripts
npm install
```

3. **Lanzar Conatus-Test (dentro de la carpeta scripts )**
```bash
npm start
```

## Ⅷ. Implicancias Prácticas de Viabilidad
Valor	Régimen	Implicancia Práctica
< 0.3	Supervivencia Pasiva	Detén toda producción no esencial. Prioriza sueño y seguridad básica.
0.3 - 0.6	Vulnerabilidad Activa	Puedes actuar, pero tu "armadura" es delgada. Evita entornos de alta fricción.
> 0.6	Estabilidad Operativa	Tu Conatus está bien cimentado. Es momento de expansión y K complejo.

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