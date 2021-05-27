class Ball {
    constructor(x,y,r){
        var options = {
            restitution:0.5,
            friction:0.7,
            density:0.5
        }
        this.body = Bodies.circle(x,y,r,options)
        this.radius = r;
        World.add(myWorld,this.body) 
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle
    push()
    fill('red')
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius)
    pop()
    }
}