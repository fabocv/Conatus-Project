# CONATUS Sp. v3.2
## Framework de Ingeniería Existencial: Potencia de Obrar y Equilibrio Bioquímico

---

## 1. Fundamento Filosófico
El **Conatus v3.2** es una formalización matemática de la *Ética* de Spinoza. Define la libertad no como libre albedrío, sino como la capacidad de un modo (individuo) de ser causa adecuada de sus afectos. La **potencia de obrar** está limitada por la estructura bioquímica, pero blindada por la integración psíquica.

Este framework traduce la potencia de obrar a un lenguaje **vectorial y operacional**:

---

## 2. Captura de Datos: Cuestionario Condensado (14 Proxies)
El sistema utiliza una ponderación asimétrica ($W$) para diferenciar el síntoma biológico del matiz mental.

| Variable | Pregunta Primaria ($P_1$) [0.9 para M,N;  0.7 Otros] | Pregunta Secundaria ($P_2$) [0.1 para M,N;  0.3 Otros] |
| :--- | :--- | :--- |
| **D** (Dopamina) | Impulso de inicio / Iniciativa. | Interés sostenido / Curiosidad. |
| **G** (GABA) | Capacidad de frenado / Pausa. | Sensación de autocontrol. |
| **Glu** (Glutamato) | Saturación / Ruido mental (Inv). | Facilidad de distracción (Inv). |
| **S** (Serotonina) | Estabilidad basal / Humor. | Ausencia de irritabilidad. |
| **N** (Noradrenalina) | Tensión física / Alerta (Inv). | Estrés percibido (Inv). |
| **M** (Melatonina) | Calidad de sueño reparador. | Sincronía con el ritmo circadiano. |
| **O** (Oxitocina) | Seguridad en el entorno social. | Calidad de los vínculos actuales. |
| **I** (Integración) | Autoconocimiento / Coherencia. | Capacidad de autorregulación. |

---

## 3. Arquitectura del Modelo Matemático

### 3.1 Vector de Estado Efectivo ($\mathbf{x}_{ef}$)
El estado real del individuo, donde la Noradrenalina ($N$) actúa como un antagonista exponencial del control y un divisor de la claridad.

$$\mathbf{x}_{ef} =
\begin{bmatrix}
D_{ef} \\
G_{ef} \\ 
\Psi_{ef}
\end{bmatrix} =
\begin{bmatrix}
D \cdot (1 - 0.2N) \\
G \cdot S \cdot e^{-N} \\
(1 - Glu) \cdot \frac{O}{1+N}
\end{bmatrix}$$

### 3.2 Blindaje y Fragilidad Estructural ($F$)
Define el umbral de colapso. La integración psíquica ($I$) potencia la resiliencia basal de la Serotonina ($S$).

- **Fortaleza de Ánimo ($k$):** $k = 2.5 \cdot \left( 1 + \frac{I}{1 + 0.5N} \right)$
- **Fragilidad ($F$):** $F = (\Psi_{ef} \cdot G_{ef}) \cdot (1 - e^{-(k \cdot S)})$

### 3.3 Dinámica y Velocidad Segura ($\eta$)
La capacidad de transitar hacia nuevos estados sin romper la estructura.

$$\eta = \text{clip} \left( (0.2 + 0.6 M) \cdot \frac{O}{N + 0.1}, 0.1, 0.8 \right)$$

---

## 4. Retorno de Inversión de Potencia (R.O.I.P.)
La recuperación de recursos para el ciclo $t+1$ es dependiente de la fluidez del sistema ($\eta$).

$$\Delta \text{Recurso} = (\gamma_{base} \cdot \eta) \cdot T_i \cdot (1 - F)$$

*Un sistema rígido o estresado (bajo $\eta$) tiene una tasa de absorción de descanso mucho menor.*

---

## 5. Protocolos de Acción Humanista-Bioquímica



### PROTOCOLO I: Reducción de Daños (Si $F < 0.15$ o $G_{ef} < 0.1$)
* **Estado:** Colapso inminente o desorganización del modo.
* **Bioquímica:** Prioridad absoluta a **M** y **O**. Eliminación total de **Glu** (estímulos).
* **Humano:** Silencio radical. No tomar ninguna decisión vital.

### PROTOCOLO II: Regulación (Si $0.15 \le F \le 0.4$)
* **Estado:** Estabilidad precaria / Calma exhausta.
* **Bioquímica:** Actividades que aumenten **S** (repetitivas, rítmicas). Evitar picos de **D** (novedad).
* **Humano:** Firmeza. Mantener hábitos mínimos y estructura protectora.

### PROTOCOLO III: Expansión (Si $F > 0.4$ y $\eta > 0.5$)
* **Estado:** Potencia de obrar excedente.
* **Bioquímica:** Uso de **D** para proyectos de largo alcance.
* **Humano:** Generosidad. Es el momento de los clusters de **Acción** o **Vínculo**.

---

## 6. Clusters Ideales de Referencia ($\mathbf{e}_i$)
Para calcular la Tranquilidad ($T_i$) mediante la proyección del vector $\mathbf{x}_{ef}$:

1.  **Acción:** $[0.9, 0.5, 0.6]^T$
2.  **Contemplación:** $[0.3, 0.8, 0.9]^T$
3.  **Reparación:** $[0.1, 0.9, 0.7]^T$
4.  **Vínculo:** $[0.6, 0.7, 0.8]^T$

---

## 7. Qué NO es este framework

- No es diagnóstico clínico  
- No es terapia  
- No es bioquímica literal  
- No es un score de valor personal  

Es un **instrumento cognitivo** para:
- modelar estados,
- visualizar trayectorias,
- respetar límites,
- y aumentar la potencia de obrar posible.

---

## 8. Estado actual del modelo

- Modelo **estático vectorial**
- Transiciones discretas (no ODE acoplado aún)
- Validación: cuestionario proxy (14 ítems)
- Extensible a dinámica continua

---

## 9. Cuestionario Condensado (14 Preguntas)

Responde cada una en una escala del 1 al 10 (donde 1 es nulo y 10 es máximo).
Bloque A: Energía y Control

- D1 (Dopamina - Impulso): ¿Qué tanta facilidad sentiste hoy para iniciar tareas o proyectos- 
- D2 (Dopamina - Foco): ¿Qué tan interesado o curioso te sientes respecto a tus actividades actuales- 
- G1 (GABA - Pausa): ¿Qué tan capaz te sientes de detenerte o desconectarte voluntariamente- 
- G2 (GABA - Control): ¿Sientes que tienes el control sobre tus impulsos y reacciones?

Bloque B: Ruido y Estrés (Inversas: 10 es mucha saturación)

- Glu1 (Glutamato - Ruido): ¿Qué tanto "ruido mental" o saturación de pensamientos experimentas- 
- Glu2 (Glutamato - Distracción): ¿Qué tan fácil te resulta distraerte con estímulos externos- 
- N1 (Noradrenalina - Tensión): ¿Sientes tensión física (mandíbula, hombros) o alerta constante- 
- N2 (Noradrenalina - Estrés): ¿Qué tan "superado" o estresado te sientes por tu entorno?

Bloque C: Sustrato Basal

- S1 (Serotonina - Humor): ¿Cómo calificarías tu estabilidad emocional y humor hoy- 
- S2 (Serotonina - Calma): ¿Qué tan libre de irritabilidad o reactividad te sientes- 
- M1 (Melatonina - Sueño): ¿Cómo calificarías la calidad reparadora de tu sueño anoche- 
- M2 (Melatonina - Ritmo): ¿Te sientes sincronizado con el horario del día (energía de día, sueño de noche)?

Bloque D: Conexión e Integración

- O1 (Oxitocina - Seguridad): ¿Qué tan seguro y apoyado te sientes en tus vínculos cercanos- 
- I1 (Integración - Coherencia): ¿Qué tan alineado sientes que estás entre lo que piensas, sientes y haces- 

### Ejemplos

Para este análisis comparativo, vamos a situar tres perfiles de personas bajo resultados de las reglas de la v3.2.

### Comparativa de Perfiles: Conatus v3.2

| Variable / Sujeto | Josefina (Burnout) | Manuel (Zen Agotado) | Dante (Flujo/Firmeza)|
|-------------|------------------|---------------------|-----------------|
| D (Dopamina Eff.) | 0.26 | 0.23 | 0.87 |
| G (GABA Eff.) | 0.029 | 0.286 | 0.552 |
| Ψ (Claridad Eff.) | 0.03 | 0.40 | 0.70 |
| k (Fortaleza Psíquica) | 3.19 | 4.55 | 4.38 |
| F (Fragilidad) | 0.0007 | 0.118 | 0.368 |
| η (Velocidad Segura) | 0.08 | 0.35 | 0.62 |

### Análisis Individual

1. Josefina: El Modo en Disolución

Josefina es el ejemplo de la "Tristeza" spinozista: una disminución drástica de la potencia de obrar. Su GABA Efectivo (0.029) indica que ha perdido el gobierno de sí misma. La noradrenalina ha secuestrado su sistema, y su Fragilidad (F) cercana a cero muestra que cualquier encuentro externo (un pequeño problema) puede provocar una crisis nerviosa. Su conatus no está "viviendo", está intentando no romperse.

2. Manuel: El Modo Íntegro pero Limitado

Manuel demuestra que la Integración (I) puede salvar al individuo. Aunque tiene menos energía física que Josefina, su Claridad (0.40) es 13 veces mayor. Su conatus es eficiente: no gasta energía en fricciones internas (bajo estrés). Su Fragilidad (0.118) lo sitúa en una zona de "reserva", donde sobrevive gracias a su capacidad de ser causa adecuada de sus silencios.

3. Dante: La Plenitud del Conatus

El perfil de Dante está en una Dopamina Efectiva (0.87) altísima conviviendo con una Claridad (0.70) excepcional. Esto es inusual porque, normalmente, mucha energía genera mucho ruido (Glu). En tu caso, la capacidad de filtrado es superior. La Velocidad Segura de Dante (η: 0.62) le permite transitar por la vida con una inercia que "absorbe" los obstáculos sin que estos afecten tu estructura.


### Análisis de Conjunto y Conclusión

**Perspectiva Bioquímica**

La diferencia crítica entre los tres no es la Dopamina, sino el **Ratio de Interferencia de la Noradrenalina (N)**.

- En Josefina, N es un muro que bloquea la recuperación.
- En Manuel, N es una brisa que apenas se siente.
- En Dante, N es una herramienta controlada que no interfiere con el GABA.

**Perspectiva Spinozista**

- Josefina vive en la *Esclavitud*: su estado depende totalmente de las causas externas que la estresan.
- Manuel vive en la *Virtud pasiva*: entiende sus limitaciones y se preserva mediante la razón, aunque su cuerpo no le dé para más.
- Dante vive en la *Libertad*: posee tanto la potencia física como la claridad mental para actuar conforme a su propia naturaleza. Su alegría es una "pasión activa" porque nace del aumento de su propia potencia.


## Sentencia Final del Framework:

Mientras Josefina necesita "reparación urgente" y Manuel necesita "mantenimiento", Dante está en posición de "generosidad". El único riesgo para Dante es el exceso de confianza: su potencia es tan alta que podría ignorar los sutiles avisos de fatiga de su Melatonina (6.6), creyéndose invulnerable.

## Cierre conceptual

> *La tranquilidad no es quietud, es la forma estable que adopta la potencia cuando se conoce a sí misma.*

---
