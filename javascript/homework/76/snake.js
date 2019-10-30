(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    /*function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);*/

    const SNAKE_SIZE = 30;
    let direction = 'ArrowRight';
    let x = -SNAKE_SIZE;
    let y = 0;
    let score = 0;

    const img2 = new Image();
    img2.src = "images/snakehead.png";
    img2.addEventListener('load', () => {
        const playGame = setInterval(() => {
            context.clearRect(x, y, SNAKE_SIZE, SNAKE_SIZE);
            switch (direction) {
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
            }
            context.drawImage(img2, x, y, SNAKE_SIZE, SNAKE_SIZE);
            if (x < 0 || y < 0 || x > canvas.width || y > canvas.height) {
                x = canvas.width - SNAKE_SIZE;
                context.drawImage(img2, x, y, SNAKE_SIZE, SNAKE_SIZE);
                clearInterval(playGame);
                console.log('game over');
            }

            if (x < apple.x + SNAKE_SIZE &&
                x + SNAKE_SIZE > apple.x &&
                y < apple.y + SNAKE_SIZE &&
                y + SNAKE_SIZE > apple.y) {
                context.clearRect(apple.x, apple.y, SNAKE_SIZE, SNAKE_SIZE);
                apple.moveApple();
                score++;
                console.log('colided', score);
            }
        }, 200);
    });

    img2.addEventListener('error', () => {
        context.strokeText('OOPS', 250, 250);
    });

    document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                direction = event.key;
        }
    });

    class Apple {
        constructor() {
            this.appleImg = new Image();
            this.appleImg.src = "images/apple3.png";
            this.newApple();
        }
        newApple() {
            this.appleImg.addEventListener('load', () => this.moveApple());
        }
        moveApple() {
            this.x = Math.floor((Math.random() * canvas.width));
            this.x = this.x - (this.x % SNAKE_SIZE);
            this.y = Math.floor((Math.random() * canvas.height));
            this.y = this.y - (this.y % SNAKE_SIZE);
            context.drawImage(this.appleImg, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);
        }
    }
    const apple = new Apple();
}());
