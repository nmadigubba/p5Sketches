let img;
let angle =0;

function preload(){
  
  img = loadImage('colortv.jpg')
  
}

function setup() {
  createCanvas(img.width, img.height);
   cp = createImage(img.width, img.height);

  
}

function draw(){
 img.loadPixels();
  cp.loadPixels();
  
  
  for(let x= 0; x<width; x++){
for(let y = 0; y < height;y++){
  
  let loc =(x+y*width) * 4;
  
  let r = img.pixels[loc];
  let g = img.pixels[loc+1];
  let b =img.pixels[loc+2];
  let a =img.pixels[loc+3];
  
  let centerX = width/2;
  let centerY = height/2;
  
  //mouse and animated pixels.
  let distanceFromCenter  = dist(mouseX, mouseY, centerX, centerY);
  
  let addR = map(distanceFromCenter, 0, 150, 0, 100);
 // let addR =map(sin(angle),-1,1, 0, 200);
  r = r +addR;
  g = g -random(addR);
  b = r+a;
  
  cp.pixels[loc] = r;
  cp.pixels[loc+1] = g;
  cp.pixels[loc+2] = b;
  
  cp.pixels[loc+3]= a;
  
  angle+=0.02;
   
  
  
}
  }
  img.updatePixels();
  
  cp.updatePixels();
  
  image(cp,0,0);

}
