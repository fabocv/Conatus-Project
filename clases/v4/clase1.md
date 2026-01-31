# Conatus v4.x — Primera Clase

#### 1. Problema Filosófico
#### 2. Por qué un enfoque de sistemas
#### 3. Estados, estructura y perturbaciones
#### 4. El vector de estado (intuición → fórmula)
#### 5. No linealidad y deformación
#### 6. Dinámica temporal y aprendizaje
#### 7. Fragilidad, colapso y libertad
#### 8. Cierre: ingeniería del conatus

---

# CLASE No.1:
## Conatus como sistema dinámico: de Spinoza al vector de estado

## 1. Punto de partida filosófico (Spinoza, sin fórmulas)

En la Ética, Spinoza propone algo radical:

> Todo ente persevera en su ser (conatus),
> y su libertad no es elegir arbitrariamente,
> sino ser causa adecuada de lo que le ocurre.

Traducido a lenguaje contemporáneo:

> No somos libres porque “decidimos”
> Somos libres cuando nuestro comportamiento emerge de nuestra estructura,
> no de fuerzas externas que nos arrastran

Esta idea es perfecta para modelar sistemas, porque habla de:

- estructura
- estados
- perturbaciones
- estabilidad

Spinoza no habla de mente vs cuerpo:
habla de una misma cosa vista desde distintos atributos.

Eso nos da permiso filosófico para:

- usar bioquímica
- usar matemática

hablar de experiencia subjetiva sin caer en reduccionismo.

## 2. ¿Por qué un modelo vectorial?

#### 2.1 Idea intuitiva (sin matemáticas)

Cuando decimos:

- “tengo energía”
- “estoy ansioso”
- “estoy enfocado”
- “me siento seguro”

No estamos hablando de *una sola variable*; Estamos hablando de un **estado compuesto**.

Un estado es:

- una *foto* instantánea del sistema en múltiples dimensiones.

Eso, en ingeniería, se llama **vector de estado**.

#### 2.2 Analogía simple

Piensa en un *dron*:

- está a una altura del suelo
- con una cierta velocidad
- con un % de batería
- con una orientación

No se describe con un número.
Se describe con un vector.

> El ser humano, de forma modelada y limitada, también puede describirse con un vector.

#### 2.3 Definición clave (primer puente matemático)

Por eso definimos:

$$S_{int}=[D,N,G,Glu,S,O,ACh,C,M,E,I]$$

Donde $S_{int}$ define a cada componente como una dimensión funcional distinta, en conjunto, definen cómo el sistema puede comportarse.

### 3. Separación fundamental: estado vs estructura

Aquí ocurre algo crucial, tanto filosófico como matemático.

#### 3.1 Error común (que evitamos)

  Confundir:

  * **¿cómo me siento hoy?** VS **¿qué tan fuerte soy estructuralmente?**

Spinoza diría:

*una afección no define la esencia*

#### 3.2 Traducción al modelo

Por eso separamos:

**Estado interno**

$S_{int}$ (variables rápidas, fluctuantes)	​

**Estructura**

$k$ (fortaleza acumulada, lenta)

Esto es exactamente lo que en sistemas dinámicos se llama:

- variables rápidas
- variables lentas

Y filosóficamente:

- afectos
- potencia de obrar

### 4. ¿Por qué no sumamos todo? (no linealidad)

#### 4.1 Razón fenomenológica

En humanos:

- el estrés no “suma”, bloquea funciones corporales
- el sueño no “suma”, habilita mejoras corporales
- la ansiedad no resta linealmente, deforma funciones y capacidades

👉 Las relaciones no son aditivas.

#### 4.2 Traducción matemática

Por eso usamos:

- productos
- exponentes
- divisores

**Ejemplo clave:** $G_{ef}$, el freno del impulso efectivo lo definimos como sigue

$$G_{ef}=G⋅S⋅e^{−N}$$

Lectura humana:

- puedo tener autocontrol alto (G)
- puedo sentirme seguro (S)
- pero si la urgencia contextual es alta (N), todo eso se degrada exponencialmente

Esto no es capricho:

- es cómo funcionan los sistemas bajo carga y cómo se vive subjetivamente

#### 4.3 ¿Como medimos esos valores?

Para el caso del ejemplo anterior, necesitamos tres variables endógenas proxy (aproximaciones femenológicas)

* **Freno (G) (CLÚSTER 3: Filtro y Regulación):**
    1.  Control de impulsos.
    2.  Capacidad de "no hacer".

* **Seguridad (S) (CLÚSTER 4: Arraigo):**
    1.  Sensación de estatus/competencia.
    2.  Confianza en el futuro inmediato.

* **Tensión (N) (CLÚSTER 2: Conquista y Motor):**
    1.  Urgencia/Presión física.
    2.  Incapacidad para relajarse.

Siguiendo los principios de *Furr & Bacharach*, no confiamos en ítems únicos. Usamos **Índices Compuestos** (promedio de ítems correlacionados) para reducir la varianza del error.

## 5. El vector operativo $x_{ef}$: lo que realmente ocurre

Hasta ahora teníamos inventario de variables.

Ahora preguntamos:

**¿Cómo estoy operando actualmente?**

Definimos entonces:

$$
\mathbf{x}_{ef} =
\begin{bmatrix}
D_{ef} \\
G_{ef} \\
\Psi_{ef}
\end{bmatrix}$$

**¿Por qué solo tres componentes?**

Porque fenomenológicamente, en acción, lo que importa es:

- Impulso / Potencia → ¿me muevo? ($D_{ef}$)
- Control / Filtro → ¿me disperso? ($G_{ef}$)
- Resolución / Claridad → ¿entiendo? ($\Psi_{ef}$)

Todo lo demás modula estos tres.

Esto es reducción, sí —
**pero una reducción funcional**, no biológica.

## 6. Perturbadores: por qué no los sumamos al estado

Spinoza distingue:

- causa adecuada
- causa externa

El café, el alcohol, el fármaco:

* "no son mi potencia, son fuerzas externas que deforman mi expresión"

Por eso definimos: $Γ(X)$

como **función de deformación**, no como variable interna.

Matemáticamente:

- no cambian el estado base
- cambian la ganancia del sistema

Prácticamente:
- El café me da animos para seguir trabajando
- El tabaco me relaja un momento
- El alcohol me distiende, etc.

Las sustancias alteran el estado base del ser *(a eso llamamos deformación)*

## 7. Fragilidad $F$: cuándo el sistema se rompe

Aquí unimos psicología clínica, ingeniería y Spinoza.

$$F=\frac{Ψ_{ef}}{1+Gef}⋅e^{−(k_{ef}⋅S)}$$

**Lectura humana:**

- alta claridad sin filtro → **peligro**
- sin estructura ni seguridad → **colapso**

> la lucidez aumenta el riesgo si no hay sostén

Esto explica:

- burnout
- crisis existenciales
- ansiedad funcional

Spinoza diría:

*más ideas sin orden no aumentan la potencia*

## 8. Evolución temporal: por qué aparece una “ecuación de aprendizaje”

La gran pregunta spinozista:

¿cómo se vuelve uno más libre?

Respuesta del modelo:

$$\Delta k = k_{t+1} = k_t + \epsilon \cdot ACh \cdot (1 - F) \cdot \left(1 - \frac{k}{k_{max}}\right)$$

Traducción:

1. solo se aprende si hay plasticidad
2. no se aprende en colapso
3. la estructura crece lentamente

Esto es:

- una ecuación en diferencias
- una Ecuacón Diferencial Ordinaria (EDO) discreta
- una formalización del habitus

## 9. Cortisol y expresión de la fortaleza

Clave pedagógica:

> el estrés no destruye inmediatamente lo aprendido, pero sí puede impedir usarlo

Por eso:

$$k_{ef}=k⋅e^{−δ(C−C_0)^2}$$

El aprendizaje efectivo es el habitus de aprender ($k$) afectado bajo condiciones de estrés (cortisol)

Fuera de zonas desreguladas de cortisol
- no accedes a tu experiencia bajo eventos traumáticos
- no “eres tú mismo”

La interpretación femenológica concuerda y es representado por $k_{ef}$

## 10. ¿Por qué todo esto es vectorial y no narrativo?

Porque:

- permite simulación
- permite trayectorias
- permite pronóstico
- permite intervención racional

Y filosóficamente:

convierte al sujeto en un sistema inteligible, no en una caja negra moral.

Eso es profundamente spinozista.

## 11. Cierre para la clase

Este modelo no dice:

- “así eres”
- “así deberías ser”

Dice:

dadas estas condiciones, este es el espacio de movimiento posible.

---
## [Ir a la clase 2](./clase2.md)