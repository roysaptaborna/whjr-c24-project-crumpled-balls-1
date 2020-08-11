class PaperBall {
	constructor(x, y, r) {
		this.body = Bodies.circle(x, y, r);
		this.body.density = 0.8;
		this.body.restitution = 0.3;
		this.body.friction = 0.5;
		World.add(engine.world, this.body);
		this.radius = r;
	}
	display() {
		ellipseMode(RADIUS);
		ellipse(
			this.body.position.x,
			this.body.position.y,
			this.radius,
			this.radius
		);
	}
}
