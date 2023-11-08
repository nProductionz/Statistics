# Homework 5 #


## Research ##

> Find out on the web about a Poisson point process. See if you can see any analogy with this Exercise and verify whether your distributions come close (for N, M sufficiently large) to the theoretical asymptotic distribution.

### Poisson Point Process and the Analogous Exercise

#### Introduction
A Poisson point process is a mathematical model used to describe the distribution of events in time or space when these events occur randomly and independently. It is particularly useful for modeling events such as customer arrivals at a service center, the distribution of phone calls, or, in your case, attacks on servers.

#### Poisson Point Process
In a Poisson point process:
- Events occur randomly.
- The number of events in non-overlapping intervals follows a Poisson distribution.
- The probability of a specific number of events in an interval is determined by the rate parameter, denoted as λ.

#### The Exercise
In your exercise:
- You have M servers.
- You are considering a time period T (e.g., 1 year).
- You divide this time period into N subintervals of size T/N.
- In each subinterval, an attack can occur with a probability of λ T/N.

#### Analogy with Poisson Point Process
The exercise can be analogized to a Poisson point process as follows:
- M servers can be considered as points in space (or time).
- The time period T can be viewed as the overall observation window.
- Dividing T into N subintervals is similar to subdividing time into non-overlapping intervals.
- The probability of an attack in each subinterval (λ T/N) can be compared to the rate parameter (λ) in a Poisson point process.

#### Theoretical Asymptotic Distribution
In a Poisson point process, as N and M become sufficiently large, the distribution of events in non-overlapping intervals approaches a Poisson distribution with the mean determined by the rate parameter λ.

For your exercise, as N and M become sufficiently large:
- The distribution of attacks on servers in non-overlapping time intervals will tend to follow a Poisson distribution.
- The mean of this Poisson distribution will be determined by the rate parameter λ T/N.

This theoretical asymptotic distribution can be useful for analyzing the behavior of attacks on the servers when you have a large number of servers (M) and a large number of subintervals (N).

#### Conclusion
In summary, your exercise can be related to a Poisson point process, and as N and M become sufficiently large, the distribution of attacks on servers will closely approximate a Poisson distribution with the mean determined by the rate parameter. This understanding can help in analyzing and predicting the behavior of server attacks in large-scale scenarios.

For more details and formal mathematical derivations, you may refer to relevant statistics or probability theory resources.





## Coding ##


### JS ###

```JavaScript
const readData = function () {
    destroyCanvas();
    let M = parseInt(document.getElementById("server").value);
    let N = parseInt(document.getElementById("attacks").value);
    let lambda = parseFloat(document.getElementById("lambda").value); // lambda <= N/T
    let T = parseInt(document.getElementById("period").value)
    simulateAttacks(M, N, lambda, T);
};

const destroyCanvas = function () {
    for (let c of canvasArr)
        c.destroy();
};

const simulateAttacks = function (M, N, lambda, T) {
    let size = T / N;
    let probAttack = parseFloat((size * lambda).toFixed(4)); 
    let listOfAttacks = []; 
    let nAttackResult = {}; 
    for (let i = 0; i < M; i++) {  
        for (let j = 0; j <= N; j++) { 
            let p = Math.random();
            if (j == 0)
                nAttackResult[j] = 0;
            else {
                nAttackResult[j] = nAttackResult[j - 1];
                if (p <= probAttack)
                    nAttackResult[j]++;
            }
        }
        listOfAttacks.push(nAttackResult);
        nAttackResult = {};
    }
    let chart = initializeChar(M, N);
    canvasArr.push(chart);
    let maxNAttack = 0;
    for (let d of listOfAttacks)
        maxNAttack = Math.max(d[N - 1], maxNAttack);

    maxNAttack = maxNAttack + 5;
    chart.options.scales.yAxes = [{ ticks: { min: 0, max: maxNAttack } }];
    for (let j = 0; j < M; j++) {
        let xValues = [];
        let yValues = [];
        for (let i = 0; i <= N; i++) {
            xValues.push(parseFloat((size * i).toFixed(2)));
            yValues[i] = listOfAttacks[j][i];
        }
        drawGraph(chart, xValues, yValues);
    }
    //Calculate xData and yData for histogram
    let data = fillData(listOfAttacks, N);
    drawHistogram(data[0], data[1], N, 1, 0);
    let randSubinterval = parseInt(Math.random() * (N - 1));
    data = fillData(listOfAttacks, randSubinterval);
    drawHistogram(data[0], data[1], N, 2,randSubinterval);
}

const fillData = function (listOfAttacks, int) {
    let yData = [];
    let xData = [];
    let dict = {};
    for (let d of listOfAttacks) {
        if (dict[d[int]])
            dict[d[int]]++;
        else
            dict[d[int]] = 1;
    }
    for (const key in dict) {
        xData.push(key);
        yData.push(parseInt(dict[key]));
    }
    return [xData, yData];
};

const drawGraph = function (chart, xValues, yValues) {
    let color = getRandomColor();
    let newDataset = {
        label: 'Successful attacks/Subinterval of T',
        fill: false,
        lineTension: 0,
        backgroundColor: color,
        borderColor: color,
        data: yValues
    };
    chart.data.datasets.push(newDataset);
    chart.data.labels = xValues;
    chart.update();
}

```


### C# ###

```C#
public partial class Form1 : Form
    {
        private Chart[] charts;
        private Point[] chartLocations;
        private Point[] mouseDownLocations;
        private bool[] isDraggingList;
        private bool[] isResizingList;
        private Size[] resizeStartSize;

        public static Random random = new Random();
        public Form1()
        {
            InitializeComponent();

            textBox1.Text = "100";
            textBox2.Text = "50";
            textBox3.Text = "1";
            textBox4.Text = "25";


            int numberOfCharts = 3;
            charts = new Chart[numberOfCharts];
            chartLocations = new Point[numberOfCharts];
            mouseDownLocations = new Point[numberOfCharts];
            isDraggingList = new bool[numberOfCharts];
            isResizingList = new bool[numberOfCharts];
            resizeStartSize = new Size[numberOfCharts];

            for (int i = 0; i < numberOfCharts; i++)
            {
                charts[i] = Controls.Find($"chart{i + 1}", true)[0] as Chart;
                chartLocations[i] = new Point(0, 0);
                mouseDownLocations[i] = Point.Empty;
                isDraggingList[i] = false;

                charts[i].MouseDown += Chart_MouseDown;
                charts[i].MouseMove += Chart_MouseMove;
                charts[i].MouseUp += Chart_MouseUp;
            }
        }
    const simulateAttacks = function (M, N, lambda, T) {
        let size = T / N;
        let probAttack = parseFloat((size * lambda).toFixed(4)); 
        let listOfAttacks = []; 
        let nAttackResult = {}; 
        for (let i = 0; i < M; i++) {  
            for (let j = 0; j <= N; j++) { 
                let p = Math.random();
                if (j == 0)
                    nAttackResult[j] = 0;
                else {
                    nAttackResult[j] = nAttackResult[j - 1];
                    if (p <= probAttack)
                        nAttackResult[j]++;
                }
            }
            listOfAttacks.push(nAttackResult);
            nAttackResult = {};
        }
        let chart = initializeChar(M, N);
        canvasArr.push(chart);
        let maxNAttack = 0;
        for (let d of listOfAttacks)
            maxNAttack = Math.max(d[N - 1], maxNAttack);

        maxNAttack = maxNAttack + 5;
        chart.options.scales.yAxes = [{ ticks: { min: 0, max: maxNAttack } }];
        for (let j = 0; j < M; j++) {
            let xValues = [];
            let yValues = [];
            for (let i = 0; i <= N; i++) {
                xValues.push(parseFloat((size * i).toFixed(2)));
                yValues[i] = listOfAttacks[j][i];
            }
            drawGraph(chart, xValues, yValues);
        }
        //Calculate xData and yData for histogram
        let data = fillData(listOfAttacks, N);
        drawHistogram(data[0], data[1], N, 1, 0);
        let randSubinterval = parseInt(Math.random() * (N - 1));
        data = fillData(listOfAttacks, randSubinterval);
        drawHistogram(data[0], data[1], N, 2,randSubinterval);
    }

    const fillData = function (listOfAttacks, int) {
        let yData = [];
        let xData = [];
        let dict = {};
        for (let d of listOfAttacks) {
            if (dict[d[int]])
                dict[d[int]]++;
            else
                dict[d[int]] = 1;
        }
        for (const key in dict) {
            xData.push(key);
            yData.push(parseInt(dict[key]));
        }
        return [xData, yData];
    };

    const drawGraph = function (chart, xValues, yValues) {
        let color = getRandomColor();
        let newDataset = {
            label: 'Successful attacks/Subinterval of T',
            fill: false,
            lineTension: 0,
            backgroundColor: color,
            borderColor: color,
            data: yValues
        };
        chart.data.datasets.push(newDataset);
        chart.data.labels = xValues;
        chart.update();
    }


```

