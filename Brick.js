class Brick {
    constructor(x,y,width,height,colour) {
      var options = {
          isStatic:false,
          friction:10,
          density:2.5,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.colour=colour;
    }
    display(){
      var pos =this.body.position;
      var colour =this.colour;
      rectMode(CENTER);
      fill(colour);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
