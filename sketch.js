var wall, thikness;
var bullet, speed, weigth;
var damage;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1200, 800);
  thikness = random(22, 83);
  speed = random(223, 321);
  weigth = random(30, 52);
  wall = createSprite(600, 400, thikness, height);
  wall.shapeColor = "green";
  bullet = createSprite(400, 200, 80, 30);
  bullet.shapeColor = "green";
  damage = (0.5 * weigth * speed * speed) / (thikness * thikness * thikness);
  console.log(damage, "damage");
}

function draw() {
  background(0, 0, 0);
  bullet.velocityX = speed;

  if (hasCollided(wall, bullet)) {
    bullet.velocityX = 0;

    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  hasCollided();

  drawSprites();
}

function hasCollided() {
  bulletRightEdge = bullet.x + bullet.weidth;
  wallLeftEdge = wall.x;

  if (bulletRightEdge <= wallLeftEdge) {
    return true;
  }
  return false;
}
