const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
polygonImg=loadImage("polygon.png")



}
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground=new Ground(450,390,900,20);
    stand1=new Ground(390,300,250,10);
    stand2=new Ground(700,200,200,10);
   // level1
   block1=new Block(300,275,30,40)
   block2=new Block(330,275,30,40)
   block3=new Block(360,275,30,40)
   block4=new Block(390,275,30,40)
   block5=new Block(420,275,30,40)
   block6=new Block(450,275,30,40)
   block7=new Block(480,275,30,40)

   //level 2
   block8=new Block(330,235,30,40)
   block9=new Block(360,235,30,40)
   block10=new Block(390,235,30,40)
   block11=new Block(420,235,30,40)
   block12=new Block(450,235,30,40)

   //level 3
   block13=new Block(360,195,30,40)
   block14=new Block(390,195,30,40)
   block15=new Block(420,195,30,40)

   //level 4
   block16=new Block(390,155,30,40)

   //set of second stand
   //level 1
   blocks1=new Block(640,175,30,40)
   blocks2=new Block(670,175,30,40)
   blocks3=new Block(700,175,30,40)
   blocks4=new Block(730,175,30,40)
   blocks5=new Block(760,175,30,40)

   //level 2
   blocks6=new Block(670,135,30,40)
   blocks7=new Block(700,135,30,40)
   blocks8=new Block(730,135,30,40)

   //level 3
   blocks9=new Block(700,95,30,40)
   
   polygon=Bodies.circle(50,200,20)
   World.add(world,polygon)
   slingShot=new SlingShot(this.polygon,{x:100,y:200})












}
function draw(){
background("brown")
textSize(24)
text("drag a polygon to destroy blocks ",320,40)

ground.display()
stand1.display()
stand2.display()
fill("blue")
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
fill("pink")
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
fill("green")
block13.display()
block14.display()
block15.display()
fill("black")
block16.display()
fill("orange")
blocks1.display()
blocks2.display()
blocks3.display()
blocks4.display()
blocks5.display()
fill("blue")
blocks6.display()
blocks7.display()
blocks8.display()
fill("black")
blocks9.display()  
 imageMode(CENTER)
 image(polygonImg,polygon.position.x,polygon.position.y,40,40)
 slingShot.display()



}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}