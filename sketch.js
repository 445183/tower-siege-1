const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    backgroundImg = loadImage("bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,575);
    engine = Engine.create();
    world = engine.world;

    brick=new Brick(600,565,1200,20,"brown");
    Matter.Body.setStatic(brick.body,isStatic=true);
    
    brick1=new Brick(400,540,30,30,"red");
    brick2=new Brick(440,540,30,30,"green");
    brick3=new Brick(480,540,30,30,"violet");
    brick4=new Brick(520,540,30,30,"grey");
    brick5=new Brick(560,540,30,30,"purple");
    brick6=new Brick(600,540,30,30,"pink");
    brick7=new Brick(640,540,30,30,"maroon");
    brick8=new Brick(680,540,30,30,"blue");
    brick9=new Brick(720,540,30,30,"black");
    brick10=new Brick(760,540,30,30,"brown");
    brick11=new Brick(800,540,30,30,"orange");
    brick12=new Brick(840,540,30,30,"yellow");
    brick13=new Brick(880,540,30,30,"red");
    brick14=new Brick(920,540,30,30,"green");
    brick15=new Brick(960,540,30,30,"violet");
    brick16=new Brick(1000,540,30,30,"grey");
    brick17=new Brick(1040,540,30,30,"purple");
    brick18=new Brick(1080,540,30,30,"pink");
    brick19=new Brick(1120,540,30,30,"maroon");
    brick20=new Brick(1160,540,30,30,"blue");
    brick21=new Brick(420,510,30,30,"red");
    brick22=new Brick(460,510,30,30,"green");
    brick23=new Brick(500,510,30,30,"violet");
    brick24=new Brick(540,510,30,30,"grey");
    brick25=new Brick(580,510,30,30,"purple");
    brick26=new Brick(620,510,30,30,"pink");
    brick27=new Brick(660,510,30,30,"maroon");
    brick28=new Brick(700,510,30,30,"blue");
    brick29=new Brick(740,510,30,30,"black");
    brick30=new Brick(780,510,30,30,"brown");
    brick31=new Brick(820,510,30,30,"orange");
    brick32=new Brick(860,510,30,30,"yellow");
    brick33=new Brick(900,510,30,30,"red");
    brick34=new Brick(940,510,30,30,"green");
    brick35=new Brick(980,510,30,30,"violet");
    brick36=new Brick(1020,510,30,30,"grey");
    brick37=new Brick(1060,510,30,30,"purple");
    brick38=new Brick(1100,510,30,30,"pink");
    brick39=new Brick(1140,510,30,30,"maroon");
    brick40=new Brick(440,480,30,30,"green");
    brick41=new Brick(480,480,30,30,"violet");
    brick42=new Brick(520,480,30,30,"grey");
    brick43=new Brick(560,480,30,30,"purple");
    brick44=new Brick(600,480,30,30,"pink");
    brick45=new Brick(640,480,30,30,"maroon");
    brick46=new Brick(680,480,30,30,"blue");
    brick47=new Brick(720,480,30,30,"black");
    brick48=new Brick(760,480,30,30,"brown");
    brick49=new Brick(800,480,30,30,"orange");
    brick50=new Brick(840,480,30,30,"yellow");
    brick51=new Brick(880,480,30,30,"red");
    brick52=new Brick(920,480,30,30,"green");
    brick53=new Brick(960,480,30,30,"violet");
    brick54=new Brick(1000,480,30,30,"grey");
    brick55=new Brick(1040,480,30,30,"purple");
    brick56=new Brick(1080,480,30,30,"pink");
    brick57=new Brick(1120,480,30,30,"maroon");
    brick58=new Brick(460,440,30,30,"violet");
    brick59=new Brick(500,440,30,30,"grey");
    brick60=new Brick(540,440,30,30,"purple");
    brick61=new Brick(580,440,30,30,"pink");
    brick62=new Brick(620,440,30,30,"maroon");
    brick63=new Brick(660,440,30,30,"blue");
    brick64=new Brick(700,440,30,30,"black");
    brick65=new Brick(740,440,30,30,"brown");
    brick66=new Brick(780,440,30,30,"orange");
    brick67=new Brick(820,440,30,30,"yellow");
    brick68=new Brick(860,440,30,30,"red");
    brick69=new Brick(900,440,30,30,"green");
    brick70=new Brick(940,440,30,30,"violet");
    brick71=new Brick(980,440,30,30,"grey");
    brick72=new Brick(1020,440,30,30,"purple");
    brick73=new Brick(1060,440,30,30,"pink");
    brick74=new Brick(1100,440,30,30,"maroon");

    tnt=new TNT(100,300);  
    sling=new Slingshot(tnt.body,{x:100,y:450})
    
         
}
function draw(){
    background(backgroundImg);
    Engine.update(engine);

    brick.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();    
    brick6.display();
    brick7.display();
    brick8.display();
    brick9.display();
    brick10.display();
    brick11.display();    
    brick12.display();
    brick13.display();
    brick14.display();
    brick15.display();
    brick16.display();
    brick17.display();    
    brick18.display();
    brick19.display();
    brick20.display();
    brick21.display();
    brick22.display();
    brick23.display();
    brick24.display();
    brick25.display();    
    brick26.display();
    brick27.display();
    brick28.display();
    brick29.display();
    brick30.display();
    brick31.display();    
    brick32.display();
    brick33.display();
    brick34.display();
    brick35.display();
    brick36.display();
    brick37.display();    
    brick38.display();
    brick39.display();
    brick40.display();
    brick41.display();
    brick42.display();
    brick43.display();    
    brick44.display();
    brick45.display();
    brick46.display();
    brick47.display();
    brick48.display();
    brick49.display();    
    brick50.display();
    brick51.display();
    brick52.display();
    brick53.display();
    brick54.display();
    brick55.display();    
    brick56.display();
    brick57.display();
    brick58.display();
    brick59.display();
    brick60.display();    
    brick61.display();
    brick62.display();
    brick63.display();
    brick64.display();
    brick65.display();
    brick66.display();    
    brick67.display();
    brick68.display();
    brick69.display();
    brick70.display();
    brick71.display();
    brick72.display();    
    brick73.display();
    brick74.display();
    
    
    sling.display();
    tnt.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(tnt.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(tnt.body);
    }
}