class Paper{
    constructor(x,y,r){
        var options={
           // isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1
        }

        this.body=Bodies.circle(x, y, r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var paperPos=this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
       image(this.image,0,0,this.r,this.r);
      stroke("red");
      ellipseMode(CENTER);
      ellipse(0,0,this.r/2,this.r/2);
      //circleMode(CENTER);
;      //  circle(0,0,20);
        pop();
    }
};