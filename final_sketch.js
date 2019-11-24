let yodelSound, ampObject;
let fft
var globe;
var total = 29;

var offset = 0;

var m = 0;
var mchange = 0;
var a = 1;
var b = 1;
let img;

function preload(){
  
  bg = loadImage('colortv tester.jpg');
  tvSound = loadSound('muffledtv.mp3');
}
function setup() {
  // createCanvas(img.width, img.height,WEBGL);
  createCanvas(900, 900, WEBGL);
  tvSound.rate(1.0);
  tvSound.loop();
  fft = new p5.FFT();
  //colorMode(HSB);
  globe = new Array((total+1)*(total+1));
}


function supershape( theta,  m,  n1,  n2,  n3) {
  var t1 = abs((1/a)*cos(m * theta / 4));
  t1 = pow(t1, n2);
  var t2 = abs((1/b)*sin(m * theta/4));
  t2 = pow(t2, n3);
  var t3 = t1 + t2;
  var r = pow(t3, - 1 / n1);
  return r;
}



function draw() {
  texture(bg);
  spectrum = fft.analyze();
//  rect(-200, -200, 400, 400);
 m = map(sin(mchange), -1, 1, 0, 5.2);
 // m = map(sin(mchange),random( -1, 1),random( -5, 10), random( 10, 17), random( 10, 17));
  mchange += 0.00503;
  rotateX(mchange*9);
     rotateZ(mchange*(-9));
     rotateY(mchange*(-4));

 background(25,60,125);
noStroke();
//  lights();
  var r = 250;
  for (var i = 0; i < total+1; i++) {
    
let amp = spectrum[i];
    
    var lat = map(i, amp, total, -PI, PI);
    var r2 = supershape(lat, m, 0.04, 1.7, 1.7);
    //var r2 = supershape(lat, 2, 10, 10, 10);
    for (var j = 0; j < total+1; j++) {
      
          
      var lon = map(j, 0, total, -PI, PI);
      var r1 = supershape(lon, m, 1, 1, 1);
      //var r1 = supershape(lon, 8, 60, 100, 30);
      var x = r * r1 * cos(lon) * r2 * cos(lat);
      var y = r * r1 * sin(lon) * r2 * cos(lat);
      var z = r * r2 * sin(lat);
      var index = (i+j*(total+1));
      globe[index] = new createVector(x, y, z);
    }
  }
  
  
/*for( let i = 0; i < 360; i++){
       
     
    let amp = spectrum[i];
     
     
     let r = map(amp,0,255,0, 300)
     let x = r * cos(angle);
     let y =r * sin(angle);
      
     let red = amp;
     stroke(red,0,0);
     ellipse(x,y ,40); */
  
  
  for (var h = 0; h < total; h++) {
   // var hu = map(i, 0, total, 0, 125*3);
   //fill((hu + offset) % 255 , 255, 255);
    
    for (var k = 0; k < total+1; k++) {
        var index1 = (h+k*(total+1));
      var v1 = globe[index1];
      
      var index2 = ((h+1)+k*(total+1));
      var v2 = globe[index2];
     
      push();
      translate(v1.x,v1.y,v1.z);
      sphere(40);
      //line(4,11,4,22,4,99);
     pop();
    
      
   
       
    }
    
      
  }
}