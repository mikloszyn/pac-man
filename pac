<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pac-Man Game</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #000;
            color: #fff;
            font-family: Arial, sans-serif;
        }
        #gameCanvas {
            background-color: #000;
            border: 1px solid #fff;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="500" height="500"></canvas>

    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // Initialize game variables
        const gridSize = 20;
        let pacManX = 0;
        let pacManY = 0;
        let direction = 'right';

        // Draw Pac-Man
        function drawPacMan() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(pacManX + gridSize / 2, pacManY + gridSize / 2, gridSize / 2, 0.2 * Math.PI, 1.8 * Math.PI);
            ctx.lineTo(pacManX + gridSize / 2, pacManY + gridSize / 2);
            ctx.closePath();
            ctx.fill();
        }

        // Move Pac-Man
        function movePacMan() {
            switch (direction) {
                case 'right':
                    pacManX += gridSize;
                    break;
                case 'left':
                    pacManX -= gridSize;
                    break;
                case 'up':
                    pacManY -= gridSize;
                    break;
                case 'down':
                    pacManY += gridSize;
                    break;
            }

            if (pacManX < 0) pacManX = canvas.width - gridSize;
            if (pacManX >= canvas.width) pacManX = 0;
            if (pacManY < 0) pacManY = canvas.height - gridSize;
            if (pacManY >= canvas.height) pacManY = 0;

            drawPacMan();
        }

        // Handle keyboard input
        document.addEventListener('keydown', function(event) {
            switch (event.key) {
                case 'ArrowUp':
                    direction = 'up';
                    break;
                case 'ArrowDown':
                    direction = 'down';
                    break;
                case 'ArrowLeft':
                    direction = 'left';
                    break;
                case 'ArrowRight':
                    direction = 'right';
                    break;
            }
        });

        // Game loop
        function gameLoop() {
            movePacMan();
            requestAnimationFrame(gameLoop);
        }

        // Start the game loop
        gameLoop();
    </script>
</body>
</html>
