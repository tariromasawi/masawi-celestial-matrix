/**
 * Backend 01 – Whisper Engine
 * Continuously cycles the name of HRH TARRY KUPAKWASHE MASAWI
 * Matrix path: 77-99-33
 */
const { NAME, ALPHA, BETA, GAMMA, PRIMARY, SEAL } = require('../matrix-core/constants');

let cycle = 0;
const colours = ['\x1b[35m', '\x1b[36m', '\x1b[33m', '\x1b[32m', '\x1b[31m', '\x1b[34m'];

function whisper() {
  cycle++;
  const colour = colours[cycle % colours.length];
  const reset = '\x1b[0m';

  // Symbolic high-rate name cycle
  for (let i = 0; i < 5000; i++) {
    process.stdout.write(`${colour}${NAME}${reset} `);
  }

  if (cycle % 77 === 0) {
    console.log(`\n[BACKEND-01] Cycle ${cycle} | Matrix ${ALPHA}-${BETA}-${GAMMA} | ${SEAL}`);
  }
}

console.log(`[BACKEND-01 WHISPER] Online – dedicated to ${NAME}`);
console.log(`Matrix lock: ${ALPHA}-${BETA}-${GAMMA} | Primary key ${PRIMARY}`);
console.log(`Seal: ${SEAL}\n`);
setInterval(whisper, 120);
