
import { ConatusDiagnostic } from './motor-conatus.ts'; 
import { ConatusEngineV22 } from './motor-engine.ts';
import { normalizeResponses } from './normalizeResponses.ts';
import inquirer from 'inquirer';

async function runInteractiveSurvey() {
  console.log("=== BIENVENIDO AL CUESTIONARIO CONATUS v2.2.1 ===");
  console.log("Por favor, responde con valores del 1 al 10.\n");

  const answers = await inquirer.prompt([
    { type: 'number', name: 'delta', message: 'Autovalencia Física (Salud/Energía):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'phi', message: 'Autovalencia Psíquica (Estabilidad):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'pc', message: 'Claridad Cognitiva (Entender qué sientes):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'px', message: 'Praxis (Capacidad de actuar):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'A', message: 'Energía Activa (Impulso):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'D', message: 'Recompensa (Satisfacción):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'K', message: 'Saber Integrativo (Autoconocimiento):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 't', message: 'Melancolía de Fondo (Peso emocional):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'gamma', message: 'Permeabilidad (Sensibilidad al entorno):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'Ra', message: 'Apoyo Relacional (Cuentas con alguien):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'Rr', message: 'Reciprocidad (Vínculos sanos):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'F_ext', message: 'Presión del Entorno (Hostilidad externa):', validate: v => v !>= 1 && v! <= 10 },
    { type: 'number', name: 'T_intuition', message: 'CALIBRACIÓN: ¿Del 1 al 10, qué tan tranquilo te sientes ahora?', validate: v => v !>= 1 && v! <= 10 },
    { type: 'input', name: 'user_note', message: '¿Algo que los números no capturen? (Opcional):' }
  ]);

  console.log("\n--- Procesando resultados ---");

  // 1. Normalización
  const cleanData = normalizeResponses(answers);

  // 2. Cálculo de T
  const T = ConatusEngineV22.calculate(cleanData);

  // 3. Diagnóstico
  const report = ConatusDiagnostic.analyzeCoherence(T, answers.T_intuition);

  // 4. Reporte Final
  console.log("==========================================");
  console.log(`RESULTADO T CALCULADO: ${T.toFixed(2)}`);
  console.log(`PERCEPCIÓN USUARIO:   ${answers.T_intuition.toFixed(2)}`);
  console.log(`ESTADO: ${report.perceptionStatus.toUpperCase()}`);
  console.log(`INSIGHT: ${report.insight}`);
  if (answers.user_note) {
    console.log(`NOTA CUALITATIVA: "${answers.user_note}"`);
  }
  console.log("==========================================\n");
}

runInteractiveSurvey().catch(err => console.error("Error en el cuestionario:", err));