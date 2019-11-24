
let img, bg;
let angle =0;
let myGraphic;
let r=100;
let resolution = 40;
let xAngle =0;


function preload(){

  img = loadImage("lights.jpg");
  bg = loadImage("water.jpg"); 

}

function setup() {
 
  createCanvas(400, 400, WEBGL);
  noStroke();
  
   
 /* myGraphic = createGraphics(200, 200);
  myGraphic.background(220,90,220);
  myGraphic.fill(200,20,200);
  myGraphic.ellipse(width/2, height/2, 200);*/
}

function draw() {
 background(0);
   //orbitControl();
 // pointLight(255, 255, 255, 100, 100, 600);
  
 texture(bg);
  rect(-200, -200, 400, 400);
  
  rotateX(xAngle);
  rotateY(xAngle*2);
  rotateZ(xAngle*5);
  texture(img);
  //sphere(100);
  for( let i =0; i< resolution; i++){
let x = r *cos(angle);
  let y = r *sin(angle);
  push();
   translate(x,y);
   torus(25, 40);
 pop();
   
  angle +=PI/resolution;
}
     xAngle +=0.01;
}