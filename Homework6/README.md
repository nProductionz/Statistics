# Homework: Gambler's Ruin Problem and Its Analogy

## Introduction
In this assignment, we will explore the "Gambler's Ruin Problem" and investigate any potential analogies it may have with the given exercise. Additionally, we will provide personal considerations based on the simulation.

## The Gambler's Ruin Problem
The Gambler's Ruin Problem is a classic concept in probability and statistics. It models a situation where two gamblers, often referred to as Player A and Player B, repeatedly bet on a fair game, such as a coin toss. Each player starts with a certain amount of money, and they continue to bet until one of them goes broke. The problem seeks to understand the probabilities and expected outcomes of this scenario.

In this problem, Player A and Player B have initial capital, and they place bets. The game continues until one of the players loses all their money. The key variables involved are:
- Initial capital of Player A: $A
- Initial capital of Player B: $B
- Probability of Player A winning a single bet: p
- Probability of Player B winning a single bet: q = 1 - p

## Analogy with the Given Exercise
The example provided might share some similarities with the Gambler's Ruin Problem. To identify potential analogies, we should consider the following:
- Initial conditions: What are the starting conditions in the exercise?
- Probabilities: Are there probabilities or odds involved in the exercise, like the probability of success in each trial?

An analogy may be drawn if the exercise involves a scenario where two or more parties are involved, and they face uncertain outcomes that could lead to success or failure. It might also involve a process that continues until a certain condition is met.

## Personal Considerations
My simulation suggests that both the Gambler's Ruin Problem and the given exercise share a common theme of uncertainty and risk. In both cases, the outcome depends on a series of events with probabilistic outcomes. These scenarios can be used to study concepts such as risk management, expected values, and the probability of reaching a certain goal or going broke.

Furthermore, simulations can provide insights into the dynamics of these situations. The results of simulations can help us understand the likelihood of different outcomes and the impact of initial conditions. This knowledge can be valuable in decision-making, particularly in scenarios involving financial investments, games of chance, and risk assessment.

In conclusion, while the Gambler's Ruin Problem and the given exercise may not be identical, they share a common statistical foundation. Both involve analyzing the likelihood of success or failure in scenarios with uncertain outcomes. The simulation in the exercise can offer valuable insights into the principles of probability, which can be applied in various real-world situations.


### Example:

This is a Python example to simulate the Gambler's Ruin Problem:

```Python
import random

def gambler_ruin(start_amount, target_amount, win_prob):
    money = start_amount
    steps = 0

    while money > 0 and money < target_amount:
        steps += 1
        if random.random() < win_prob:
            money += 1
        else:
            money -= 1

    return money == target_amount, steps

start_money = 50
goal_money = 100
win_probability = 0.5

trials = 1000
success_count = 0
total_steps = 0

for _ in range(trials):
    success, steps = gambler_ruin(start_money, goal_money, win_probability)
    if success:
        success_count += 1
    total_steps += steps

success_rate = success_count / trials
average_steps = total_steps / trials

print(f"Success rate: {success_rate}")
print(f"Average steps to reach goal: {average_steps}")


```


# Excercise 1

> Consider a scheme where M systems are subject to a series of N attacks. A system is discarded as "unsecure" if it reaches a penetration score of P before reaching, instead, a security score of S. Simulate and represent the probabilities of a system being discarded, for various values of P, example: P = k*10 (k=2,...,10), conditional on the 3 cases for S: S = 20, S = 60, S = 100

The following program simulates many attacks and calculates the probability of each system to be marked as "unsecure" following the text of the request.

## Javascript

```Javascript

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


```

## C#

```C#

using System;

class Program
{
    static Random random = new Random();

    static double SimulateDiscardProbability(int M, int N, int P, int S)
    {
        int discardedCount = 0;

        for (int i = 0; i < M; i++)
        {
            double penetrationScore = 0;

            for (int j = 0; j < N; j++)
            {
                penetrationScore += random.NextDouble() * 100; // Simulating an attack, adding a random penetration score

                if (penetrationScore >= P)
                {
                    break; // System is secure, no need to continue attacks
                }

                if (penetrationScore < S)
                {
                    discardedCount++;
                    break; // System is discarded
                }
            }
        }

        return (double)discardedCount / M; // Probability of being discarded
    }

    static void RunSimulation()
    {
        const int M = 10000; // Number of systems
        const int N = 10;    // Number of attacks

        int[] SValues = { 20, 60, 100 }; // Different values of S

        for (int k = 2; k <= 10; k++)
        {
            int P = k * 10;

            foreach (int S in SValues)
            {
                double probability = SimulateDiscardProbability(M, N, P, S);

                Console.WriteLine($"For P = {P} and S = {S}, Probability of being discarded: {probability}");
            }
        }
    }

    static void Main()
    {
        RunSimulation();
    }
}


```




