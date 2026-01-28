/**
 * MODELO ONTOLÓGICO DE LA FUNCIÓN TRANQUILIDAD (T) v2.0
 * Representación de la eficiencia del Conatus frente al estrés.
 */

interface ClusterParams {
  beta2: number;   // Sensibilidad
  delta_ruido: number; // Ruido interno
  lambda_dig: number;  // Digestión del afecto
  mu_learn: number;    // Aprendizaje/Integración
  gamma_amort: number; // Amortiguación
}

type ClusterType = 'K' | 'L' | 'M' | 'N' | 'O' | 'P';

const CLUSTER_MAP: Record<ClusterType, ClusterParams> = {
  K: { beta2: 0.8, delta_ruido: 0.5, lambda_dig: 0.2, mu_learn: 0.2, gamma_amort: 0.5 },
  L: { beta2: 0.8, delta_ruido: 0.8, lambda_dig: 0.5, mu_learn: 0.5, gamma_amort: 0.2 },
  M: { beta2: 0.2, delta_ruido: 0.2, lambda_dig: 0.2, mu_learn: 0.1, gamma_amort: 0.9 },
  N: { beta2: 0.5, delta_ruido: 0.5, lambda_dig: 0.2, mu_learn: 0.2, gamma_amort: 0.5 },
  O: { beta2: 0.5, delta_ruido: 0.2, lambda_dig: 0.8, mu_learn: 0.5, gamma_amort: 0.5 },
  P: { beta2: 1.0, delta_ruido: 1.0, lambda_dig: 0.05, mu_learn: 0.01, gamma_amort: 0.9 },
};

interface SubjectState {
  delta: number; // Autovalencia Física [0,1]
  phi: number;   // Autovalencia Psíquica [0,1]
  A: number;     // Energía Activa
  D: number;     // Dopamina/Logro
  p: number;     // Fricción/Claridad [0,1]
  K_val: number; // Saber acumulado
  t: number;     // Tristeza de fondo
  gamma_base: number; // Permeabilidad base ]0,1[
}

interface StressEvent {
  f_ext: number; // Fuerza del evento
  duration: number; // Tiempo de exposición
}

/**
 * Calcula la resultante T basada en el estado actual y un evento de estrés.
 */
function calculateTranquility(
  subject: SubjectState,
  clusterType: ClusterType,
  event: StressEvent
): { T: number; gamma_final: number; S: number } {
  
  const params = CLUSTER_MAP[clusterType];

  // 1. Cálculo de Gamma Final (Afectado por el evento y el cluster)
  // Gamma aumenta con la fuerza externa, modulado por la sensibilidad (beta2) y el ruido interno.
  let gamma_final = subject.gamma_base + (event.f_ext * params.beta2 * (1 - params.gamma_amort));
  gamma_final = Math.min(0.99, Math.max(0.01, gamma_final)); // Mantener en el intervalo ]0,1[

  // 2. Cálculo de S (Estabilidad Biológica)
  // S = (delta * phi) * e^(-lambda * gamma)
  // Usamos lambda_dig del cluster como el factor de decaimiento ante el estrés.
  const decayFactor = params.lambda_dig > 0 ? params.lambda_dig : 0.01;
  const S = (subject.delta * subject.phi) * Math.exp(-decayFactor * gamma_final);

  // 3. Procesamiento del Numerador (Potencia vs Afectos Tristes)
  const potenciaActiva = subject.p * (subject.A * subject.D);
  
  // El término del saber (K) amortigua la tristeza. Si K es alto, ln(1/K) baja.
  // Pero el cluster N o P pueden dificultar esta integración (mu_learn).
  const integracionK = Math.log(1 / (subject.K_val * params.mu_learn + 0.001));
  const afectoPasivo = (1 - subject.p) * (subject.t + integracionK);

  const numerador = S * (potenciaActiva - afectoPasivo);

  // 4. El Denominador (Fuerza del mundo filtrada por gamma)
  // El ruido interno (delta_ruido) del cluster actúa como un multiplicador de fricción ambiental.
  const denominador = (event.f_ext + params.delta_ruido) * gamma_final;

  const T = numerador / (denominador || 0.001);

  return { T, gamma_final, S };
}

// --- EJEMPLO DE SIMULACIÓN ---

const miSujeto: SubjectState = {
  delta: 0.8,  // Buen estado físico
  phi: 0.7,    // Psique estable
  A: 10,       // Alta energía activa
  D: 0.8,      // Buena recompensa
  p: 0.6,      // Fricción media (no es un anestesiado total)
  K_val: 5,    // Saber moderado
  t: 2,        // Tristeza base baja
  gamma_base: 0.2 // Poca permeabilidad inicial
};

const eventoCritico: StressEvent = { f_ext: 15, duration: 5 };

// Simular para Cluster M (Anestesia blanda) vs Cluster P (Crisis)
const resM = calculateTranquility(miSujeto, 'M', eventoCritico);
const resP = calculateTranquility(miSujeto, 'P', eventoCritico);

console.log(`Cluster M (Homeostasis): T = ${resM.T.toFixed(2)}, S = ${resM.S.toFixed(2)}`);
console.log(`Cluster P (Crisis): T = ${resP.T.toFixed(2)}, S = ${resP.S.toFixed(2)}`);