/**@type {HTMLCanvasElement} */
const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
CANVAS_WIDTH = canvas1.width = 500;
CANVAS_HEIGHT = canvas1.height = 1000;
const numberOfEnemies = 100;
const enemyArray = [];
let gameFrame = 0;

class Enemy {
  constructor(x, y, width, height) {
    this.image = new Image();
    this.image.src = "./assets/enemy1.png";
    this.x = Math.random() * canvas1.width;
    this.y = Math.random() * canvas1.height;
    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 8 + 1);
  }

  update() {
    this.x += Math.random() * 3 - 1.5;
    this.y += Math.random() * 3 - 1.5;
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
