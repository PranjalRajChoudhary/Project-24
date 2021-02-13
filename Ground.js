class Ground{
    constructor(){
        this.body = Bodies.rectangle(200,590,2200,10,{isStatic:true});

        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        stroke("brown");
        strokeWeight(4);
        rect(200,590,2200,10);
    }
}