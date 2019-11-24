//formula for spherical projection:
//  x = r * sin(latitude) * cos(longitude)
//  y = r * sin(latitude) * sin(longitude)
//  z = r * cos(latitude)


let resolution = 20;
let r = 200;
let angle = 0;

let counter=0;
let noiseCounter=20;
let angleX=5;
let xAngle =0;

//we are going to use a 2d array to store xyz values
let globe = [];

function setup() {
  createCanvas(900, 900, WEBGL);
  
  //initialize 2d array; make an extra value so we don't have an end of array error in our draw loop
  for(let i =0; i < resolution + 1; i++){
      globe[i]=[];
    for(let j = 0; j < resolution + 1; j++){
      globe[i][j] = 0;
    }
  }
  
  
  //this nested for loop will do our sphere math so we only do it once
for(let i = 0; i < resolution + 1; i++){

  //map longitude resolution to a range that is a full circle
  let long = map(i, noise(noiseCounter), resolution, 0, PI)

  for(let j = 0; j < resolution + 1; j++){
    
    //map latitude resolution to half a circle
    let lat = map(j, noise(noiseCounter), resolution, 0, TWO_PI); 
    r =random(0,100);
    let r2= 6;
    //the equations for generating x,y,z from sin,cos,long,lat,radius
    let x = r * sin(lat) * r2*cos(long);
    let y = r * sin(lat) * sin(long);
    let z =  r * sin(lat);
    
    //fill our 2d array with the generated points, stored as vectors
    globe[i][j] = createVector(x,y,z);
        
  }
}
  
}

function draw() {
  background(181, 133, 2);
  //orbitControl();

   rotateX(angle/4);
  rotateY(2);
 
  
 //shininess(20);



  
  //this nested for loop will draw our shape
  for(let i = 0; i < resolution; i++){
    let long = map(i, 0,resolution, -PI, PI)

    beginShape(TRIANGLE_STRIP)
    
    
    //using a modulo symbol to make alternating rows different colors
    if(i%5 == 0){
      fill(25,120,120);
    } else {
      fill(0,0,120,12);
    }
    
    
    
    for(let j = 0; j < resolution+1; j++){
      let lat = map(j, 0 , resolution, -HALF_PI, HALF_PI); 

      //these are the points of our triangle shapes
      let v1 = new p5.Vector(globe[i][j].x, globe[i][j].y, globe[i][j].z);
       let v2 = new p5.Vector(globe[i+1][j].x, globe[i+1][j].y, globe[i+1][j].z);
      
      stroke(random(225));
      strokeWeight(0.5);

      //this is where we draw the vertexes.  it's also a great spot to add some       //kind of random value or make them move using trigonometric functions or       //  whatever else!
      vertex(v1.x, v1.y, v1.z);
      vertex(v2.x, v2.y, v2.z);
      noiseCounter+= 0.2;
    }
    endShape(CLOSE)
    pointLight(250,250,250,200,20,50);
  rotateX(xAngle);
  rotateY(xAngle*2);
  rotateZ(xAngle*5);
// scale(xAngle/2);
  
 
 for( let i =0; i< resolution; i++){
let x = r *cos(angle);
  let y = r *sin(angle);
  push();
   translate(x,y);
   stroke("blue");
   sphere(10,5,5);
   pop();
   
  angle +=TWO_PI/resolution;
  }     
      
      
      //this is just an angle to make the sphere rotate in our view
angle+=0.05

}
}