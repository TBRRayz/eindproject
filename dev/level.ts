/// <reference path="Collision.ts" />

class Level 
{
        
        
        public WallArray: Array<Wall> = new Array<Wall>();
        public tank1:Tank1;
        public tank2:Tank2;
        public collision:Collision = new Collision();
   
    constructor() 
    {

        

    }
    public Draw():void
    {
        ctx.font = '48px serif';
        ctx.fillText('Hello world', 10, 50);
    }

    public Update(T1:Tank1, T2:Tank2):void
    {
        this.Draw();
         //het tekenen van de muren
         for(var i = 0; i < 1280; i += 40){
            this.WallArray.push(new Wall(i, 0));
         }
         for(var i = 0; i < 1280; i += 40){
            this.WallArray.push(new Wall(i, 640));
         }
         for(var i = 0; i < 640; i += 40){
            this.WallArray.push(new Wall(0, i));
         }
         for(var i = 0; i < 640; i += 40){
            this.WallArray.push(new Wall(1240, i));
         }

        this.tank1 = T1;
        this.tank2 = T2;
        
            for(var i = 0; i < this.WallArray.length; i ++)
            {    
                if(this.collision.hasOverlap(this.tank1, this.WallArray[i]))
                {  
                    console.log("tank1hint");
                    //this.tank1.velocity.multiply(0);
                    this.tank1.velocity.x = 0;
                    this.tank1.velocity.y = 0;
                }    
            }
       }             
}
