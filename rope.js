class Rope {
    constructor(myBall,p){
        var options={
            bodyA:myBall,
            pointB:p,
            length: 400
        }
        this.rope =  Constraint.create(options)
        World.add(myWorld,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.pointB

        push();
        stroke('brown')
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}