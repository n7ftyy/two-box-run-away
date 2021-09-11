var box1, box2

function setup() 
{
  createCanvas(400, 400);

  //creating object out of class
  box1 = new Box(40, 40, 40, 40, 7, 7);
  box2 = new Box(20, 20, 20, 20, 5, 5)

}

function draw() 
{
  background(220);
  box1.show();
  box1.setHorizontalVelocity();

  box2.show();
  box2.setVerticalVelocity();
}

