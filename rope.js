class Rope{
    constructor(bodyA,  bobObject1){
        var options = {
            bodyA: bodyA,
            bobObject1:  bobObject1,
            stiffness: 0.1,
            length: 10
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);


    attach(body)
       this.bobObject1


    }
}
    display()
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var  bobObject1 = this. bobObject1;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y,  bobObject1.x -10,  bobObject1.y);
                line(pointA.x - 20, pointA.y,  bobObject1.x + 30,  bobObject1.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y,  bobObject1.x -10,  bobObject1.y);
                line(pointA.x + 25, pointA.y,  bobObject1.x + 30,  bobObject1.y - 3);
                image(this.pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    
    
    
    
