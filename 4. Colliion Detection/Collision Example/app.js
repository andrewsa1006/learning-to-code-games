// Square Detection System
let rect1 = { x: 5, y: 5, width: 50, height: 50 };
let rect2 = { x: 20, y: 20, width: 10, height: 10 };

if (rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.x + rect2.height || rect1.y + rect1.height < rect2.y) {
  // No collision
} else {
  // Collision
}

// Circle Detection System

const circle1 = { x: 10, y: 10, radius: 300 };
const circle2 = { x: 500, y: 500, radius: 150 };

let dx = circle2.x - circle1.x;
let dy = circle2.y - circle1.y;
let distance = Math.sqrt(dx * dx + dy * dy);
let sumOfRadii = circle1.radius + circle2.radius;

if (distance < sumOfRadii) {
  // collision
} else if (distance === sumOfRadii) {
  // touching
} else {
  // no collision
}
