const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 580, 1200, 20);
	dustbinPart1 = new Dustbin(900, 550, 200, 20);
	dustbinPart2 = new Dustbin(790, 510, 20, 100);
	dustbinPart3 = new Dustbin(1010, 510, 20, 100);
	paperBall = new PaperBall(200, 250, 20);
	Engine.run(engine);
}

function draw() {
	background(0);
	ground.display();
	dustbinPart1.display();
	dustbinPart2.display();
	dustbinPart3.display();
	paperBall.display();
	Engine.update(engine);
}

function keyPressed() {
	if (keyCode === 38) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {
			x: 0.05,
			y: -0.065,
		});
	}
}
