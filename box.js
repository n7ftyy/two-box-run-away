class Box
  {
    //attributes
    constructor(x, y, w, h, vx, vy){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.vx = vx;
      this.vy = vy;
    }

   
    show(){
      rect(this.x, this.y, this.w, this.h)
    }

    setHorizontalVelocity(){
      this.x = this.x + this.vx
    }

    setVerticalVelocity(){
      this.y = this.y + this.vy
    }
  }

  

  //arguments are passed inside the round brackets of the function
  //arguments can be replaced by actual values when the object is finally created
