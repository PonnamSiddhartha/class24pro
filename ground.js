class Ground{
  
    constructor(x,y,width,height){
        var options= {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w =width
        this.h =height
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(400, 380,800,20)
}
}
