import { T } from "./motor-engine";

/**
 * CONATUS-PROJECT: Motor de Coherencia Afectiva
 */
export type ConatusCluster = 'K' | 'L' | 'M' | 'N' | 'O' | 'P';

export interface CoherenceReport {
  tCalculated: number;
  tIntuition: number;
  gap: number;
  perceptionStatus: 'Alineado' | 'Desconectado' | 'Sobrestimado';
  insight: string;
  balanceContable: BalancePsique,
  colchonPaz: string,
  brujula: DatoInsight,
  porosidad: DatoInsight,
  friccion: DatoInsight,
  serenidad: NivelDescripcion,
}

export interface BalancePsique {label: string, color:string, advice:string};
export interface DatoInsight { valor: number, insight: string };
export interface NivelDescripcion { nivel: string, descripcion: string };

export class ConatusDiagnostic {

  // deprecated in v2.2
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
  
  /**
   * Analiza la brecha entre la Tranquilidad calculada y la intuida.
   */
  static analyzeCoherence(tCalc: number, tUser: number, rawData:any, T:T): CoherenceReport {
    // Normalizamos tUser para que esté en el mismo rango que tCalc (usualmente 0-10)
    const gap = tUser - tCalc;
    const cluster = this.getCluster(rawData);
    let status: 'Alineado' | 'Desconectado' | 'Sobrestimado';
    let insight: string;

    insight = "";

    const friction = Math.abs(rawData.pc - rawData.px);

    if (friction > 4) {
      if (rawData.pc > rawData.px) {
        insight += "\n⚠️ DISPARIDAD: Tu comprensión está muy por delante de tu acción (Bucle Cognitivo).";
      } else {
        insight += "\n⚠️ DISPARIDAD: Estás actuando mucho más de lo que estás procesando (Impulsividad).";
      }
    }

    if (rawData.p < 3 && (rawData.pc > 6 || rawData.px > 6)) {
      insight += "\n🚨 RIESGO DE COLAPSO: Estás forzando el sistema. Tu claridad y acciones están drenando una reserva de energía casi inexistente.";
    }

    if (rawData.phi > rawData.delta + 3) {
      insight = "Resiliencia Intelectiva: Tu estabilidad psíquica sostiene un cuerpo frágil. ";
      insight += "Tu tranquilidad es una obra de arte de tu regulación emocional, pero recuerda que tu mente habita un soporte que requiere cuidado extremo.";
      
      if (rawData.relational < 5) {
        insight += " ⚠️ ALERTA: Tu aislamiento relacional es tu mayor amenaza estructural.";
      }
    }

    if (Math.abs(gap) <= 1.5) {
      status = 'Alineado';
      insight += "Tu percepción coincide con tu estado biológico. Posees una buena lectura de tus afectos.";
    } else if (gap > 1.5) {
      status = 'Desconectado';
      insight = "Tu mente percibe calma, pero el sistema detecta un costo biológico alto. Riesgo de anestesia operativa.";
      if (rawData.envPressure <= 2 && rawData.delta < 5) {
        insight += `\n⚠️ ADVERTENCIA: Tu tranquilidad actual depende de la baja presión externa (${rawData.envPressure}). Un aumento moderado del entorno podría desplomar tu bienestar debido a tu baja reserva física.`;
      }
    } else {
      status = 'Sobrestimado';
      insight = "Te percibes con menos tranquilidad de la que tu infraestructura sugiere. Posible sesgo cognitivo de negatividad o hiper-reflexividad.";
    }

    return {
      tCalculated: tCalc,
      tIntuition: tUser,
      gap: gap,
      insight:insight,
      perceptionStatus: status,
      balanceContable: this.analyzeEconomy(T.powerTerm, T.sadnessTerm),
      colchonPaz: this.colchonPaz(T.powerTerm, T.sadnessTerm),
      brujula: this.getBrujula(T.termK),
      porosidad: this.getPorosidad(T.S),
      friccion: this.getFriccion(T.denominator),
      serenidad: this.getSerenity(T)
    };
  }

  static analyzeEconomy(powerTerm: number, sadnessTerm: number): BalancePsique {
    const ratio = powerTerm / (sadnessTerm || 0.1); // Evitar división por cero
    
    if (ratio > 2) {
        return {
            label: "SUPERÁVIT",
            color: "green",
            advice: "Momento de alta capitalización. Tu energía activa es altamente eficiente."
        };
    } else if (ratio >= 1) {
        return {
            label: "SUPERVIVENCIA",
            color: "yellow",
            advice: "Equilibrio dinámico. Estás metabolizando la tristeza, pero con costo energético alto."
        };
    } else {
        return {
            label: "DÉFICIT",
            color: "red",
            advice: "Entropía detectada. El lastre (sadnessTerm) supera tu tracción actual. Requiere poda de compromisos o descanso inmediato."
        };
    }
  }

  static getBrujula(termK: number): DatoInsight {
    let insight: string;
    if (termK > 0.7) {
        insight = "Tu inteligencia emocional es tu mayor ancla; comprendes las causas de lo que sientes.";
    } else if (termK > 0.4) {
        insight = "Comprensión moderada. Sabes qué pasa, pero la narrativa aún no te da paz total.";
    } else {
        insight = "Brújula dispersa. Te cuesta encontrarle el sentido lógico a tu estado actual.";
    }
    return { valor: Number(termK.toFixed(2)), insight };
  }

  static getPorosidad(S: number): DatoInsight {
    let insight: string;
    if (S > 0.7) {
        insight = "Alta permeabilidad. Estás absorbiendo el entorno como una esponja; cuidado con la sobrecarga.";
    } else if (S > 0.3) {
        insight = "Filtro equilibrado. Conectas con el afuera sin perder tu centro.";
    } else {
        insight = "Blindaje afectivo. Estás muy cerrado al entorno, lo cual te protege pero te aísla.";
    }
    return { valor: Number(S.toFixed(2)), insight };
  }

  static getFriccion(denominator: number): DatoInsight {
    let insight: string;
    // Asumiendo que un denominador base es 1, valores altos indican mucha carga
    if (denominator > 3) {
        insight = "Fricción crítica. La realidad está 'pesada'; avanzar hoy te exige un esfuerzo heroico.";
    } else if (denominator > 1.5) {
        insight = "Fricción moderada. Hay resistencia en el ambiente, pero tu inercia es manejable.";
    } else {
        insight = "Camino despejado. Tu infraestructura y entorno están fluyendo sin oponer resistencia.";
    }
    return { valor: Number(denominator.toFixed(2)), insight };
  }

  static getSerenity(resT: T): NivelDescripcion {
    const ratio = resT.powerTerm / (resT.sadnessTerm || 0.1);
    const isRational = resT.termK > 0;
    
    if (resT.tLikert >= 7 && isRational && ratio > 1.5) {
        return { 
            nivel: "Serenidad Estoica (Eutimia)", 
            descripcion: "Tu paz es profunda, comprendida y sostenible." 
        };
    } else if (resT.tLikert >= 7 && !isRational) {
        return { 
            nivel: "Serenidad Frágil (Euforia)", 
            descripcion: "Estás bien, pero no sabes por qué. Es un estado vulnerable al cambio." 
        };
    } else {
        return { 
            nivel: "Inquietud del Alma", 
            descripcion: "Tu espíritu aún está en lucha con sus propias sombras o falta de energía." 
        };
    }
  }

  static colchonPaz(powerTerm: number, sadnessTerm: number): string {
    const margin = powerTerm - sadnessTerm;
    let userFriendlyMargin: string;

    if (margin > 2) {
        userFriendlyMargin = " Amplio - Tienes una reserva robusta. Puedes permitirte percances hoy sin perder tu centro.";
    } else if (margin > 0.5) {
        userFriendlyMargin = "Estrecho - Tu paz es real pero delicada. Evita sobrecargas; no tienes mucho espacio para imprevistos: CUIDA TU TRANQUILIDAD PERCIBIDA";
    } else {
        userFriendlyMargin = " Al límite - Estás operando al límite. Cualquier fricción mínima te desplazará hacia la tristeza o el agotamiento.";
    }
    return userFriendlyMargin;
  }
}