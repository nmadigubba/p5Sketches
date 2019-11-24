

function setup() {
  createCanvas(800, 800);
   
 frameRate(5);
}


function draw() {
   background(255,150,0);
   strokeWeight(1);
  stroke(random(120,300), 120,80);
  
   for(let i=0; i < 8; i++) {
  
    
  
    for(let j=0; j < 9; j++){
  Triangle(190*i, 140*j);
 
}
   }
}
function Triangle(x, y){
  
 

   strokeWeight(1);
  stroke(random(120,255), 120,80);
 // fill(random(255), random(300),70);
   beginShape();
  vertex(x+100,y+10+random(0,60));
  vertex(x,y+110);
 vertex(x+200,y+110);
   endShape(CLOSE);
  
  strokeWeight(1);
  stroke(random(120,255), 120,80);
  fill(random(80), random(80), 70);
   beginShape();
  vertex(x,y+50);
  vertex(x+200,y+50);
  vertex(x+100,y+150+random(0,10));
   endShape(CLOSE);
  

  
   
  
}
