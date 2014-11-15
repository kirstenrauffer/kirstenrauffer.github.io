int count = 0;
color c1 = #FFFFFF;
color c2 = #FFE9C4;
color c3 = #D4FBFF;
float X, Y, pX, pY, r;
boolean rectOver;

void setup()
{
  size(1600, 1400);
  background(0,0,0,0);
}

void draw() {
  update(mouseX, mouseY);
  
  noStroke();
  fill(0,0,0,0);
  rect(0,0,60,30);
  
  fill(color(c1));
  
  if(rectOver) {
    fill(color(204));
    count = 0;
  }
  
  textFont(createFont("Arial", 15));
  text("new constellation", 10, 15); 
  
  float r = random(3, 5);
  float x = random(1, 4);

  if (x <= 2) {
    fill(c1);
  } else if (x <= 3) {
    fill(c2);
  } else {
    fill(c3);
  }
  
  if(mousePressed == true){    
    if(count < 1){
       count++;
    }
    else{
       stroke(255, 80);
       strokeWeight(1);
       fill(230,231,232,255);
       line(pX, pY, X, Y); 
    }
    mousePressed = false;
  }


}

void mousePressed() {  
  float r = random(3, 5);
  float x = random(1, 4);

  pX = pmouseX;
  pY = pmouseY;

  if (x <= 2) {
    fill(c1);
  } else if (x <= 3) {
    fill(c2);
  } else {
    fill(c3);
  }
  
  if (rectOver) {
    fill(color(0));
  }
  
  ellipse(mouseX, mouseY, r, r);
 
}

void mouseReleased(){
  X = mouseX;
  Y = mouseY;
}

void update(int x, int y){
   if (overRect(0, 0, 125, 30)) {
      rectOver = true; 
   }
   else{
      rectOver = false; 
   }
}

boolean overRect(int x, int y, int width, int height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}


