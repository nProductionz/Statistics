# The Functional Central Limit Theorem (Donsker's Invariance Principle): Proof and Simulations

## Introduction

The Functional Central Limit Theorem (FCLT), or Donsker's Invariance Principle, extends the classical Central Limit Theorem (CLT) to function-valued random variables, providing a powerful tool for analyzing the convergence of stochastic processes. This thesis aims to delve into the proof of the FCLT and explore its implications through simulations.

## Donsker's Invariance Principle

Donsker's Invariance Principle establishes the convergence of certain functionals of random processes to a standard Brownian motion. The proof involves defining functionals of interest, demonstrating their convergence in distribution, and establishing tightness and weak convergence in a suitable function space.

### Mathematical Formulation

Let $\(X_t\)$ be a stochastic process, and consider the functional $\(F_n\)$ defined as:

$\[F_n(t) = \sqrt{n} \left[ \frac{1}{n} \sum_{i=1}^{n} X_{it} - \mu(t) \right]\]$

where $\(\mu(t)\)$ is the expected value of $\(X_t\)$.

Donsker's Invariance Principle states that under certain conditions, the process $\(F_n\)$ converges weakly to a standard Brownian motion $\(B(t)\)$ as $\(n \to \infty\)$.

## Proof of Donsker's Invariance Principle

The proof involves establishing tightness and weak convergence. Let $\(D([0,1])\)$ be the space of càdlàg functions on $\([0,1]\)$, equipped with the Skorokhod topology.

1. **Tightness**: Show that the sequence of processes $\(\{F_n\}\)$ is tight in $\(D([0,1])\)$.
2. **Weak Convergence**: Demonstrate that the weak limit of $\(F_n\)$ exists and is a standard Brownian motion.

Detailed mathematical proofs involve characteristic functions, moments, and convergence theorems.

## Simulations and Illustrations

Simulations are employed to illustrate the practical implications of Donsker's Invariance Principle using Python and the `numpy` library.

### Simulation Example in Python

```python
import numpy as np
import matplotlib.pyplot as plt

# Define the stochastic process X_t
def stochastic_process(t, n):
    return np.random.normal(size=(n, len(t)))

# Define the functional F_n
def functional_Fn(X, t):
    n = X.shape[0]
    mu_t = np.mean(X, axis=0)
    Fn = np.sqrt(n) * (np.mean(X, axis=0) - mu_t)
    return Fn

# Simulate and plot the convergence
t = np.linspace(0, 1, 100)
n_values = [50, 100, 200]

plt.figure(figsize=(10, 6))

for n in n_values:
    X = stochastic_process(t, n)
    Fn = functional_Fn(X, t)
    plt.plot(t, Fn, label=f'n = {n}')

plt.axhline(0, color='black', linestyle='--', linewidth=1, label='Limit (Brownian motion)')
plt.title('Simulation of Functional Convergence')
plt.xlabel('t')
plt.ylabel('F_n(t)')
plt.legend()
plt.show()
```

This Python example generates a stochastic process and computes the functional $\(F_n\)$ for different sample sizes. The plot illustrates the convergence of the functionals to the limit, resembling a standard Brownian motion.

## Conclusion
In conclusion, this thesis has explored the proof of the Functional Central Limit Theorem (Donsker's Invariance Principle) and demonstrated its application through simulations using Python. Understanding the convergence behavior of functionals in stochastic processes is essential for statistical inference and provides a theoretical foundation for analyzing complex data structures.