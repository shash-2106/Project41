
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var light1, light2, light3, light4;

var rand;

var maxDrops = 100;

var drops = [];


function preload()
{
light1 = loadImage("images/thunderbolt/1.png");
light2 = loadImage("images/thunderbolt/2.png");
light3 = loadImage("images/thunderbolt/3.png");
light4 = loadImage("images/thunderbolt/4.png");
}

function setup() {
    createCanvas(800, 1600);
    
    lightning = createSprite(400,400);
    rand = Math.round(random(1,4));

    switch(rand){
        case 1 :
            lightning.addImage(light1);
            break;
            case 2 :
                lightning.addImage(light2);
                break;
                case 3 :
                    lightning.addImage(light3);
                    break;
                    case 4 :
                        lightning.addImage(light4);
    }

	engine = Engine.create();
	world = engine.world;	
	
    umbrella = new Umbrella(400,1225,2);	
    
    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0,800),random(0,800),5));
    }

	Engine.run(engine);
  
}


function draw() {
 
  background("black");
  
  drawSprites();
  umbrella.display();
  
  for(var a = 0; a < 100; a++){
    drops[a].display();
  }

}