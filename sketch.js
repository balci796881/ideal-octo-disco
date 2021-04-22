
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,rock,iron,rubber,sand1,sand2,sand3;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
    plane= new Ground(600,height,1200,20)
	hammer = new Box(30,30,300,30)
     rock = new Stone(700,320,70,70);
     rubber = new Rubber(900,150,70)
     iron = new Iron(300,350)
     sand1 = new Sand(505,250,10)
     sand2 = new Sand(510,250,10);
     sand3 = new Sand(515,250,10)

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue")
  Engine.update(engine);
  
  drawSprites();
 hammer.display()
 rock.display()
 plane.display();
 iron.display();
 rubber.display();
 sand1.display()
 sand2.display();
 sand3.display();
}



