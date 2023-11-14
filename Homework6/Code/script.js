function simulateDiscardProbability(M, N, P, S) {
    let discardedCount = 0;

    for (let i = 0; i < M; i++) {
        let penetrationScore = 0;

        for (let j = 0; j < N; j++) {
            penetrationScore += Math.random() * 100; // Simulating an attack, adding a random penetration score

            if (penetrationScore >= P) {
                break; // System is secure, no need to continue attacks
            }

            if (penetrationScore < S) {
                discardedCount++;
                break; // System is discarded
            }
        }
    }

    return discardedCount / M; // Probability of being discarded
}

function runSimulation() {
    const M = 10000; // Number of systems
    const N = 10;    // Number of attacks

    const S_values = [20, 60, 100]; // Different values of S

    for (let k = 2; k <= 10; k++) {
        const P = k * 10;

        for (let i = 0; i < S_values.length; i++) {
            const S = S_values[i];

            const probability = simulateDiscardProbability(M, N, P, S);

            console.log(`For P = ${P} and S = ${S}, Probability of being discarded: ${probability}`);
        }
    }
}

runSimulation();
