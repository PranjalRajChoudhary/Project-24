class Sand {
    constructor(x) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.circle(x,75,5, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("orange");
      stroke("orange");
      strokeWeight(4);
      circle(0,0,5);
      pop();
    }
  };