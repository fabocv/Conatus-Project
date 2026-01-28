/**
 * CONATUS-PROJECT v2.2 - "The Clinical Update"
 */

import { NormalizedData } from "./normalizeResponses";

export interface T {
  p: number;
  termK: number;
  S: number;
  S_gamma: number;
  A_D: number;
  powerTerm: number,
  sadnessTerm: number;
  numerator: number;
  denominator: number;
  rawT : number;
  tLikert: number;
}

export class ConatusEngineV22 {
  private static readonly EPSILON = 0.1;
  private static readonly SCALE_FACTOR = 5.5; // Factor de ajuste para Likert 1-10

  static calculate(data: NormalizedData): T {
    const p = (0.4 * data.pc + 0.6 * data.px);
    const termK = Math.log(1 / (data.knowledge + this.EPSILON));
    const S = (data.delta * data.phi) 
    const S_gamma = S * Math.exp(-0.2 * data.sensitivity);

    const A_D = data.energy * data.reward;
    const powerTerm = p * A_D
    const sadnessTerm = (1 - p) * (data.sadness + termK); // fricción residual del sistema cuando la integración (p) es baja
    
    const numerator = S * data.relational * (powerTerm - sadnessTerm);
    const denominator = (data.envPressure + 1) * (data.sensitivity + this.EPSILON);

    const rawT = numerator / denominator;

    // --- REESCALADO A LIKERT 1-10 ---
    // Multiplicamos por el factor y sumamos 1 para que el rango sea [1, 10]
    let tLikert = (rawT * this.SCALE_FACTOR) + 1;
    tLikert = Math.min(Math.max(tLikert, 1), 10);

    return {
      p,
      termK,
      S,
      S_gamma,
      A_D,
      powerTerm,
      sadnessTerm,
      numerator,
      denominator, 
      rawT,
      tLikert
    };
  }

  // Lógica de validación para los umbrales de S
  static getSystemStatus(delta: number, phi: number): string {
    const product = delta * phi;
    if (product < 0.3) return "SUPERVIVENCIA PASIVA (Alerta de Burnout/Colapso)";
    if (product < 0.6) return "VULNERABILIDAD ACTIVA";
    return "ESTABILIDAD OPERATIVA";
  }
}