float acc = .05;
float vel = .4;
float z_limit = 6;
 
Colony bc = new Colony();
boolean mouseDown = false;
  
void setup()
{
  size(800,400,P2D);
  smooth();
  noStroke();
   
  for(int i=0; i<=40;i++){
    bc.add(new Bee(7,random(width),random(height),false));
  }
  
  for(int i=0; i<=40;i++){
    bc.add(new Bee(7,random(width),random(height),true));
  }
}
  
void draw()
{
  background(255,255,255,0);
   
  bc.run();
}
 
class Bee
{
  int diameter;
  float x, y;
  float dx, dy, dz;
  boolean reverse;
  Bee(){  }
  
  Bee(int D, float X, float Y, boolean R)
  {
    diameter = D;
    x = X;
    y = Y;
    dx = random(-vel,vel);
    dy = random(-vel,vel);
    reverse = R;
  }
  
  void run()
  {
    move();
    change_momentum();
    display();
  }
  
    void move()
  {
     
    float targetX;
    float targetY;
    float easing = 0.02;
     
    if(x - mouseX >= -100 && x - mouseX <= 100 && y- mouseY >= -100  && y- mouseY <= 100){
       
    targetX = mouseX;
    dx = targetX - x;
     
    if(abs(dx) > 1){
       x += dx * easing;
    }
     
    targetY = mouseY;
    dy = targetY - y;
     
    if(abs(dy) > 1){
    y += dy * easing;
    }
     
    }
    else{
       
    x += dx;
    y += dy;
      
    if(x > width){
      x = width; dx = 0;
    }
    if(x < 0){
    x = 0; dx = 0;
    }
    if(y > height){
    y = height; dy = 0;
    }
    if(y < 0){
    y = 0; dy = 0;
    }
    }
  }
    
  void change_momentum()
  {
    dx += random(-acc, acc);
    dy += random(-acc, acc);
    
    if(dx >  vel) dx =  vel;
    if(dx < -vel) dx = -vel;
    if(dy >  vel) dy =  vel;
    if(dy < -vel) dy = -vel;
  }
  
  void display()
  {
    noStroke();
    
    if(reverse == false) { 
     fill(random(200,255));
     rect (x+1, y-7.5, 10, random(30)); 
      
     fill(255,219,13);
     rect (x+6, y, 6, 8);
     fill(102, 51, 0);
     rect (x, y, 2, 8); 
     fill(255,219,13);
     rect (x+2, y, 2, 8);
     fill(102, 51, 0);
     rect (x+4, y, 2, 8);   
    } else {
     fill(random(200,255));
     rect (x-7, y-7.5, 10, random(30));  
      
     fill(255,219,13);
     rect (x-10, y, 6, 8);
     fill(102, 51, 0);
     rect (x, y, 2, 8); 
     fill(255,219,13);
     rect (x-2, y, 2, 8);
     fill(102, 51, 0);
     rect (x-4, y, 2, 8); 
    }
  }
} 
class Colony
{
  ArrayList bees = new ArrayList();
    
  Colony(){}
    
  void add(Bee b)
  {
    bees.add(b);
  }
   
  void run()
  {
    for(int i = 0; i < bees.size(); i++)
    {
      Bee b = (Bee)bees.get(i);
      b.run();
    }
  }
}