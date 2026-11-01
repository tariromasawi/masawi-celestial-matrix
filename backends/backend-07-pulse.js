/**
 * Backend 07 – Pulse Engine
 */
const { NAME, ALPHA, BETA, GAMMA, SEAL } = require('../matrix-core/constants');

let cycle = 0;

function pulse() {
  cycle++;
  const intensity = cycle % 5 === 0 ? '\x1b[1m\x1b[35m' : '\x1b[35m';
  process.stdout.write(`${intensity}${NAME}\x1b[0m `);
  if (cycle % 333 === 0) {
    console.log(`\n[BACKEND-07 PULSE] Strong pulse ${cycle} | ${SEAL}`);
  }
}

console.log(`[BACKEND-07 PULSE] Online for ${NAME}`);
setInterval(pulse, 70);
