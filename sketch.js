let paddle,paddle_img;
let ball,ball_img;

function preload() {
  paddle_img = loadImage("paddle.png");
  ball_img = loadImage("ball.png");
}

function setup() {
  createCanvas(400, 400);
  paddle=createSprite(width - 30, height / 2, 20, 100);
  paddle.addImage("paddle",paddle_img);

  ball = createSprite(width / 2, height / 2);
  ball.addImage("ball",ball_img);
  ball.velocityX = 9;
}

function draw() {
  background(205, 153, 0);
  
  edges = createEdgeSprites();

  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle, randomVelocity);

  if (keyDown("up")) {
    paddle.y -= 20;
  }

  if (keyDown("down")) {
    paddle.y += 20;
  }

  drawSprites();
}

function randomVelocity() {
  ball.velocityY = random(-16, 16);
  console.log(ball.velocityY);
}