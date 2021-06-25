class Cloud {
      constructor(x, y){
        var options ={
          isStatic: true
        }
    
        this.body = Bodies.circle(x, y, 100, options);
        this.radius = 100;
        this.image = loadImage("cloud.png");
        World.add(world,this.image);
    }
    
    display (){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 200, 100);
    }
    }