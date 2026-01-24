/**
 * CONATUS-PROJECT v2.1
 * Integración de Feedback: Resistencia Vital, Coeficiente Praxis y Capital Relacional.
 */

export enum Cluster { K, L, M, N, O, P }

export class ConatusInference {
  
  static detectCluster(data: UserAssessmentV2): Cluster {
    const isDisconnected = data.somatic < 4;
    const isHighKnowledge = data.knowledge > 7;
    const isLowPresence = data.presence < 4;

    // Lógica de Clasificación
    if (data.physical < 3 && data.psychic < 3) return Cluster.P; // Crisis
    if (isDisconnected && data.energy > 6) return Cluster.M;    // Anestesia Funcional
    if (isHighKnowledge && isDisconnected) return Cluster.N;    // Hiper-cognitivo
    if (data.somatic > 7 && isLowPresence) return Cluster.L;    // Sensible oscilante
    if (isHighKnowledge && data.presence > 6 && data.physical > 5) return Cluster.O; // Regulación
    
    return Cluster.K; // Relacional / Por defecto
  }

  static analyzeDysfunctions(data: UserAssessmentV2) {
    const analyses = [];

    // 1. Detección de Autoexplotación
    // (Alta energía y presencia + Bajo soporte físico)
    if (data.energy > 7 && data.presence > 7 && data.physical < 5) {
      analyses.push({
        type: "AUTOEXPLOTACIÓN",
        severity: (data.energy - data.physical) / 10,
        desc: "Estás consumiendo tu infraestructura biológica para sostener el ritmo de acción."
      });
    }

    // 2. Detección de Autosabotaje
    // (Alto conocimiento + Baja capacidad de obrar)
    if (data.knowledge > 7 && data.presence < 4) {
      analyses.push({
        type: "AUTOSABOTAJE",
        severity: (data.knowledge - data.presence) / 10,
        desc: "Existe una brecha entre lo que comprendes (K) y tu potencia de actuar (p)."
      });
    }

    // 3. Índice de Certeza (Basado en la conexión somática)
    const certainty = data.somatic / 10;
    if (certainty < 0.5) {
      analyses.push({
        type: "SESGO_DISOCIATIVO",
        severity: 1 - certainty,
        desc: "Tus respuestas pueden estar mediadas por la mente; la realidad somática podría ser más crítica."
      });
    }

    return analyses;
  }
}



export interface UserAssessmentV2 {
  physical: number;    // delta
  psychic: number;     // phi
  energy: number;      // A
  reward: number;      // D
  presence: number;    // p
  knowledge: number;   // K
  sadness: number;     // t
  sensitivity: number; // gamma_base
  somatic: number;     // Conexión con el cuerpo (1-10)
  praxis: number;      // px: Capacidad de acción
  clarity: number;     // pc: Claridad mental
  relational: number;  // R: Capital social (0.5 a 1.5)
}

const EPSILON = 0.1; // Constante de resistencia vital para evitar T -> ∞

function calculateT_v21(data: UserAssessmentV2, event_f_ext: number): number {
  // 1. Unificación de p
  const p = (data.presence + data.praxis + data.clarity) / 3;

  // 2. Cálculo de S con decaimiento corregido
  const S = (data.physical * data.psychic) * Math.exp(-0.2 * data.sensitivity);

  // 3. Numerador con componente Social (R)
  const power = p * (data.energy * data.reward);
  const burden = (1 - p) * (data.sadness + Math.log(1 / (data.knowledge + 0.1)));
  
  // R multiplica la capacidad de aprovechar la potencia
  const numerator = S * (power - burden) * data.relational;

  // 4. Denominador con Epsilon (Evita la singularidad)
  const denominator = (event_f_ext + 1) * (data.sensitivity + EPSILON);

  return numerator / denominator;
}