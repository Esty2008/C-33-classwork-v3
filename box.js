class Box {
    constructor(x,y,l,w){
        var options = {
            restitution:0.5,
            friction:0.7,
            density:0.5
        }
        this.body = Bodies.rectangle(x,y,w,l,options)
        this.width = w;
        this.length = l;
        World.add(myWorld,this.body) 
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle
    push()
    stroke('green')
    strokeWeight(4)
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.length)
    pop()
    }
}