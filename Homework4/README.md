# Homework 4

> ## Search on the web about the Law of large numbers LLN and compare it with Part b of your homework 3 and express in your own words whether your simulation is somehow related with this theorem, and why.

# Law of Large Numbers (LLN) and its Relation to Homework 3

In statistics, the Law of Large Numbers (LLN) is a fundamental theorem that describes the behavior of sample averages as the sample size increases. It states that as the sample size grows larger, the sample mean (average) converges to the population mean, and the sample proportion converges to the true probability.

## The LLN

The LLN can be expressed as follows:

1. **Weak LLN**: The sample mean (average) of a large enough sample approaches the population mean as the sample size goes to infinity.

2. **Strong LLN**: The sample proportion of a certain event (in this case, system penetration) converges to the true probability of that event as the sample size goes to infinity.

## Homework 3 Simulation

In your homework, you are simulating the behavior of M systems subject to a series of N attacks. On the x-axis, you indicate the attacks, and on the Y-axis, you simulate the accumulation of a "security score" (-1 for system penetration and 1 for successful protection). The simulation involves a constant penetration probability (p) at each attack.

### Relation to LLN

1. **Cumulated Frequency (f)**: In your simulation, you are calculating the cumulated frequency of penetration, which represents how many times the systems were penetrated as attacks progress. As the number of attacks (N) increases, the Weak LLN suggests that the average cumulated frequency should converge towards the true average, which is influenced by the constant penetration probability (p).

2. **Relative Frequency (f/Number of Attacks)**: This metric is similar to calculating the sample proportion of system penetrations. According to the Strong LLN, as the number of attacks (N) becomes very large, the relative frequency should converge to the true probability of penetration, which is the constant penetration probability (p).

3. **Normalized Ratio (f/√Number of Attacks)**: The LLN also applies to this metric. As N grows, the normalized ratio should converge to a specific value influenced by the penetration probability and the square root of the number of attacks.

In summary, your simulation is related to the Law of Large Numbers because it involves the study of how cumulative penetration frequencies, relative frequencies, and normalized ratios behave as the number of attacks (N) becomes larger. The LLN suggests that these metrics should converge to specific values, which are influenced by the underlying penetration probability (p) and the number of attacks.

For more precise results, you may need to run your simulations for a sufficiently large number of attacks to observe LLN convergence in practice.



> ## Search on the web about the Central Limit Theorem CLT and compare it with Part a of your homework 3 and say in your own words whether your simulation is somehow related with this theorem, and why.

# Central Limit Theorem (CLT) and its Relation to the Simulation

The Central Limit Theorem (CLT) is a fundamental concept in statistics, particularly when dealing with the distribution of sample means. It states that when we take multiple random samples from a population, calculate the mean of each sample, and then plot the distribution of those sample means, the resulting distribution approaches a normal distribution, regardless of the original population's distribution. In other words, as the sample size increases, the sampling distribution of the mean becomes more and more normal.

Now, let's relate this concept to the simulation described in Part a of the homework, which involves M systems subjected to N attacks and the accumulation of a "security score" (-1 or 1) for each system.

In the simulation, we can draw a connection to the CLT in the following way:

1. **Multiple Systems (M)**: The simulation involves multiple systems, each experiencing a series of attacks. These individual systems can be thought of as analogous to individual samples in the context of the CLT. Each system accumulates a security score based on the outcome of each attack.

2. **Multiple Attacks (N)**: The series of N attacks can be seen as repetitions or trials. This is similar to the idea of taking multiple samples in the CLT. For each attack, a score is recorded for each system.

3. **Accumulated "Security Score"**: As the attacks progress, the security scores for each system are accumulated. The total security score for each system can be considered as the sample mean for that system, which is calculated over multiple trials (attacks).

4. **Constant Penetration Probability (p)**: Assuming a constant penetration probability p at each attack is like having a consistent probability distribution for each trial. In the context of the CLT, having a constant probability distribution across trials can contribute to the applicability of the theorem.

The relation to the CLT becomes evident when we think about the final outcomes for each system. As we accumulate scores over multiple attacks for each system, we can consider the distribution of these final scores across all systems. The CLT suggests that this distribution of final scores, when aggregated across all systems, will tend to follow a normal distribution as the number of systems and attacks increases.

In summary, the simulation in Part a of the homework relates to the Central Limit Theorem in the sense that it involves multiple systems experiencing repeated trials (attacks), and the cumulative security scores for each system can be seen as analogous to sample means. As you collect data over numerous systems and attacks, the distribution of these final scores is likely to exhibit characteristics of a normal distribution, as predicted by the CLT.




> ## Based on the CLT, how could you modify ("normalize") the "security score" to obtain an asymptotic convergence to a proper distribution?

# Modifying the "Security Score" for Asymptotic Convergence

The Central Limit Theorem (CLT) is a powerful statistical concept that implies that the distribution of the sample mean tends to approach a normal distribution as the sample size increases, regardless of the original population's distribution. In the context of the simulation involving "security scores" for M systems subjected to N attacks, we can modify the "security score" to achieve asymptotic convergence to a proper distribution in accordance with the CLT.

To achieve this convergence, we can consider the following steps:

1. **Use a Larger Sample Size (N)**: The CLT suggests that as the sample size (in this case, the number of attacks or trials, N) increases, the distribution of sample means becomes more normal. Therefore, increasing the number of attacks for each system will help in achieving asymptotic convergence to a normal distribution. This can be done by subjecting each system to a larger number of attacks.

2. **Aggregate Scores and Calculate the Mean**: After each attack, calculate the mean "security score" for each system. This can be done by summing the scores accumulated during the attacks and dividing by the total number of attacks. This average score for each system represents a sample mean.

3. **Standardize the Sample Means**: Standardization is a key step in achieving asymptotic convergence to a proper distribution. Standardizing means subtracting the mean of the sample means and dividing by the standard deviation of the sample means. The formula for standardization is as follows:

   \[Z = \frac{\bar{X} - \mu}{\sigma}\]

   Where:
   - \(Z\) is the standardized score.
   - \(\bar{X}\) is the sample mean of the "security scores."
   - \(\mu\) is the population mean of the "security scores" (which could be estimated using a large number of simulations).
   - \(\sigma\) is the standard deviation of the sample means.

4. **Apply the Standardized Scores to the Systems**: Use the standardized scores (Z-scores) for each system as the new "security scores." These standardized scores are expected to have properties closer to a normal distribution as per the CLT.

By applying these modifications, you effectively transform the "security scores" into a set of standardized scores that are asymptotically converging to a normal distribution. The larger the number of attacks (N) and the more systems (M) included in the simulation, the closer the distribution of these standardized scores will be to a proper normal distribution, as predicted by the CLT.

This modification allows you to make inferences and perform statistical analyses with greater accuracy, as normal distributions have well-understood properties and are commonly used in statistical analysis.





