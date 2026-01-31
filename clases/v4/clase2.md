# CLASE 2: El Algoritmo de la Potencia
¿Cómo calcula el cerebro nuestro estado de ánimo?

> [!IMPORTANT]
> Afírmate que esta clase es el corazón power de todo el modelo.

## 1. El Cuestionario: Nuestra puerta de entrada

Todo sistema necesita datos. En el modelo Conatus 4.7, todo nace en el Cuestionario. A diferencia de un test psicológico común, aquí dividimos el flujo en dos ramas que luego se fusionan para darte un diagnóstico real:

- Registro de sustancias ($X$): Mapea qué sustancias externas has consumido (café, alcohol, etc.).
- $S_{int}$: Registra cómo te sientes internamente (energía, sueño, foco).

## 2. El Mapa del Flujo Computacional

El bienestar no ocurre todo a la vez. Sigue un orden computacional específico porque cada valor depende del anterior para ser calculado con precisión.

<img src="../../docs/v4/diagrama4_7.png"  width="350" alt="diagrama de flujo computacional v4.7" />

## 3. Post registro: El Vector de Deformación (Γ): ¿Cómo nos "hackean" las sustancias?

En el Conatus v4.7, las sustancias no solo "están" ahí; tienen una fuerza ($β$) y un tiempo de vida ($λ$). Para saber cuánto te afecta una sustancia en el momento exacto del cuestionario, usamos el Cálculo de Perturbación.

### A. Los tres ingredientes de la mezcla

Para cada sustancia que registras, el modelo mira tres datos:

- **Magnitud (Dosis):** ¿Fue un poquito (0.3) o una dosis de saturación (1.0)?
- **Afinidad ($β$)**: Qué tan fuerte "pega" esa sustancia en un neurotransmisor específico (ej: la cafeína tiene un $β$ de 1.4 en la Tensión).
- **Cronometría ($T_{exp}$​):** Cuántas horas han pasado desde que la consumiste.- 
B. La fórmula desmenuzada (Sin miedo)

La perturbación total para un neurotransmisor (como la Dopamina) se ve así:

$$Γ_j​=1+(Dosis⋅β⋅e^{−λ⋅T_{exp}}​)$$

Traducción humana:

- El "1" es tu estado natural (100%).
- El resto es el "extra" que aporta la sustancia.
- $e^{−λ⋅T_{exp}}$​ es el factor de desvanecimiento. Si ha pasado mucho tiempo ($T_{exp}$​ alto), el "extra" se vuelve casi cero y vuelves a tu estado natural (1).

### Ejemplo Real: El "Café de hace 5 horas"

Imagina que te tomaste un café fuerte (Dosis 1.0) hace 5 horas ($T_{exp}=5$). La vida media de la cafeína es de 5 horas ($λ=0.14$).

- Al inicio ($T=0$): Tu Tensión ($N$) se multiplicó por $2.4$. Te sentías eléctrico.
- Ahora ($T=5$): Como pasó una vida media, el efecto se redujo a la mitad. Tu multiplicador ahora es solo $1.7$.

### ¿Por qué es importante esto para el flujo?

Porque este valor ($Γ$) es el que entra en las ecuaciones de Impulso, Filtro y Lucidez que veremos ahora.

- Si el $Γ$ de la cafeína sigue alto, la Tensión ($N⋅Γ_N$​) será alta.
- Si esa tensión es alta, la Lucidez ($Ψ$) bajará por puro ruido sistémico, aunque creas que el café te está "ayudando" a concentrarte.


## 4. Las Fórmulas Desmenuzadas: El orden de los factores

### Paso 1: El Impulso y la Sorpresa ($x_{ef,D}$​)

Es lo primero que calculamos porque es el "motor".

$$x_{ef,D} = (D + δ_RPE) \cdot Γ_D \cdot (1 - 0.2(N \cdot Γ_N))$$

- La lógica: Sumamos tus ganas base ($D$) + el factor de sorpresa ($δ_{RPE}$​).
- **¿Qué es el $δ_{RPE}$​?** Es la diferencia entre lo que esperabas y lo que obtuviste.
  - Si el resultado es mejor de lo esperado ($δ>0$), tu potencia sube.
  - Si te decepciona ($δ<0$), sufres un "Dopamine Crash" que frena el sistema.
- El bloqueo: Si tienes mucha Tensión ($N$), ese motor se frena, sin importar cuántas ganas tengas.

### Paso 2: El Filtro ($x_{ef,G}$​)

Depende directamente del Impulso calculado justo antes.

$$x_{ef,G} = (G \cdot Γ_G) \cdot (S \cdot Γ_S) \cdot (1 - α \cdot x_{ef,D})$$

- La lógica: Representa tu capacidad de autocontrol y calma (G).
- La dependencia: Si el impulso (xef,D​) es demasiado alto, "quema" el filtro. Por eso, bajo mucha tentación o entusiasmo, es casi imposible frenarse.

### Paso 3: La Lucidez ($x_{ef,Ψ}$​)

Es el resultado dependiente de que ela rumiación mental ($Glu$) y la Tensión ($N$) estén bajo control. Dicho resultado es perturbado por sustancias que impactan en la occitocina y la tensión basal, como también es modulado levemente por un factor de acetilcolina (que brinda lucidez y control atencional (Klinkenberg et al.))

$$x_{ef,Ψ} = (1 - (Glu \cdot Γ_{Glu})) \cdot \left(\frac{O}{1 + (N \cdot Γ_N)}\right) \cdot (1 + \rho \cdot ACh)$$


### Paso 4: Fortaleza Efectiva ($k_{ef}$)


Antes de ver qué tan frágil es el sujeto, calculamos cuánta de su virtud/fuerza puede usar realmente. El Cortisol alto actúa como un "ruido" que bloquea el acceso a la capacidad estructural.

$$k_{ef} = k \cdot e^{-\delta (C - C_0)^2}$$

> El Cortisol fuera de rango ($C \neq C_0$) bloquea el acceso a la virtud propia.

## 4. El cálculo de la Fragilidad (F)

Una vez que el flujo recorre todos estos pasos, el sistema calcula F. Si la carga de lucidez es mucha y tus filtros son pocos, el sistema entra en riesgo de colapso.

$$F = \frac{x_{ef, \Psi}}{1 + x_{ef, G}} \cdot e^{-(k_{ef} \cdot S)}$$

  **Nota Spinozista v4.7**: Primero aparece el deseo (Cupiditas) afectado por la expectativa, luego intentamos moderarlo, y solo al final, si el torbellino se calma, emerge la Razón (Ψ).

## 5. Ejemplo práctico!

Supongamos que el Sujeto A tiene este perfil de $S_{int}$

### 1. Entradas (Inputs) y Normalización

Primero, recolectamos los datos del cuestionario (escala 1-10) y los normalizamos al rango [0,1].

- Sustento Basal: M=3 (Mal sueño), E=4, I=6.
- Motor: D=5, N=8 (Mucha tensión), ACh=5.
- Filtro: G=5, Glu=7 (Rumiación alta), Ψbase​=5.
- Arraigo: S=4 (Inseguridad), O=6, C=4.
- Sustancia (X): Cafeína (Dosis Alta = 1.0). Ingerida hace 1 hora (Texp​=1).

### 2. Rama Izquierda: Deformación por Sustancia ($Γ$)

Calculamos el impacto de la cafeína usando el decaimiento exponencial (λ=0.14 para 5h de vida media).

$$ΓN​=1+(1.4⋅1.0⋅e−0.14⋅1)≈2.21$$

$$ΓD​=1+(1.2⋅1.0⋅e−0.14⋅1)≈2.04$$

> **Resultado**: La cafeína está multiplicando su tensión (N) por 2.21 y su impulso (D) por 2.04.

### 3. Cascada de Salida Operativa ($x_{ef}$​)

### Paso A: El Impulso ($x_{ef,D}$​)

El Sujeto A esperaba que el café lo motivara mucho ($D_{exp}​=9$), pero se siente inquieto ($D_{real}​=5$). $δ_{RPE}​=5−9=−4$ (Decepción dopaminérgica).
$$x_{ef,D}​=max(0,(D_{norm}​+δ_{RPE_norm​})⋅Γ_D​⋅(1−0.2(N_{norm​}⋅Γ_N​)))$$

Aplicando valores normalizados: $x_{ef,D}​=max(0,(0.44−0.44)⋅…)=0.0.$

    Interpretación: La decepción ($δ_{RPE}$​) anuló por completo el efecto motor del café. El sujeto tiene energía física, pero cero ganas de hacer cosas.

### Paso B: El Filtro ($x_{ef},G$​)

$$x_{ef},G​=(G⋅Γ_G​)⋅(S⋅Γ_S​)⋅(1−α⋅x_{ef,D}​)$$

Como $x_{ef},D$​ es 0, el filtro no se ve saboteado por el impulso, pero está débil por la baja seguridad ($S=0.33$): 
$$x_{ef,G}​=(0.44⋅1)⋅(0.33⋅1)⋅(1−0)≈0.14$$

> **Interpretación**: Tiene un filtro bajísimo. No puede frenar sus pensamientos negativos.

### Paso C: La Lucidez ($x_{ef,Ψ}$​)

$$x_{ef,Ψ}​=(1−(Glu⋅Γ_{Glu}​))⋅(1+(N⋅Γ_N​)O​)⋅(1+ρ⋅ACh)$$

$$x_{ef,Ψ​}=(1−0.66)⋅(0.55/(1+0.77⋅2.21))⋅1.05≈0.07$$

> **Interpretación**: Lucidez casi inexistente. El ruido mental ($Glu$) y la tensión disparada por el café ($N$) "nublaron" su visión.

### Paso D: fortaleza

$$k_{ef} = k \cdot e^{-\delta (C - C_0)^2}$$

Cálculo:

- **Diferencia de estrés $(C-C_0)$:** (0.8−0.55)=0.25.
- **Cuadrado de la diferencia:** 0.252=0.0625.
- **Exponente**: −2.5⋅0.0625=−0.15625.
- **Resultado**: $k_{ef}​=10⋅e^{−0.15625}≈8.55$
- **Interpretación**: Aunque el sujeto "vale" 10 en fortaleza, su nivel de estrés actual solo le permite usar el 85.5% de su capacidad. Ha perdido casi un 15% de su resiliencia solo por la tensión biológica.

### 4. Resultado Final: Fragilidad (F)


$$ F=\frac{x_{ef,Ψ}}{1+x_{ef,G}​}​​ \cdot e^{−(k_{ef}​⋅S)}$$

$$F=(0.07/1.14)⋅e^{−(8.55⋅0.33)}=0.061⋅0.059≈0.0036$$

Significado: El valor de F es numéricamente bajo, pero esto es una trampa del sistema. El sujeto no está en colapso activo (pánico), sino en un estado de estancamiento o parálisis por análisis. Al tener una Lucidez ($Ψ$) tan baja, el sistema no tiene "presión" suficiente para estallar, pero tampoco tiene potencia para obrar. Si un estímulo externo subiera la demanda de lucidez repentinamente, el sistema colapsaría de inmediato porque el blindaje estructural ($k_{ef​}⋅S$) está muy debilitado.

### Diagnóstico del Sistema:

> - **Fractura de Recuperación**: **Activa**. Existe una disonancia crítica porque el Impulso ($x_{ef},D$​) es nulo (0.0) mientras que la Reparación ($M$) es bajísima (0.22 normalizado). El sistema está intentando "pedir" energía que no tiene cómo procesar, lo que genera un desgaste sin avance.

> - **Índice $τ$:** $τ = Γ/k_{ef}​≈2.21/8.55≈0.25$
>   - **Interpretación**: Aunque el valor está por debajo de 1.0 (Autonomía), la calidad de esa autonomía es pobre. El sujeto no es dependiente químico de la sustancia para existir, pero ha usado la cafeína para "inflar" una tensión ($N$) que su estructura ($k_{ef}$​) no puede canalizar hacia la lucidez.

> - **Estado General:** **Servidumbre Pasional**. El sujeto es víctima de sus afecciones (mal sueño + decepción por δRPE​ + exceso de tensión por café). Su Conatus está operando al mínimo, simplemente sobreviviendo al ruido interno.

## Tarea Práctica para el alumno:

**Detecta tu $δ_{RPE}$​ de hoy:**

- Piensa en algo que hiciste hoy esperando un resultado (ej: enviar un mensaje, hacer una tarea).
- ¿El resultado fue mejor o peor de lo esperado?
- ¿Cómo afectó eso a tus ganas de seguir haciendo cosas en la siguiente hora? (Ahí viste a tu $x_{ef},D$​ en acción).