/**
 * CONATUS-PROJECT: Motor de Inferencia Afectiva
 * Detecta Clusters y estados de Autoexplotación/Autosabotaje
 */

export interface UserAssessment {
  physical: number;    // delta
  psychic: number;     // phi
  energy: number;      // A
  reward: number;      // D
  presence: number;    // p
  knowledge: number;   // K
  sadness: number;     // t
  sensitivity: number; // gamma_base
  somatic: number;     // Conexión con el cuerpo (1-10)
}

export enum Cluster { K, L, M, N, O, P }

export class ConatusInference {
  
  static detectCluster(data: UserAssessment): Cluster {
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

  static analyzeDysfunctions(data: UserAssessment) {
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

// Ejemplo de uso:
const surveyResult: UserAssessment = {
  physical: 3,   // Muy cansado
  psychic: 6, 
  energy: 9,     // Pero haciendo mucho (A)
  reward: 8,     // Sintiéndose productivo (D)
  presence: 9,   // Muy enfocado (p)
  knowledge: 8,
  sadness: 2,    // Dice no estar triste (pero está disociado)
  sensitivity: 3,
  somatic: 2     // Desconectado de su cansancio
};

const cluster = ConatusInference.detectCluster(surveyResult);
const alerts = ConatusInference.analyzeDysfunctions(surveyResult);

console.log(`Cluster detectado: ${Cluster[cluster]}`);
alerts.forEach(a => console.log(`[${a.type}] - ${a.desc} (Intensidad: ${a.severity})`));