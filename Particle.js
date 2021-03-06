class Particle{
    constructor(x,y,r){
        var options = {
        restitution:0.4
        }
        this.r = 10;
    this.body = Bodies.circle(x,y,this.r,options);
    this.color = color(random(0,255), random(0,255), random(0,255));
    this.width = width;
    this.height = height;
    this.r = r;
    World.add(world, this.body);
    }

    display(){
        
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    noStroke();
    fill("black");
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }
}