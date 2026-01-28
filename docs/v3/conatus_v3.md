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

$$
\Delta \mathbf{x}
=
\Lambda(\mathbf{e}_{obj} - \mathbf{x}_{ef})
$$

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

## 11. Cierre conceptual

> *La tranquilidad no es quietud,  
> es la forma estable que adopta la potencia cuando se conoce a sí misma.*

---
