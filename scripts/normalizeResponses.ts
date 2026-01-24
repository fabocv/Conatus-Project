export interface NormalizedData {
  delta: number;      // Autovalencia Física [0,1]
  phi: number;        // Autovalencia Psíquica [0,1]
  pc: number;         // Claridad [0,1]
  px: number;         // Praxis [0,1]
  energy: number;     // A [1,10]
  reward: number;     // D [0,1]
  knowledge: number;  // K [1,10]
  sadness: number;    // t [1,10]
  sensitivity: number;// Gamma [0.1, 1]
  relational: number; // R [0.2, 2.0]
  envPressure: number;// F_ext [1,10]
}

export function normalizeResponses(responses: Record<string, number>): NormalizedData {
  return {
    delta: responses['delta'] / 10,
    phi: responses['phi'] / 10,
    pc: responses['pc'] / 10,
    px: responses['px'] / 10,
    energy: responses['A'],
    reward: responses['D'] / 10,
    knowledge: responses['K'],
    sadness: responses['t'],
    sensitivity: Math.max(0.1, responses['gamma'] / 10), // Aplicando el intervalo [0.1, 1]
    relational: ((responses['Ra'] + responses['Rr']) / 2) / 5, // 5 = 1.0 (neutro)
    envPressure: responses['F_ext'],
  };
}