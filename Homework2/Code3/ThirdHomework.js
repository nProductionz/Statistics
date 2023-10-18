function generateRandomVariates(N, k) {
  // Initialize an array to store counts for each interval
  const intervalCounts = new Array(k).fill(0);

  // Generate N random numbers and assign them to intervals
  for (let i = 0; i < N; i++) {
    const randomValue = Math.random(); // Generate a random number in [0, 1)
    const intervalIndex = Math.floor(randomValue * k); // Calculate the interval index
    intervalCounts[intervalIndex]++; // Increment the count for the selected interval
  }

  // Calculate the width of each interval
  const intervalWidth = 1 / k;

  // Determine the class intervals and their counts
  const intervals = [];
  for (let i = 0; i < k; i++) {
    const intervalStart = i / k;
    const intervalEnd = (i + 1) / k;
    const count = intervalCounts[i];
    intervals.push({
      interval: `[${intervalStart.toFixed(2)}, ${intervalEnd.toFixed(2)})`,
      count: count,
    });
  }

  return intervals;
}

const N = 1000; // Number of random variates to generate
const k = 10;   // Number of class intervals

const intervalCounts = generateRandomVariates(N, k);

console.log("Class Intervals and Counts:");
console.log(intervalCounts);
