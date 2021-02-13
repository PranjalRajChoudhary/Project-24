class Iron {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0, 
      }
      this.body = Bodies.rectangle(300, 50,80,60, options);
      this.width = 80;
      this.height = 60;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      stroke("orange");
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
