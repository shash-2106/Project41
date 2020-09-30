class Drop{
    constructor(x,y,radius){
        var options = {
            isStatic  : false,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("cyan");
        ellipse(pos.x,pos.y,this.radius);

        if(pos.y > 1600){
            Matter.Body.setPosition(this.body, {x:random(0,800),y:random(0,800)})
        }
    }
}