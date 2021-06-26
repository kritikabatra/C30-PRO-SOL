class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visibility =255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("block.png");
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
  
    display(){
      if (this.body.speed<3) {
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y);
    }
    else {
      World.remove(world,this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
      pop();
    }
  }
}