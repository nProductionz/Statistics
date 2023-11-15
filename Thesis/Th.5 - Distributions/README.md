# Statistical Distributions: Continuous, Discrete, Properties, and Simulations

## Introduction

Statistical distributions play a crucial role in understanding and interpreting data in various fields. This thesis explores the fundamental concepts of continuous and discrete distributions, their properties, and the importance of simulations in statistical analysis.

## Continuous Distributions

Continuous distributions model random variables that can take any value within a specified range. Examples include the normal distribution, exponential distribution, and uniform distribution. These distributions are characterized by probability density functions (PDFs) rather than probability mass functions (PMFs), reflecting the infinite possibilities within their respective ranges.

### Properties of Continuous Distributions

1. **Probability Density Function (PDF):** Describes the likelihood of a random variable falling within a specific range.

   The PDF of a normal distribution is given by the formula:
   $$ f(x | \mu, \sigma) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2} $$

   Where:
   - $\( \mu \)$ is the mean,
   - $\( \sigma \)$ is the standard deviation.

2. **Cumulative Distribution Function (CDF):** Represents the probability that a random variable takes a value less than or equal to a given point.

   The CDF of a normal distribution is given by:
   $$ F(x | \mu, \sigma) = \frac{1}{2}\left[1 + \text{erf}\left(\frac{x - \mu}{\sigma \sqrt{2}}\right)\right] $$

   Where $\( \text{erf} \)$ is the error function.

3. **Expected Value and Variance:**
   - Expected value $(\( \mu \)): \( E(X) = \mu \)$
   - Variance $(\( \sigma^2 \)): \( \text{Var}(X) = \sigma^2 \)$

## Discrete Distributions

In contrast, discrete distributions model random variables with distinct, separate outcomes. Examples include the binomial distribution, Poisson distribution, and geometric distribution. Discrete distributions are described by probability mass functions (PMFs), specifying the probabilities associated with each possible outcome.

### Properties of Discrete Distributions

1. **Probability Mass Function (PMF):** Gives the probability of each possible outcome.

   The PMF of a binomial distribution is given by:
   $$ P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} $$

   Where:
   - $\( n \)$ is the number of trials,
   - $\( k \)$ is the number of successes,
   - $\( p \)$ is the probability of success.

2. **Expected Value and Variance:**
   - Expected value $(\( \mu \))$: $\( E(X) = np \)$
   - Variance $(\( \sigma^2 \))$: $\( \text{Var}(X) = np(1-p) \)$

3. **Cumulative Distribution Function (CDF):** Summarizes the probabilities up to a given point in the distribution.

   The CDF of a Poisson distribution is given by:
   $$ P(X \leq k) = \sum_{i=0}^{k} \frac{e^{-\lambda} \lambda^i}{i!} $$

   Where $\( \lambda \)$ is the average rate of occurrence.

## Importance of Simulations

Simulations are valuable tools for understanding complex statistical concepts and exploring the behavior of distributions. Through simulations, researchers can replicate real-world scenarios, observe patterns, and make informed predictions.

1. **Monte Carlo Simulations:** A widely used technique involving random sampling to obtain numerical results. Monte Carlo simulations are particularly useful for approximating complex mathematical processes.

2. **Applications in Decision Making:** Simulations assist in decision-making processes by providing insights into the likely outcomes of different choices, helping to mitigate risks and optimize strategies.

## Conclusion

This thesis has provided a comprehensive overview of continuous and discrete distributions, emphasizing their properties with mathematical formulations and examples. Additionally, it highlighted the significance of simulations in statistical analysis, showcasing their applications in understanding and predicting real-world scenarios.
