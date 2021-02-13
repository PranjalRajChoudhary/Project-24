class Stone {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1, 
      }
      this.body = Bodies.rectangle(500,43,80,80, options);
      this.width = 80;
      this.height = 80;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      stroke("white");
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };