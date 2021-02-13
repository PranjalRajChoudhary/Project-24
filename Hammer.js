class Hammer {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.rectangle(600, 300,90,40, options);
      this.width = 90;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     pos.x = mouseX;
     pos.y = mouseY;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      stroke("grey");
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };