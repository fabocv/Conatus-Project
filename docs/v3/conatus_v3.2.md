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

$$
\mathbf{x}_{ef} =
\begin{bmatrix}
D_{ef} \\
G_{ef} \\
\Psi_{ef}
\end{bmatrix}
=
\begin{bmatrix}
D \cdot (1 - 0.2N) \\
G \cdot S \cdot e^{-N} \\
(1 - Glu) \cdot \frac{O}{1+N}
\end{bmatrix}
$$

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