class Rubber{
    constructor(x,y,r){
        var options ={
            restitution:0.3,
            friction:0.2,
            density:1
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world,this.body);
    }
    display(){
        var rubbepos=this.body.position;
        push();
        translate(rubbepos.x,rubbepos.y)
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black")
        fill("darkblue");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}