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
