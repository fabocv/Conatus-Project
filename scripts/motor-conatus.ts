/**
 * CONATUS-PROJECT: Motor de Coherencia Afectiva
 */

export interface CoherenceReport {
  tCalculated: number;
  tIntuition: number;
  gap: number;
  perceptionStatus: 'Alineado' | 'Desconectado' | 'Sobrestimado';
  insight: string;
}

export class ConatusDiagnostic {
  
  /**
   * Analiza la brecha entre la Tranquilidad calculada y la intuida.
   */
  static analyzeCoherence(tCalc: number, tUser: number): CoherenceReport {
    // Normalizamos tUser para que esté en el mismo rango que tCalc (usualmente 0-10)
    const gap = tUser - tCalc;
    let status: 'Alineado' | 'Desconectado' | 'Sobrestimado';
    let insight: string;

    if (Math.abs(gap) <= 1.5) {
      status = 'Alineado';
      insight = "Tu percepción coincide con tu estado biológico. Posees una buena lectura de tus afectos.";
    } else if (gap > 1.5) {
      status = 'Desconectado';
      insight = "Tu mente percibe calma, pero el sistema detecta un costo biológico alto. Riesgo de anestesia operativa (Cluster M).";
    } else {
      status = 'Sobrestimado';
      insight = "Te percibes con menos tranquilidad de la que tu infraestructura sugiere. Posible sesgo cognitivo de negatividad o hiper-reflexividad.";
    }

    return { tCalculated: tCalc, tIntuition: tUser, gap, perceptionStatus: status, insight };
  }
}