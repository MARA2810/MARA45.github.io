let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000, 600); 
       frameRate(300);
     // A partir de esta linea podemos codificar nuestros dibujos

     let colorfondo=color (45,45,122);
    
     x=500;
    
     direccion=0;

     let y=0
     let aletorio=random(1,1000);
     velocidad=1
     velocidad2=1
     
    let puntos=0
     
     
     draw = function ()
    {

        
         background (colorfondo);

         fill(106, 176, 204 );
         textSize(40);
         text ("Puntos: "+puntos,400,100);

         fill(250,250,250);
         ellipse (aletorio,y,30,15);
         y=y+velocidad2
         aletorio=aletorio+velocidad
         if (aletorio>=980){
             velocidad=-1;
            }

         if (aletorio<0){
         velocidad=1;}

         if (y>=600){
            fill(15, 198, 44 );
            textSize (100);
            text ("GAME OVER",200,250);
            
        }

        if (y<=0){
            velocidad2=random(1, 4);
        }
         
        //  if (y>=600){
        //     //  y=0;
        //     //  aletorio=random(1, 1000);
        //      textSize(90);
        //      fill(100,200,150);
        //      text("CHOQUE",0,200);

        //  }
        //  if (aletorio<= x+50 && aletorio>=x-50 && y>=450 && y<=550){
        //      textSize(90);
        //      fill(100,200,150);
        //      text("CHOQUE",0,200);
        //      colorfondo=color(0,0,0);
        //  }
         if (aletorio<= x+50 && aletorio>=x-50 && y>=450 && y<=550){
            velocidad2= random(1,4);
            y=0
            puntos=puntos+1;
            
        }
       
        if (aletorio<= x+50 && aletorio>=x-50 && y>=450 && y<=550){
            velocidad=+2
        }
        
        if (aletorio<= x+50 && aletorio>=x-50 && y>=450 && y<=550){
            velocidad=-2
        }


        fill (3, 91, 19 );
        rect (x,500,100,100);
        rect (x,475,100,25);
        
        fill(7, 144, 31 );
        rect (x-10,500,120,20);
        
        x=x+direccion;

     
        keyPressed = function(){
            if (key.code==65){
                direccion=-3
                
            }
            if (key.code==68){
                direccion=+3
                
            }
        // mousePressed = function(){  
        //     if(mouseX<500){
        //         direccion=-4
        //     }  
        //     if(mouseX>500){
        //         direccion=+4
        //     }
      
        
        }
        if ( x >= 890 ){
            direccion=-3;
        }
        if ( x <= 10 ){
            direccion=3;
    }
    }

     
   //------------------------------------------------------

   }};
   let canvas = document.getElementById("mycanvas"); 
   let processingInstance = new Processing(canvas, sketchProc); 
if (mouseIsPressed){}
