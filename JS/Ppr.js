class Ppr{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restutution:0.3,
            friction:0,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = r
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world,this.body);
    }
    display(){
        var pPos = this.body.position;
        push()
		translate(pPos.x, pPos.y);
		rectMode(CENTER)
		strokeWeight(3);
		ellipse(0,0,this.r,this.r);
        pop();
        imageMode(CENTER);
        image(this.image,this.body);
    } 
}