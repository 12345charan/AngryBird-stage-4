class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.slings1=loadImage("sprites/sling1.png")
        this.slings2=loadImage("sprites/sling2.png")
        this.slings3=loadImage("sprites/sling3.png")
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null;
    }

    display(){
        image(this.slings1,200,20)
        image(this.slings2,170,20)
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(15);
            stroke("#301608")
            if(pointA.x <220){
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y -3);
            image(this.slings3,pointA.x-30, pointA.y-10, 15,30)
            }
            else{
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y -3);
            image(this.slings3,pointA.x+25, pointA.y-10, 15,30)
            }
            

            pop()
        }
        
    }
    
}