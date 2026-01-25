export type ConatusCluster = 'K' | 'L' | 'M' | 'N' | 'O' | 'P';

export class ConatusDiagnostic {
  
  static getCluster(data: any): { type: ConatusCluster, desc: string, regime: string } {
    // Mapeo de variables JSON a parámetros CT
    // data.gamma -> sensibilidad/amortiguación
    // data.delta/phi -> base regulatoria
    // data.K -> aprendizaje (mu) / digestión (lambda)
    // data.pc/px -> integración cognitiva/praxis

    const sensitivity = data.gamma / 10; 
    const regulation = (data.delta + data.phi) / 20;
    const knowledge = data.K / 10;

    // 1. CLUSTER P: Crisis / Desorganización
    if (regulation < 0.4 && sensitivity > 0.8) {
      return { 
        type: 'P', 
        desc: "Crisis aguda / desorganización. Falta de piso regulatorio.",
        regime: "Crisis"
      };
    }

    // 2. CLUSTER L: Sensible / Oscilante
    if (sensitivity > 0.7 && knowledge < 0.5) {
      return { 
        type: 'L', 
        desc: "Alta sensibilidad corporal sin integración. Sensación sin sentido.",
        regime: "Sensible / Oscilante"
      };
    }

    // 3. CLUSTER N: Cognitivo
    if (data.pc > 7 && data.px < 5) {
      return { 
        type: 'N', 
        desc: "Predominio cognitivo–reflexivo. Cuerpo mediado por conceptos.",
        regime: "Cognitivo"
      };
    }

    // 4. CLUSTER K: Relacional Inhibido
    if ((data.Ra + data.Rr) / 2 < 4) {
      return { 
        type: 'K', 
        desc: "Regulación relacional dañada o hiperadaptada. Dificultad para sentir con otros.",
        regime: "Relacional inhibido"
      };
    }

    // 5. CLUSTER M: Homeostasis (Tu estado actual)
    if (sensitivity < 0.4 && regulation > 0.6) {
      return { 
        type: 'M', 
        desc: "Funcionalidad estable con anestesia blanda. Poca fricción existencial.",
        regime: "Homeostasis"
      };
    }

    // 6. CLUSTER O: Regulación Suficiente (Default si hay equilibrio)
    return { 
      type: 'O', 
      desc: "Regulación suficiente. Riesgo de autosatisfacción.",
      regime: "Regulación suficiente"
    };
  }

  static analyzeCoherence(tCalc: number, tUser: number, rawData: any) {
    const gap = tUser - tCalc;
    const cluster = this.getCluster(rawData);
    
    let status = Math.abs(gap) <= 1.5 ? 'ALINEADO' : (gap > 1.5 ? 'DESCONECTADO' : 'SOBRESTIMADO');

    return {
      tCalculated: tCalc,
      tIntuition: tUser,
      gap: gap.toFixed(2),
      perceptionStatus: status,
      cluster: cluster.type,
      regime: cluster.regime,
      clusterDescription: cluster.desc,
      insight: `Trayectoria actual sugerida: ${cluster.type} → ...`
    };
  }
}