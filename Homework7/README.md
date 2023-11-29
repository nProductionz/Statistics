## Homework 7

> Consider a scheme similar to Homework 3 .
> First of all realize that the general scheme that you used so far (random walk and also Poisson process, etc.), can, more in general, be used for any stochastic differential equations SDE. In other words, with minor additions to your program you can now generalize this tool to simulate almost any stochastic
differential equations of interest for many applications. Create a web only version where you allow the user to explore (selectable by user) any useful stochastic process.
> Do a research on the web and include any SDE that you think its interesting. Some examples of popular processes:
>
>Arithmetic Brownian
>Geometric Brownian (Black–Scholes)
>Ornstein–Uhlenbeck (mean-reverting)
>Vasicek
>Hull–White
>Cox–Ingersoll–Ross
>Black–Karasinski
>Heston
>Chen model

>Optional (+1 grade):
>Compare also with other possible simulation schemes which have been proposed eg, Milstein, Runge-Kutta, Heun's, ...), pointing out possible differences.


>Optional (+2 grade):
>Allow the user to input manually an SDE (on-the-fly compilation) and simulate that

The following image show the reppresentation of an Heston Stochastic Process, with all the parameters taken in input by the user.

[![HwS.png](https://i.postimg.cc/bv3LXWYZ/HwS.png)](https://postimg.cc/sBG57nhz)


The following images shows the comparison between some processes and their graphs:

[![HW7-group.png](https://i.postimg.cc/mrXq3tHp/HW7-group.png)](https://postimg.cc/67ZYt6zC)


### Code

```JavaScript

"use strict";

let numberOfLine;
let canvasArr = [];

function generateArithmeticBrownianMotion(methodFlag) {
  numberOfLine = parseInt(document.getElementById("ABinstances").value);

  const numSteps = parseInt(document.getElementById("ABnumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);
  const labelGraph = "Arithmetic Brownian Motion";
  if (methodFlag == 0) {
    initializeGraph(labelGraph);
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2(labelGraph);
    canvas2.style.display = "block";
  }
  const mu = parseFloat(document.getElementById("ABmu").value);
  const sigma = parseFloat(document.getElementById("ABsigma").value);
  const X0 = parseInt(document.getElementById("ABX0").value);
  const dt = parseFloat(document.getElementById("ABdt").value);
  let yValues = [X0];
  let newValue = 0;

  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW = Math.sqrt(dt) * normalDistribution();
      if (methodFlag == 0) {
        // Euler method
        newValue = mu * dt + sigma * dW;
      } else if (methodFlag == 1) {
        // Runge kutta method
        const k = mu * dt + sigma * dW;
        newValue = mu * dt * k + sigma * dW;
      }
      yValues.push(yValues[i] + newValue);
      newValue = 0;
    }
    addLine(xValues, yValues, methodFlag);
    yValues = [X0];
  }
}


function generateGeometricBrownianMotion(methodFlag) {
  numberOfLine = parseInt(document.getElementById("GBinstances").value);
  const numSteps = parseInt(document.getElementById("GBnumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);

  let labelGraph = "Geometric Brownian Motion";
  if (methodFlag == 0) {
    initializeGraph(labelGraph);
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2(labelGraph);
    canvas2.style.display = "block";
  }

  const mu = parseFloat(document.getElementById("GBmu").value);
  const sigma = parseFloat(document.getElementById("GBsigma").value);
  const dt = parseFloat(document.getElementById("GBdt").value);
  const S0 = parseInt(document.getElementById("GBS0").value);
  let yValues = [S0];
  let newValue = 0;
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW = Math.sqrt(dt) * normalDistribution();
      if (methodFlag == 0) {
        // Euler method
        newValue = mu * yValues[i] * dt + sigma * yValues[i] * dW;
      } else if (methodFlag == 1) {
        // Runge kutta method
        const k = mu * yValues[i] * dt + sigma * yValues[i] * dW;
        newValue = mu * yValues[i] * dt * k + sigma * yValues[i] * dW;
      }
      yValues.push(yValues[i] + newValue);
      newValue = 0;
    }
    addLine(xValues, yValues);
    yValues = [S0];
  }
}


function generateOU(methodFlag) {
  numberOfLine = parseInt(document.getElementById("OUinstances").value);
  let numSteps = parseInt(document.getElementById("OUnumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);

  if (methodFlag == 0) {
    initializeGraph("Ornstein-Uhlenbeck");
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2("Ornstein-Uhlenbeck");
    canvas2.style.display = "block";
  }
  const theta = parseInt(document.getElementById("OUtheta").value);
  const sigma = parseFloat(document.getElementById("OUsigma").value); //Math.sqrt(2)
  const X0 = parseInt(document.getElementById("OUX0").value);
  const mu = parseInt(document.getElementById("OUmu").value);
  const dt = parseFloat(document.getElementById("OUdt").value);
  let yValues = [X0];
  let newValue = 0;

  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW = Math.sqrt(dt) * normalDistribution();
      const k = theta * (mu - yValues[i]) * dt + sigma * dW;
      if (methodFlag == 0) {
        // Euler method
        newValue = theta * (mu - yValues[i]) * dt + sigma * dW;
      } else if (methodFlag == 1) {
        // Runge kutta method
        const k = theta * (mu - yValues[i]) * dt + sigma * dW;
        newValue = theta * (mu - yValues[i] * k) * dt + sigma * dW;
      }
      yValues.push(yValues[i] + newValue);
      newValue = 0;
    }
    addLine(xValues, yValues);
    yValues = [X0];
  }
}


function generateVasicek(methodFlag) {
  numberOfLine = parseInt(document.getElementById("Vinstances").value);
  let numSteps = parseInt(document.getElementById("VnumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);

  if (methodFlag == 0) {
    initializeGraph("Vasicek");
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2("Vasicek");
    canvas2.style.display = "block";
  }
  const k = parseFloat(document.getElementById("Vk").value);
  const theta = parseFloat(document.getElementById("Vtheta").value);
  const sigma = parseFloat(document.getElementById("Vsigma").value);
  const R0 = parseInt(document.getElementById("VR0").value);
  const dt = parseFloat(document.getElementById("Vdt").value);
  let yValues = [R0];
  let rt = 0;
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW = Math.sqrt(dt) * normalDistribution();
      if (methodFlag == 0) {
        rt = k * (theta - yValues[i]) * dt + sigma * Math.sqrt(dt) * dW;
      } else if (methodFlag == 1) {
        let val = k * (theta - yValues[i]) * dt + sigma * Math.sqrt(dt) * dW;
        rt = k * (theta - yValues[i] * val) * dt + sigma * Math.sqrt(dt) * dW;
      }
      yValues.push(yValues[i] + rt);
    }
    addLine(xValues, yValues);
    yValues = [R0];
  }
}

function generateHullWhite(methodFlag) {
  numberOfLine = parseInt(document.getElementById("HWinstances").value);
  const numSteps = parseInt(document.getElementById("hwNumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);

  const theta1 = parseFloat(document.getElementById("hwTheta1").value);
  const theta2 = parseFloat(document.getElementById("hwTheta2").value);
  const a = parseFloat(document.getElementById("hwA").value);
  const sigma = parseFloat(document.getElementById("hwSigma").value);
  const R0 = parseFloat(document.getElementById("hwR0").value);
  const dt = parseFloat(document.getElementById("hwDt").value);
  let yValues = [R0];
  let newValue = 0;
  if (methodFlag == 0) {
    initializeGraph("Hull-White");
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2("Hull-White");
    canvas2.style.display = "block";
  }
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW = Math.sqrt(dt) * normalDistribution();
      if (methodFlag == 0) {
        newValue = (theta1 + theta2 * i - a * yValues[i]) * dt + sigma * dW;
      } else if (methodFlag == 1) {
        const k = (theta1 + theta2 * i - a * yValues[i]) * dt + sigma * dW;
        newValue = (theta1 + theta2 * i * k - a * yValues[i]) * dt + sigma * dW;
      }
      yValues.push(yValues[i] + newValue);
      newValue = 0;
    }
    addLine(xValues, yValues);
    yValues = [R0];
  }
}

function clickHullWhite(methodFlag) {
  destroyCanvas();
  generateHullWhite(0);
  generateHullWhite(1);
}

function generateCoxIngersollRoss(methodFlag) {
  numberOfLine = parseInt(document.getElementById("CIRinstances").value);
  const numSteps = parseInt(document.getElementById("CIRNumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);

  if (methodFlag == 0) {
    initializeGraph("Cox-Ingersoll-Ross");
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2("Cox-Ingersoll-Ross");
    canvas2.style.display = "block";
  }
  const k = parseFloat(document.getElementById("CIRK").value);
  const theta = parseFloat(document.getElementById("CIRTheta").value);
  const sigma = parseFloat(document.getElementById("CIRSigma").value);
  const R0 = parseFloat(document.getElementById("CIRR0").value);
  const dt = parseFloat(document.getElementById("CIRdt").value);
  let yValues = [R0];
  let newValue = 0;
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW = Math.sqrt(dt) * normalDistribution();

      if (methodFlag == 0) {
        newValue =
          k * (theta - yValues[i]) * dt + sigma * Math.sqrt(yValues[i]) * dW;
      } else if (methodFlag == 1) {
        let val =
          k * (theta - yValues[i]) * dt + sigma * Math.sqrt(yValues[i]) * dW;
        newValue =
          k * (theta - yValues[i] * val) * dt +
          sigma * Math.sqrt(yValues[i]) * dW;
      }
      yValues.push(yValues[i] + newValue);
      newValue = 0;
    }
    addLine(xValues, yValues);
    yValues = [R0];
  }
}


function generateBlackKarasinski(methodFlag) {
  numberOfLine = parseInt(document.getElementById("BKinstances").value);
  const numSteps = parseInt(document.getElementById("bkNumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);
  if (methodFlag == 0) {
    initializeGraph("Black-Karasinski");
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2("Black-Karasinski");
    canvas2.style.display = "block";
  }
  const theta1 = parseFloat(document.getElementById("BKTheta1").value);
  const theta2 = parseFloat(document.getElementById("BKTheta2").value);
  const a = parseFloat(document.getElementById("BKA").value);
  const sigma = parseFloat(document.getElementById("BKSigma").value);
  const R0 = parseFloat(document.getElementById("BKR0").value);
  const dt = parseFloat(document.getElementById("BKDt").value);
  let yValues = [R0];
  let newValue = 0;
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW = Math.sqrt(dt) * normalDistribution();
      if (methodFlag == 0) {
        newValue =
          (theta1 + theta2 * i - a * Math.log(yValues[i])) * dt +
          sigma * Math.sqrt(yValues[i]) * dW;
      } else if (methodFlag == 1) {
        let val =
          (theta1 + theta2 * i - a * Math.log(yValues[i])) * dt +
          sigma * Math.sqrt(yValues[i]) * dW;
        newValue =
          (theta1 + theta2 * i - a * Math.log(yValues[i])) * val * dt +
          sigma * Math.sqrt(yValues[i]) * dW;
      }
      yValues.push(yValues[i] + newValue);
      newValue = 0;
    }
    addLine(xValues, yValues);
    yValues = [R0];
  }
}

function generateHeston(methodFlag) {
  numberOfLine = parseInt(document.getElementById("Hinstances").value);
  let numSteps = parseInt(document.getElementById("hNumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);
  if (methodFlag == 0) {
    initializeGraph("Heston");
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2("Heston");
    canvas2.style.display = "block";
  }

  const mu = parseFloat(document.getElementById("HMu").value);
  const k = parseFloat(document.getElementById("HK").value);
  const theta = parseFloat(document.getElementById("HTheta").value);
  const sigma = parseFloat(document.getElementById("HSigma").value);
  const S0 = parseInt(document.getElementById("HS0").value);
  const v0 = parseFloat(document.getElementById("HV0").value);
  const dt = parseFloat(document.getElementById("HDt").value);
  let yValues = [S0];
  let v_t = [v0];
  let S_t = 0;
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW1 = Math.sqrt(dt) * normalDistribution();
      v_t.push(
        k * (theta - v_t[i]) * dt + sigma * Math.sqrt(v_t[i]) * dW1 + v_t[i]
      );
      const dW2 = Math.sqrt(dt) * normalDistribution();
      if (methodFlag == 0) {
        S_t = mu * yValues[i] * dt + Math.sqrt(v_t[i]) * yValues[i] * dW2;
      } else if (methodFlag == 1) {
        let val = (S_t =
          mu * yValues[i] * dt + Math.sqrt(v_t[i]) * yValues[i] * dW2);
        S_t = mu * yValues[i] * dt * val + Math.sqrt(v_t[i]) * yValues[i] * dW2;
      }
      yValues.push(yValues[i] + S_t);
    }
    addLine(xValues, yValues);
    yValues = [S0];
    v_t = [v0];
    S_t = 0;
  }
}

function generateChen(methodFlag) {
  numberOfLine = parseInt(document.getElementById("Cinstances").value);
  let numSteps = parseInt(document.getElementById("cNumSteps").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);
  if (methodFlag == 0) {
    initializeGraph("Chen");
    canvas1.style.display = "block";
  } else if (methodFlag == 1) {
    initializeGraph2("Chen");
    canvas2.style.display = "block";
  }
  const R0 = parseFloat(document.getElementById("CR0").value);
  const theta0 = parseFloat(document.getElementById("CTheta0").value);
  const sigma0 = parseFloat(document.getElementById("CSigma0").value);
  const a = parseFloat(document.getElementById("CA").value);
  const b = parseFloat(document.getElementById("CB").value);
  const m = parseFloat(document.getElementById("CM").value);
  const mu = parseFloat(document.getElementById("CMu").value);
  const v = parseFloat(document.getElementById("CV").value);
  const g = parseFloat(document.getElementById("CG").value);
  const dt = parseFloat(document.getElementById("CDt").value);
  const k = parseFloat(document.getElementById("CK").value);
  let yValues = [R0];
  let theta_t = [theta0];
  let sigma_t = [sigma0];
  let r_t = 0;
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW1 = Math.sqrt(dt) * normalDistribution();
      sigma_t.push(
        mu * (b - sigma_t[i]) * dt +
          m * Math.sqrt(sigma_t[i]) * dW1 +
          sigma_t[i]
      );
      const dW2 = Math.sqrt(dt) * normalDistribution();
      theta_t.push(
        theta_t[i] +
          (v * (g - theta_t[i]) * dt + a * Math.sqrt(theta_t[i]) * dW2)
      );
      const dW3 = Math.sqrt(dt) * normalDistribution();
      if (methodFlag == 0) {
        r_t =
          k * (theta_t[i] - yValues[i]) * dt +
          Math.sqrt(yValues[i]) * Math.sqrt(sigma_t[i]) * dW3;
      } else if (methodFlag == 1) {
        let val =
          k * (theta_t[i] - yValues[i]) * dt +
          Math.sqrt(yValues[i]) * Math.sqrt(sigma_t[i]) * dW3;
        r_t =
          val * k * (theta_t[i] - yValues[i]) * dt +
          Math.sqrt(yValues[i]) * Math.sqrt(sigma_t[i]) * dW3;
      }
      yValues.push(yValues[i] + r_t);
    }
    addLine(xValues, yValues);
    yValues = [R0];
    theta_t = [theta0];
    sigma_t = [sigma0];
    r_t = 0;
  }
}

function stochasticEulerMethod() {
  numberOfLine = parseInt(document.getElementById("SDEinstances").value);
  const numSteps = parseInt(document.getElementById("SDENumSteps").value);
  const a = parseFloat(document.getElementById("SDEB").value);
  const b = parseFloat(document.getElementById("SDEB").value);
  const X0 = parseFloat(document.getElementById("SDEX0").value);
  const sigma = parseFloat(document.getElementById("SDESigma").value);
  const dt = parseFloat(document.getElementById("SDEDt").value);
  const xValues = Array.from({ length: numSteps }, (_, i) => i);
  let yValues = [X0];
  initializeGraph("Euler general method");
  canvas1.style.display = "block";
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW = Math.sqrt(dt) * normalDistribution();
      const k = a * (b - yValues[i]) * dt + sigma * dW;
      yValues.push(yValues[i] + k);
    }
    console.log(yValues);
    addLine(xValues, yValues);
    yValues = [X0];
  }
}

function stochasticRungeKuttaMethod() {
  numberOfLine = parseInt(document.getElementById("SDEinstances").value);
  const numSteps = parseInt(document.getElementById("SDENumSteps").value);
  const a = parseFloat(document.getElementById("SDEB").value);
  const b = parseFloat(document.getElementById("SDEB").value);
  const X0 = parseFloat(document.getElementById("SDEX0").value);
  const sigma = parseFloat(document.getElementById("SDESigma").value);
  const dt = parseFloat(document.getElementById("SDEDt").value);
  let X = [X0];
  initializeGraph2("Runge kutta general method");
  canvas2.style.display = "block";
  const xValues = Array.from({ length: numSteps }, (_, i) => i);
  for (let j = 0; j < numberOfLine; j++) {
    for (let i = 0; i < numSteps; i++) {
      const dW1 = Math.sqrt(dt) * normalDistribution();
      const k1 = a * (b - X[i]) * dt + sigma * dW1;
      const dW2 = Math.sqrt(dt) * normalDistribution();
      const k2 = a * (b - (X[i] + 0.5 * k1)) * dt + sigma * dW2;

      const increment = k2;
      X.push(X[i] + increment);
    }
    addLine(xValues, X);
    X = [X0];
  }
}



function normalDistribution() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // Convert [0,1) to (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}
```