# Conatus Sp. v3.0
## Framework vectorial para estimar y optimizar la potencia de obrar bajo límites personales

---

## 1. Fundamento filosófico (base spinozista)

En la *Ética*, Spinoza define al individuo como un **modo finito** cuya esencia es el **conatus**:  
> *el esfuerzo por perseverar en su ser*.

La **potencia de obrar** no es absoluta ni moral, sino **relacional**:
- depende del cuerpo,
- de los afectos,
- del contexto,
- y del grado de conocimiento de las propias causas.

Este framework traduce esa intuición a un lenguaje **vectorial y operacional**:

> **La tranquilidad no es ausencia de afectos, sino el equilibrio dinámico que maximiza la potencia de obrar posible dadas las condiciones reales del individuo.**

No se persigue un ideal universal, sino el **mejor estado alcanzable desde el estado actual**, respetando límites estructurales.

---

## 2. Variables fundamentales del modelo

### 2.1 Vector de estado estructural proxy (normalizado)

$$
\mathbf{x} =
\begin{bmatrix}
D \\
G \\
1 - Glu
\end{bmatrix}
\in [0,1]^3
$$

Interpretación fenomenológica:

| Componente | Proxy bioquímico | Significado |
|-----------|-----------------|-------------|
| \(D\) | Dopamina | Energía, dirección, iniciativa |
| \(G\) | GABA | Freno, control, contención |
| \(Glu\) | Glutamato | Ruido, excitación, sobrecarga |

Este vector describe **el estado actual de manera aproximada (proxy femenológico)**, no un juicio ni un objetivo.

---

## 3. Variables moduladoras (no vectoriales)

Estas variables **no definen el estado**, sino una **aproximación de estabilidad y cambio**.

Todas se obtienen vía cuestionario proxy (escala 1–10, normalizada a [0,1]):

| Símbolo | Proxy | Rol |
|-------|------|-----|
| \(S\) | Serotonina | Estabilidad basal |
| \(N\) | Noradrenalina | Alerta / estrés |
| \(M\) | Melatonina | Ritmo, recuperación |
| \(O\) | Oxitocina | Seguridad relacional |

---

## 4. Vector efectivo

La excitación real se ajusta por contexto:

$$
Glu_{ef} = \text{clip}(Glu + \alpha_N N - \alpha_G G)
$$

$$
\mathbf{x}_{ef} =
\begin{bmatrix}
D \\
G \\
1 - Glu_{ef}
\end{bmatrix}
$$

Este es el vector **con el que se evalúa la tranquilidad**.

---

## 5. Tranquilidad como proyección geométrica

Se define una **familia de clusters ideales**:

$$
\mathbf{e}_i \in \mathbb{R}^3
\quad \text{(ej.: acción, contemplación, reparación, vínculo)}
$$

La tranquilidad alineada es:

$$
T_i =
\frac{\mathbf{x}_{ef} \cdot \mathbf{e}_i}{\|\mathbf{e}_i\|}
\quad,\quad
T = \max_i T_i
$$

**Lectura clave**:
> No existe un único modo óptimo.  
> El sistema reconoce **dónde hoy puede obrar mejor**.

---

## 6. Umbrales de riesgo y fragilidad

### 6.1 Fragilidad estructural

Se define un umbral mínimo de estabilidad:

$$
F = (1 - Glu_{ef}) \cdot G
$$

| Rango de F | Interpretación |
|-----------|----------------|
| \(F < 0.25\) | Fragilidad alta (riesgo de colapso) |
| \(0.25 <= F < 0.4\) | Estabilidad precaria |
| \(F >= 0.4\) | Zona estable |

Fenomenológicamente:
- bajo GABA + alto ruido → estados volátiles
- Estos límites operativos no definen patologías precisas. Para eso está la medicina.

---

### 6.2 Riesgo de sobre-intervención

Se define una **varianza segura**:

$$
\sigma_{ef} = \sigma_{base} \cdot (0.5 + 0.5 S)
$$

Si una transición excede esta varianza, aumenta la probabilidad de:
- rebote afectivo
- fatiga
- desorganización

---

## 7. Transición entre vectores (mejora local diaria)

### 7.1 Matriz de factibilidad de cambio

Calcula qué tan factible es realizar ciertos cambios o actividades para aumentar mi potencia de obrar sin exigirme al punto de quemarme o romper mis estructuras.

$$
\Lambda =
\begin{pmatrix}
0.3 + 0.7 M & 0 & 0 \\
0 & 0.4 + 0.6 S & 0 \\
0 & 0 & 0.4 + 0.6 O
\end{pmatrix}
$$

Define **qué dimensiones pueden moverse hoy**.

---

### 7.2 Desplazamiento óptimo local

Se pone una meta de estabilidad: hoy me quiero mover o sentir hacia un estado. Este estado ideal o meta está contenido bajo un vector clusterizado como se define a continuación.

Dado un cluster objetivo $\left(\mathbf{e}_{obj}\right)$:

$$\Delta \mathbf{x}=\Lambda(\mathbf{e}_{obj} - \mathbf{x}_{ef})$$

Este desplazamiento:
- es pequeño
- es contextual
- no fuerza dimensiones no disponibles

---

### 7.3 Velocidad segura

La *velocidad segura* es el **factor que limita cuánto puede cambiar tu estado en un solo paso sin perder estabilidad**. Dicho de otra manera, es un acotador de lo que puedo hacer hoy sin quemarme ni alcanzar niveles de estres altos.

$$
\eta = 0.2 + 0.6 M  ∈ [0.2, 0.8]
$$

donde $M$ es el proxy de ritmo biológico / recuperación (melatonina aproximada).

Actualización:

$$
\mathbf{x}_{t+1} = \mathbf{x}_t + \eta \Delta \mathbf{x}
$$

- $Δx$ dice hacia dónde conviene moverse
- $η$ dice cuánto de ese movimiento/acción es seguro practicar hoy
---

### Lectura femenológica

| $M$   | $\eta$ | Experiencia subjetiva               |
| ----- | ------ | ----------------------------------- |
| Bajo  | ≈ 0.2  | “Cualquier cambio me desorganiza”   |
| Medio | ≈ 0.5  | “Puedo ajustar sin costo”           |
| Alto  | ≈ 0.8  | “Puedo moverme rápido y sostenerlo” |

### Por qué es necesaria (clave conceptual)

Sin velocidad segura:

- El modelo sugeriría cambios geométricamente correctos 
- pero fenomenológicamente inviables

Con $η$:

> **El sistema respeta la continuidad del conatus**
> (Spinoza: perseverar en el ser).

## 8. Lectura spinozista del proceso

Este sistema **no prescribe conductas**.

Opera bajo tres principios spinozistas:

1. **Conocer el estado real**  
   → claridad sobre causas y límites.

2. **Elegir el modo que aumenta la potencia posible**  
   → no el ideal abstracto, sino el viable.

3. **Transitar sin destruir la estructura**  
   → perseverar en el ser implica continuidad.

La “mejora” no es moral ni terapéutica:  
es **geométrica y relacional**.

---

## 9. Qué NO es este framework

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

## 10. Estado actual del modelo

- Modelo **estático vectorial**
- Transiciones discretas (no ODE acoplado aún)
- Validación: cuestionario proxy (24 + 4 ítems)
- Extensible a dinámica continua

---

## 11. Cuestionario y variables

### Tabla de preguntas proxy y normalización de variables  (escala [0.1, 1])

Escala normalizada: [0.1, 1] — no se permiten ceros estructurales

Convención general:
- Cada respuesta \( $P_i \in \{1,\dots,10\} $\)
- Normalización directa: \( $P_i^{norm} = \frac{P_i}{10}$ \)
- Normalización inversa: \( $1 - \frac{P_i}{10}$ \)
- Para cada variable: promedio simple de sus preguntas
- Restricción final: \( $x := \max(x, 0.1)$ \)

---

### 🔹 Dopamina (D) — Potencia de inicio y sostén del obrar

| Pregunta | Texto | Escala |
|--------|------|--------|
| P1 | Siento impulso interno para iniciar acciones sin presión externa | Directa |
| P2 | Me resulta atractivo comenzar tareas nuevas o relevantes | Directa |
| P3 | Mantengo el interés una vez que empiezo algo | Directa |
| P4 | Siento energía mental para actuar durante el día | Directa |
| P5 | Me cuesta poco esfuerzo “ponerme en marcha” | Directa |
| P6 | Percibo sentido o dirección en lo que hago | Directa |

$$D = \frac{P_1 + P_2 + P_3 + P_4 + P_5 + P_6}{60}$$

---

### 🔹 GABA (G) — Regulación, freno y contención

| Pregunta | Texto | Escala |
|--------|------|--------|
| P7 | Puedo frenar impulsos cuando lo decido | Directa |
| P8 | Mantengo estabilidad frente a estímulos demandantes | Directa |
| P9 | Puedo pausar antes de reaccionar | Directa |
| P10 | Tolero bien la frustración | Directa |
| P11 | Me resulta posible bajar revoluciones voluntariamente | Directa |
| P12 | Siento control interno sobre mis respuestas | Directa |

$$G = \frac{P_7 + P_8 + P_9 + P_{10} + P_{11} + P_{12}}{60}$$

---

### 🔹 Glutamato (Glu) — Ruido y sobreexcitación (escala inversa)

| Pregunta | Texto | Escala |
|--------|------|--------|
| P13 | Mi mente se siente saturada o sobreestimulada | Inversa |
| P14 | Tengo exceso de pensamientos simultáneos | Inversa |
| P15 | Me cuesta desconectarme mentalmente | Inversa |
| P16 | Me siento fácilmente sobrepasado por estímulos | Inversa |
| P17 | Mi activación mental es difícil de regular | Inversa |
| P18 | Me cuesta bajar el nivel de alerta | Inversa |

$$Glu = 1 - \frac{P_{13} + P_{14} + P_{15} + P_{16} + P_{17} + P_{18}}{60}$$

---

### 🔹 Integración y coherencia (estabilidad funcional)

| Pregunta | Texto | Escala |
|--------|------|--------|
| P19 | Mi energía y control suelen estar equilibrados | Directa |
| P20 | Rara vez paso del bloqueo a la sobreexcitación | Directa |
| P21 | Me siento funcional en el día a día | Directa |
| P22 | Mi ritmo interno se siente coherente | Directa |
| P23 | Puedo sostener esfuerzos sin colapsar | Directa |
| P24 | Mi estado general me permite actuar con continuidad | Directa |

### Variables estructurales (vector de estado)

| Variable | Preguntas | Tipo de escala | Definición normalizada |
|--------|-----------|---------------|------------------------|
| **D** (Dopamina) | P1, P2, P3 | Directa | \( $D = \frac{P_1 + P_2 + P_3}{30}$ \) |
| **G** (GABA) | P4, P5, P6 | Directa | \( $G = \frac{P_4 + P_5 + P_6}{30}$ \) |
| **Glu** (Glutamato) | P7, P8, P9 | **Inversa** | \( $Glu = 1 - \frac{P_7 + P_8 + P_9}{30}$ \) |

Vector efectivo:
$$
\mathbf{x} = \begin{bmatrix} D \\ G \\ 1 - Glu \end{bmatrix}
$$

---

### Variables moduladoras (paisaje y dinámica)

| Variable | Preguntas | Tipo de escala | Definición normalizada |
|--------|-----------|---------------|------------------------|
| **S** (Serotonina) | P25, P26 | Directa | \( $S = \frac{P_{25} + P_{26}}{20}$ \) |
| **N** (Noradrenalina) | P27, P28 | **Inversa** | \( $N = 1 - \frac{P_{27} + P_{28}}{20}$ \) |
| **M** (Melatonina) | P23, P24 | Directa | \( $M = \frac{P_{23} + P_{24}}{20}$ \) |
| **O** (Oxitocina) | P21, P22 | Directa | \( $O = \frac{P_{21} + P_{22}}{20}$ \) |

---

### Restricción estructural (anti–colapso)

Para todas las variables normalizadas:
$$
x := \max(x,\ \varepsilon), \quad \varepsilon = 0.1
$$

Esto garantiza:
- continuidad del conatus
- ausencia de colapsos por anulación
- estabilidad numérica y fenomenológica


## 13. Cierre conceptual

> *La tranquilidad no es quietud,  
> es la forma estable que adopta la potencia cuando se conoce a sí misma.*

---
