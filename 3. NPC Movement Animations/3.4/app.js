/**@type {HTMLCanvasElement} */
const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
CANVAS_WIDTH = canvas1.width = 500;
CANVAS_HEIGHT = canvas1.height = 1000;
const numberOfEnemies = 11;
const enemyArray = [];
let gameFrame = 0;

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "./assets/enemy4.png";

    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.x = Math.random() * (canvas1.width - this.width);
    this.y = Math.random() * (canvas1.height - this.height);
    this.newX = Math.random() * (canvas1.width - this.width);
    this.newY = Math.random() * (canvas1.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 50 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }

  update() {
    if (gameFrame % this.interval === 0) {
      this.newX = Math.random() * (canvas1.width - this.width);
      this.newY = Math.random() * (canvas1.height - this.height);
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx / 140;
    this.y -= dy / 140;
    // this.x = 0;
    // this.y = 0;
    if (this.x + this.width < 0) this.x = canvas1.width;
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemyArray.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemyArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
