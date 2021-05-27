/*class Ground {
    constructor(x,y,l,w){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,l,options)
        this.width = w;
        this.length = l;
        World.add(myWorld,this.body) 
    }
    display(){
    var pos = this.body.position;
    fill('blue')
    rect(pos.x,pos.y,this.width,this.length)
    }
}*/

class Ground {
    constructor(x,y,l,w){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,l,options)
        this.width = w;
        this.length = l;
        World.add(myWorld,this.body) 
    }
    display(){
    var pos = this.body.position;
    push()
    fill('brown'); 
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.length)
    pop()
    }
}                                     