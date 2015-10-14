var bgd;
var boat;
var x=0;

function preload(){
    bgd = loadImage("data/storm.jpg");
    boat = loadImage("data/boat.png");
    

}

function setup(){
   createCanvas(900,600);
  
}


function draw(){
    background(255);
    image(bgd,0,0);
    image(boat,x,250);
    
    x=x+5;
    
    if (x > width){
        x = 0;
    }
    
}

