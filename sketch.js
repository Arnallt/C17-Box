var box1,box2,box3,box4,box5;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(10,10,20,10);
  box2 = new Box(10,370,5,30);
  box3 = new Box(360,10,30,15);
  box4 = new Box(360,390,20,5);
  box5 = new Box(200,200,10,10);
  
}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();

}

