
# Conatus-Project v2.2

**Mathematical Modeling of the Power to Act and Affective Homeostasis.**

[Ver en español](./docs/readme-es.md)

`conatus-project` is a TypeScript-based framework designed to quantify **Tranquility ($T$)**. Based on the ontological synthesis of **Spinoza**, **Deleuze**, and **Stress Biochemistry**, it measures the efficiency of the *Conatus*—the effort to persevere in one’s own being.

---

## Ⅰ. Theoretical Framework

The model defines tranquility not as stasis, but as **optimal existential traction**. It integrates three pillars:
1. **Spinoza:** Joy as the increase of the power to act; sadness as its diminution.
2. **Deleuze:** The body as a system that composes or decomposes in encounters.
3. **Biochemistry:** Allostatic load ($\Gamma$) and its impact on systemic infrastructure ($S$).

---

## Ⅱ. The Master Equation (v2.2)

The Power to Act ($T$) is calculated as follows:

$$T = \frac{S(\Gamma) \cdot R \cdot [p(A \cdot D) - (1-p)(t + \ln(\frac{1}{K + \epsilon }))]}{F_{entorno} \cdot (\Gamma + \epsilon)}$$

### Key Variables & Survey Mapping

| Variable | Metric / Survey Question | Ontological Role |
| :--- | :--- | :--- |
| **$\delta$ (Delta)** | Physical energy, sleep, and nutrition quality. | Physical Autovalence |
| **$\phi$ (Phi)** | Mental clarity and emotional self-regulation. | Psychic Autovalence |
| **$A \cdot D$** | Motivation and dopamine-driven goal pursuit. | Active Power |
| **$t$** | Background emotional weight or melancholy. | Background Sadness |
| **$p_c$** | Capacity to cognitively identify affects. | Cognitive Clarity |
| **$p_x$** | Firmness and resolve in physical execution. | Praxis / Firmness |
| **$K$** | Understanding the causes of current affects. | Integration Knowledge |
| **$F_{ent}$** | Environmental resistance and social density. | Environmental Friction |
| **$\Gamma$** | Stress permeability and cortisol saturation. | Allostatic Load |
| **$R$** | Quality of social capital and support bonds. | Relational Resonance |
| **$\epsilon$** | **Constant: 0.1** | Vital Resistance |

---

## Ⅲ. Technical Architecture

### 1. Systemic Infrastructure $S(\Gamma)$
Structural stability decays exponentially as stress ($\Gamma$) increases:
$$S = (\delta \cdot \phi) \cdot e^{-\lambda \Gamma}$$

### 2. Weighted Integration ($p$)
The capacity to ground power depends more on firmness ($p_x$) than on mere clarity ($p_c$):
$$p = (0.4 \cdot p_c) + (0.6 \cdot p_x)$$

---

## Ⅳ. Ontological Diagnostics

The system identifies five primary "Pathologies of the Conatus":

1. **Self-Exploitation:** Using active power ($A$) to suppress exhaustion; success masking $S$ decay.
2. **Anesthetized Efficiency:** Forcing $p \to 1$ to avoid feeling; brittle peace without integration ($K$).
3. **Analysis Paralysis (Hyper-K):** Knowledge becoming an energy sink that fails to translate into praxis ($p$).
4. **Dissociated Mystic:** Seeking $T$ through spiritual bypass while ignoring the degradation of $S$.
5. **Hyper-Resistance:** Blind faith that will ($p$) can overcome a superior environmental friction ($F_{ent}$).

---

## Ⅴ. Viability Thresholds ($S$)

The product of physical ($\delta$) and psychic ($\phi$) autovalence determines system viability:

| Value ($\delta \cdot \phi$) | Regime | Systemic State |
| :--- | :--- | :--- |
| **< 0.3** | Passive Survival | Imminent collapse; $T$ is unattainable. |
| **0.3 - 0.6** | Active Vulnerability | Functional but at high risk of breakage. |
| **> 0.6** | Operational Stability | Solid base for the exercise of power. |

---

## ⚖️ Ethics and Scope
This is an **affective mapping tool** intended for existential recalibration. It does not provide medical or clinical diagnoses. Its purpose is to visualize stress nodes and power leakage points to foster Spinozian "adequate ideas".

> *"Happiness is not the reward of virtue, but virtue itself."* — **Baruch Spinoza**

### 📝 Conatus-Project v2.2: Phenomenological Survey

Use the following questions to feed the model. Each response should be mapped to a value between **0.1 and 1.0**.

| Variable | Dimension | Phenomenological Question (The Felt Experience) |
| :--- | :--- | :--- |
| **$\delta$** | Physical | **How is your biological foundation today?** (Reflect on sleep quality, nutritional state, and the sensation of somatic energy). |
| **$\phi$** | Psychic | **Do you feel "at home" in your mind?** (Assess your level of mental clarity, focus, and the ability to regulate your emotional state). |
| **$A \cdot D$** | Dynamic | **Is there an internal engine driving you?** (Measure your current motivation, dopamine-driven desire, and the urge to achieve goals). |
| **$t$** | Affective | **How heavy is your emotional background?** (Evaluate the presence of melancholy, background sadness, or a "weight" on your chest). |
| **$p_c$** | Cognitive | **Can you name your shadows?** (Assess your clarity in identifying exactly which affects or feelings are passing through you). |
| **$p_x$** | Practical | **Are your actions firm and resolute?** (Reflect on your level of Praxis: the capacity to execute decisions without hesitation or "leakage"). |
| **$K$** | Ontological | **Do you understand the 'Why'?** (Measure your integration knowledge: how well you comprehend the causes of your current state). |
| **$F_{ent}$** | External | **How dense is the world around you?** (Rate the resistance, social pressure, or systemic friction the environment is exerting today). |
| **$\Gamma$** | Biochemical | **Is your filter saturated?** (Reflect on your stress permeability: the sensation of being overwhelmed or "cortisol-soaked"). |
| **$R$** | Relational | **Do you feel the resonance of others?** (Assess your social capital: do your current bonds amplify your power or drain it?). |

---

### ⚙️ Scoring Guide for Users
- **0.1 - 0.3:** Critical Deficit / Absolute Resistance.
- **0.4 - 0.6:** Fragile Equilibrium / Ambivalent State.
- **0.7 - 0.9:** High Potency / Optimal Alignment.
- **1.0:** Total Integration (Theoretical Limit).

---

### 💡 Implementation Tip
When presenting these questions to users, remind them that **$\epsilon$ (0.1)** is already hardcoded in the system as a constant of **Vital Resistance**. They don't need to answer for it; it represents the inherent "creative tension" that keeps them alive even at rest.

## Ⅵ. Interpreting Results (Phenomenological Feedback)

Based on the survey responses, the system translates the numerical output into existential feedback. This allows the user to understand which specific variable is draining their **Tranquility ($T$)**.

### 1. The Power-Knowledge Gap
* **If $T$ is high but $K < 0.3$:** You are experiencing "Blind Joy." You feel powerful, but you don't understand why. This state is vulnerable to sudden shifts in the environment.
* **If $K$ is high but $T$ is low:** You are in "Analysis Paralysis." You have the map, but you lack the fuel to move. Increase $A$ or $p_x$.

### 2. The Stress Saturation ($\Gamma$)
* **If $\Gamma > 0.8$:** Regardless of your $A$ or $K$, your system is "Cortisol-Soaked." The priority is not to achieve more, but to restore $S$ through rest ($\delta$) and silence ($\phi$).

### 3. The Relational Buffer ($R$)
* **If $R < 0.5$:** Your social environment is actively decomposing your power. You are working twice as hard to achieve half as much due to "Relational Friction".

---

## Ⅶ. Installation & Execution

The framework is located within the `scripts` directory. Follow these steps to set up and run the engine.

### Prerequisites
* **Node.js** (v16.0 or higher)
* **TypeScript** installed globally or as a dev dependency.

### Setup
1. **Clone the repository:**
```bash
git clone https://github.com/your-repo/conatus-project.git
cd conatus-project
```

2. **Install dependencies**:

```bash
cd scripts
npm install
```

3. **Run Conatus-Test (in scripts folder)**
```bash
npm start
```

## Ⅷ. Diagnostic Thresholds ($S=δ⋅ϕ$)

The viability of your system determines your operational regime:
|Value	| Regime	| Practical Implication|
|--------|---------|----------------------|
|< 0.3	     |Passive Survival	    |   Stop all non-essential output. Focus on sleep and basic safety. |
|0.3 - 0.6	 |Active Vulnerability  |	You can act, but your "armor" is thin. Avoid high-friction environments. |
|> 0.6	     |Operational Stability |	Your Conatus is well-grounded. This is the time for expansion and complex K. |