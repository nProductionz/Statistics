const canvasOriginal = document.getElementById('securityChartOriginal');
  const canvas1b = document.getElementById('securityChart1b');
  const canvas1c = document.getElementById('securityChart1c');
  const canvas1d = document.getElementById('securityChart1d');
  const ctxOriginal = canvasOriginal.getContext('2d');
  const ctx1b = canvas1b.getContext('2d');
  const ctx1c = canvas1c.getContext('2d');
  const ctx1d = canvas1d.getContext('2d');
  const scaleFactor = 0.9; 
  let isDragging = false;
  let startX, startY;

  function startDrag(e) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
  }

  function drag(e) {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      const style = e.target.parentElement.style;
      style.left = (parseInt(style.left || 0) + dx) + 'px'; 
      style.top = (parseInt(style.top || 0) + dy) + 'px'; 
      startX = e.clientX;
      startY = e.clientY;
  }


  function stopDrag() {
      isDragging = false;
  }


  const canvasContainers = document.querySelectorAll('.canvas-container');
  canvasContainers.forEach(container => {
      container.addEventListener('resize', function() {
          scaleCanvasContent(container.querySelector('canvas'));
      });
      container.addEventListener('mousedown', startDrag);
      container.addEventListener('mousemove', drag);
      container.addEventListener('mouseup', stopDrag);
      container.addEventListener('mouseleave', stopDrag); 
  });

  function scaleCanvasContent(canvas) {
      const ctx = canvas.getContext('2d');
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempCtx.drawImage(canvas, 0, 0);

      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, canvas.width, canvas.height);
  }

  function simulateScore(N, p, type = "original") {
      let score = 0;
      const scores = [];
      for (let i = 0; i < N; i++) {
          const probability = Math.random();
          switch (type) {
              case "original":
                  score += (probability < p) ? -1 : 1;
                  break;
              case "1b":
                  score += (probability < p) ? 0 : 1;
                  break;
              case "1c":
                  score += (probability < p) ? 0 : 1;
                  score /= (i + 1);
                  break;
              case "1d":
                  score += (probability < p) ? 0 : 1;
                  score /= Math.sqrt(i + 1);
                  break;
          }
          scores.push(score);
      }
      return scores;
  }

  function countScoreIntervals(scores) {
      const intervals = {};
      for (let score of scores) {
          const intervalBase = Math.floor(score / 2) * 2;
          const intervalKey = `${intervalBase},${intervalBase + 2}`;
          intervals[intervalKey] = (intervals[intervalKey] || 0) + 1;
      }
      return intervals;
  }

  function generateColors(count) {
      const colors = [];
      for (let i = 0; i < count; i++) {
          colors.push(`hsl(${(i * 360) / count}, 100%, 50%)`);
      }
      return colors;
  }

  function drawChart(M, N, p, type, ctx, canvas) {
      const attackNumber = parseInt(document.getElementById('attackNumber').value);
      const chartWidth = canvas.width * scaleFactor ;  
      const chartHeight = canvas.height * scaleFactor;
      const xOffset = 50;
      const yOffset = chartHeight / 2;
      const xScale = (chartWidth - xOffset) / N;
      const yScale = yOffset / N;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const allScores = [];
      const colors = generateColors(M);

      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(xOffset, 0);
      ctx.lineTo(xOffset, canvas.height);
      ctx.moveTo(xOffset, yOffset);
      ctx.lineTo(xOffset + chartWidth, yOffset);
      ctx.stroke();

      for (let i = -N; i <= N; i += 2) {
          ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';  
          ctx.beginPath();
          ctx.moveTo(xOffset, yOffset - i * yScale);
          ctx.lineTo(xOffset + chartWidth, yOffset - i * yScale);
          ctx.stroke();
      }
      ctx.textAlign = "right";
      ctx.fillStyle = "black";
      for (let i = -N; i <= N; i += 2) {
          if (i === N) {
              ctx.textBaseline = "top"; 
          } else if (i === -N) {
              ctx.textBaseline = "bottom";   
          } else {
              ctx.textBaseline = "middle";
          }
          ctx.fillText(i, xOffset - 10, yOffset - i * yScale);
      }
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = "black";
      for (let i = 1; i <= N; i++) {
          let horizontalAdjustment = 0;
          if (i === N) {
              horizontalAdjustment = -15; 
          }
          ctx.fillText(i, xOffset + i * xScale + horizontalAdjustment, yOffset + 10);
      }
      for (let system = 0; system < M; system++) {
          const scores = simulateScore(N, p, type);
          allScores.push(scores);
          ctx.strokeStyle = colors[system];
          ctx.beginPath();
          ctx.moveTo(xOffset, yOffset);

          for (let attack = 0; attack < N; attack++) {
              ctx.lineTo(xOffset + (attack + 1) * xScale, yOffset - scores[attack] * yScale);
              ctx.save();
              ctx.arc(xOffset + (attack + 1) * xScale, yOffset - scores[attack] * yScale, 1, 0, 2 * Math.PI);
              ctx.fillStyle = colors[system];
              ctx.fill();
              ctx.restore();

              ctx.moveTo(xOffset + (attack + 1) * xScale, yOffset - scores[attack] * yScale);
          }

          ctx.stroke();
      }


      // Res
      const endScores = allScores.map(scores => scores[N-1]);
      const intervals = countScoreIntervals(endScores);
      // bars 
      const maxBarWidth = canvas.width - (xOffset + N * xScale);
      for (let intervalKey in intervals) {
          const [start, end] = intervalKey.split(',').map(Number);
          const midpoint = (start + end) / 2;
          const count = intervals[intervalKey];

          const barLength = (count / M) * maxBarWidth; 
          const barStartY = yOffset - midpoint * yScale;
          const barStartX = xOffset + N * xScale; 

          ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
          ctx.fillRect(barStartX, barStartY, barLength, yScale);
      }


      // Draw the histogram bars for the specific attack number
      const attackScores = allScores.map(scores => scores[attackNumber - 1]);
      const attackIntervals = countScoreIntervals(attackScores);

      for (let intervalKey in attackIntervals) {
          const [start, end] = intervalKey.split(',').map(Number);
          const midpoint = (start + end) / 2;
          const count = attackIntervals[intervalKey];

          const barLength = ((count / M) * maxBarWidth);
          const barStartY = yOffset - midpoint * yScale;
          const barStartX = xOffset + attackNumber * xScale ;

          ctx.fillStyle = 'rgba(100, 150, 255, 0.5)';
          ctx.fillRect(barStartX, barStartY, barLength, yScale);
      }
  }

  function updateChart() {
      const M = parseInt(document.getElementById('M').value);
      const N = parseInt(document.getElementById('N').value);
      const p = parseFloat(document.getElementById('p').value);
      drawChart(M, N, p);
  }

  function updateAllCharts() {
      const M = parseInt(document.getElementById('M').value);
      const N = parseInt(document.getElementById('N').value);
      const p = parseFloat(document.getElementById('p').value);

      drawChart(M, N, p, "original", ctxOriginal, canvasOriginal);
      drawChart(M, N, p, "1b", ctx1b, canvas1b);
      drawChart(M, N, p, "1c", ctx1c, canvas1c);
      drawChart(M, N, p, "1d", ctx1d, canvas1d);
  }

  window.onload = function() {
      updateAllCharts();
  }