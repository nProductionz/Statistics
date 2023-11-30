# Thesis: The Wiener Process and the Geometric Brownian Motion (GBM): Derivations and Simulations

## Introduction

Stochastic processes play a pivotal role in modeling and understanding various phenomena, especially in the field of finance and mathematical finance. The Wiener process and the Geometric Brownian Motion (GBM) are two fundamental stochastic processes extensively used in these domains. This thesis explores the derivations and simulations associated with the Wiener process and GBM, shedding light on their significance and applications.

## The Wiener Process

The Wiener process, also known as Brownian motion, is a continuous-time stochastic process that exhibits random, unpredictable movement. It is named after mathematician Norbert Wiener and is characterized by its independence and stationary increments. The process has wide applications in physics, economics, and finance, serving as a foundation for more complex stochastic models.

### Derivation

The Wiener process $\(W(t)\)$ is defined with the following properties:

1. **Zero Mean:**
   $\[ \mathbb{E}[W(t)] = 0 \]$

2. **Quadratic Variation:**
   $\[ \lim_{{\Delta t \to 0}} \sum_{i=1}^{n} (W(t_i) - W(t_{i-1}))^2 = t \]$

3. **Continuity:**
   $\[ W(t) \text{ is continuous with probability 1} \]$

## Geometric Brownian Motion (GBM)

GBM is a continuous-time stochastic process widely used to model the dynamics of financial instruments, particularly stock prices. It incorporates a deterministic growth term and a stochastic term, making it a suitable model for assets that exhibit both trend and random fluctuations.

### Derivation

The GBM model for the asset price $\(S(t)\)$ is given by the differential equation:
   $\[ dS(t) = \mu S(t) dt + \sigma S(t) dW(t) \]$
   where:
   - $\(\mu\)$ is the expected return,
   - $\(\sigma\)$ is the volatility,
   - $\(W(t)\)$ is the Wiener process.

## Simulations in Python

To illustrate the concepts, let's simulate paths of the Wiener process and GBM using Python. We'll use the `numpy` and `matplotlib` libraries.

### Wiener Process Simulation

```python
import numpy as np
import matplotlib.pyplot as plt

# Parameters
T = 1.0  # Total time
N = 1000  # Number of time steps
dt = T / N  # Time step size

# Wiener process simulation
t = np.linspace(0.0, T, N+1)
W = np.cumsum(np.sqrt(dt) * np.random.normal(size=N))

# Plotting
plt.plot(t, W, label='Wiener Process')
plt.title('Wiener Process Simulation')
plt.xlabel('Time')
plt.ylabel('Value')
plt.legend()
plt.show()
```

### Geometric Brownian Motion Simulation

```python
# Parameters
mu = 0.1  # Expected return
sigma = 0.2  # Volatility
S0 = 100.0  # Initial asset price

# GBM simulation
S = np.zeros(N+1)
S[0] = S0

for i in range(1, N+1):
    dW = np.sqrt(dt) * np.random.normal()
    S[i] = S[i-1] * np.exp((mu - 0.5 * sigma**2) * dt + sigma * dW)

# Plotting
plt.plot(t, S, label='GBM Simulation')
plt.title('Geometric Brownian Motion Simulation')
plt.xlabel('Time')
plt.ylabel('Asset Price')
plt.legend()
plt.show()
```

These Python examples demonstrate the simulation of the Wiener process and GBM, providing visual insights into their stochastic behaviors.

## Conclusion

In conclusion, the Wiener process and GBM are fundamental stochastic processes with diverse applications, particularly in finance. The derivations outlined in this thesis provide a solid foundation for understanding the underlying principles of these processes. The Python simulations enhance our ability to analyze and predict the behavior of these stochastic processes in various scenarios.

By delving into the intricacies of the Wiener process and GBM, this thesis contributes to the broader understanding of stochastic processes, paving the way for more advanced models and applications in the realm of statistics and mathematical finance.