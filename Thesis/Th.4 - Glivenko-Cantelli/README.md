# Thesis: The Glivenko–Cantelli Theorem, Proof, Simulations

## Introduction

The Glivenko–Cantelli theorem is a cornerstone in probability theory and statistics, providing insights into the convergence behavior of empirical distribution functions (EDFs). Originating from the work of Dmitry Glivenko and Francesco Cantelli, this theorem plays a pivotal role in statistical theory.

## The Glivenko–Cantelli Theorem

The Glivenko–Cantelli theorem asserts that, for a sequence of independent and identically distributed random variables $\(X_1, X_2, \ldots, X_n\)$, the empirical distribution function (EDF) $\(F_n(x)\)$ converges uniformly to the true cumulative distribution function (CDF) $\(F(x)\)$. Mathematically, this can be expressed as:

$\[ \sup_{x} |F_n(x) - F(x)| \xrightarrow{a.s.} 0 \text{ as } n \to \infty \]$

Here, $\(\sup\)$ denotes the supremum, and $\(a.s.\)$ stands for "almost surely." This convergence result is powerful, indicating that as the sample size $(\(n\))$ increases, the EDF becomes an increasingly accurate representation of the underlying distribution.

### Glivenko–Cantelli Lemma

One key step in proving the theorem is to use the Glivenko–Cantelli lemma, which states that for any fixed $\(x\)$, the difference $\(F_n(x) - F(x)\)$ converges almost surely to zero. Mathematically:

$\[ \lim_{n \to \infty} \sup_{x} |F_n(x) - F(x)| = 0 \text{ almost surely} \]$

## Proof of the Theorem

The proof involves bounding the difference between the empirical and true distribution functions and demonstrating that this difference converges to zero in probability. The Glivenko–Cantelli lemma provides the foundation for establishing the uniform convergence result.

## Significance and Applications

Understanding the Glivenko–Cantelli theorem is crucial in various statistical applications. For instance, in non-parametric statistics, where assumptions about the underlying distribution are minimal, the theorem assures that the empirical distribution is a reliable estimator of the true distribution, especially as the sample size increases.

## Simulations and Illustrations

To illustrate the convergence behavior, consider a simulation with a standard normal distribution. Generate random samples of increasing sizes $(\(n\))$, compute the empirical distribution function, and compare it with the true cumulative distribution function. As $\(n\)$ grows, the graphs should converge, visually reinforcing the Glivenko–Cantelli theorem.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

np.random.seed(42)

# Generate a random sample from a standard normal distribution
sample_sizes = [10, 50, 100, 500]
x = np.linspace(-3, 3, 1000)

plt.figure(figsize=(10, 6))

for n in sample_sizes:
    sample = np.random.normal(size=n)
    ecdf = np.cumsum(np.sort(sample)) / n
    plt.plot(x, ecdf, label=f'n={n}')

# True CDF for standard normal distribution
plt.plot(x, norm.cdf(x), 'k--', label='True CDF')
plt.title('Convergence of Empirical Distribution to True Distribution')
plt.xlabel('x')
plt.ylabel('Cumulative Probability')
plt.legend()
plt.grid(True)
plt.show()
```

## Conclusion

In summary, the Glivenko–Cantelli theorem provides a rigorous foundation for understanding the convergence properties of empirical distribution functions. The mathematical proof, supported by the Glivenko–Cantelli lemma, establishes the reliability of the EDF as a consistent estimator of the true distribution. Simulations and examples further enhance the intuitive understanding of this fundamental theorem in statistical theory.

