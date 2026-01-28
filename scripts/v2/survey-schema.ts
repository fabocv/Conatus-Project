/**
 * Estructura del Cuestionario Conatus v2.2
 */

export interface Question {
  id: string;
  variable: string; // Mapeo directo a la fórmula
  section: string;
  label: string;
  description: string;
  min: number;
  type: string,
  max: number;
}

export interface ConatusSurvey {
  version: string;
  sections: {
    id: string;
    title: string;
    description: string;
  }[];
  questions: Question[];
}

export const SURVEY_DATA: ConatusSurvey = {
  version: "2.2",
  sections: [
    { id: "S", title: "Infraestructura del Sujeto", description: "Evaluación de la base biológica y psíquica." },
    { id: "P", title: "Coeficiente de Integración", description: "Capacidad de procesar y actuar sobre los afectos." },
    { id: "Pot", title: "Régimen de Potencia", description: "Energía, satisfacción y melancolía de fondo." },
    { id: "Env", title: "Entorno y Resonancia", description: "Relación con el mundo y los otros." },
    { id: "Cal", title: "Calibración", description: "Validación somática e intuitiva." }
  ],
  questions: [
    // SECCIÓN S
    {
      id: "q1",
      section: "S",
      variable: "delta",
      label: "Autovalencia Física",
      description: "¿Qué tan capaz y con cuánta energía física sientes que cuenta tu cuerpo hoy?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q2",
      section: "S",
      variable: "phi",
      label: "Autovalencia Psíquica",
      description: "¿Qué tanta estabilidad mental sientes para procesar tus emociones sin colapsar?",
      type: 'range',
      min: 1, max: 10
    },
    // SECCIÓN P
    {
      id: "q3",
      section: "P",
      variable: "pc",
      label: "Claridad Cognitiva",
      description: "¿Qué tan rápido y claro logras identificar qué sientes y por qué?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q4",
      section: "P",
      variable: "px",
      label: "Praxis (Acción)",
      description: "¿Qué tan capaz te sientes de llevar a la acción real lo que sabes que te hace bien?",
      type: 'range',
      min: 1, max: 10
    },
    // SECCIÓN POTENCIA
    {
      id: "q5",
      section: "Pot",
      variable: "A",
      label: "Energía Activa",
      description: "¿Qué tanta intensidad de impulso o 'fuerza de empuje' sientes para tus proyectos?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q6",
      section: "Pot",
      variable: "D",
      label: "Recompensa (Dopamina)",
      description: "¿Qué tanto placer o satisfacción real te genera lo que logras terminar?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q7",
      section: "Pot",
      variable: "K",
      label: "Saber Integrativo",
      description: "¿Qué tanto conocimiento tienes sobre tu propia historia y mecanismos de respuesta?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q8",
      section: "Pot",
      variable: "t",
      label: "Melancolía de Fondo",
      description: "¿Hay un 'peso emocional' presente incluso cuando las cosas van bien?",
      type: 'range',
      min: 1, max: 10
    },
    // SECCIÓN ENTORNO
    {
      id: "q9",
      section: "Env",
      variable: "gamma",
      label: "Permeabilidad",
      description: "¿Qué tan 'poroso' te sientes ante ruidos, críticas o noticias externas?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q10",
      section: "Env",
      variable: "Ra",
      label: "Apoyo Relacional",
      description: "¿Cuentas con personas con quien puedas ser tú mismo sin ser juzgado?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q11",
      section: "Env",
      variable: "Rr",
      label: "Reciprocidad",
      description: "¿Tus vínculos son de mutuo beneficio o sientes que solo entregas?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q12",
      section: "Env",
      variable: "F_ext",
      label: "Presión del Entorno",
      description: "¿Qué tan hostil o demandante percibes que es tu ambiente actual?",
      type: 'range',
      min: 1, max: 10
    },
    // SECCIÓN CALIBRACIÓN
    {
      id: "q13",
      section: "Cal",
      variable: "somatic",
      label: "Conexión Corporal",
      description: "¿Qué tan fácil te resulta sentir tus latidos o respiración ahora mismo?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q14",
      section: "Cal",
      variable: "T_intuition",
      label: "Pregunta de Calibración",
      description: "Del 1 al 10, independientemente de lo que hayas respondido antes, ¿qué tan tranquilo/a te sientes en este preciso momento?",
      type: 'range',
      min: 1, max: 10
    },
    {
      id: "q15",
      section: "Cal",
      variable: "qualitative_feedback",
      label: "Observación Fenomenológica",
      description: "¿Hay algo sobre tu estado actual, alguna sensación o circunstancia, que sientas que estos números no han logrado capturar?",
      type: 'text',
      min:-1, max: -1
    }
  ]
};