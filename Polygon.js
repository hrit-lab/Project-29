class Polygon{
    constructor(x,y,r){
        var options={
            isStatic : false,
            restitution : 0,
            friction : 1,
            density:1.2 
        }
        this.body = Bodies.circle(x,y,r);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y,this.body.position.r);
        imageMode(CENTER);
        this.image = loadImage("polygon.png");
        circle( 0, 0, this.r,this.r);
        pop();
    }
}