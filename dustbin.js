class Bin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
     // this.body = Bodies.rectangle(x,y,10,100,options);
      this.width = width;
      this.height = height;
      this.lbody = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.lbody);

      this.rbody = Bodies.rectangle(x+100,y,width,height,options);
      World.add(world, this.rbody);

      this.bbody = Bodies.rectangle(x+50,y+60,height,width+20,options);
      World.add(world, this.bbody);
      this.image=loadImage("dustbin.png");
    }
    display(){
      var pos =this.lbody.position;
      
     // fill("white");
      strokeWeight(4);
      stroke("black");
      push();
      fill("red");
      rectMode(CENTER);
     // rect(pos.x, pos.y, this.width, this.height);
      pop();

      push();
      fill("yellow");
      imageMode(CENTER);
      image (this.image,this.rbody.position.x-45, this.rbody.position.y+10,90,120);
      rectMode(CENTER);
      //rect(this.rbody.position.x, this.rbody.position.y, this.width, this.height);
      pop();

      push();
      fill("green");
      rectMode(CENTER);
     // rect(this.bbody.position.x, this.bbody.position.y,  this.height,this.width);
      pop();
    }
  };