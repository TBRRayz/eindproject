/// <reference path="gameObject.ts" />


class Tank1 extends gameObject {

    private speed       :   number;
    //private div:HTMLElement;
    private directionX  :   number = 0;
    private directionY  :   number = 0;
    
    //public orientation: Vector = new Vector(1, 0);
    //public pointList: Array<Vector> = new Array<Vector>();
    //public rotation: number = 0;
    
    public size         :   number = 20;
              
    constructor() {
        super("tank1");
          
        this.directionX = 0;
        this.directionY = 0;
        
        this.speed      = 4;
        this.x          = 100;
        this.y          = 200;
        
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup"  , (e) => this.onKeyUp(e));
    }

    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 39: //Right
                //this.turnRight();
                break;
            case 40: //Down
                this.directionY = 1;
                break;
            case 38: //Up
                this.directionY = -1;
                break;
            case 37: //Left
                //this.turnLeft();
                break;
        }
    }

     private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 39: //RIGHT
                this.directionX = 0;
                break;
                
            case 40: //RIGHT
                this.directionY = 0;
                break;
            case 38: //RIGHT
                this.directionY = 0;
                break;
            
            case 37: //LEFT
                this.directionX = 0;
                break;
        }
    }
    /*
    public turnLeft = (): void => {
    this.rotation -= 0.1;
        if (this.rotation < 0) {
   this.rotation += Math.PI * 2;
  }
  this.orientation.x = 1;
  this.orientation.y = 0;
  this.orientation.rotate(-this.rotation);
 }

 public turnRight = (): void => {
  this.rotation += 0.1;
  this.rotation %= Math.PI * 2;
  this.orientation.x = 1;
  this.orientation.y = 0;
  this.orientation.rotate(-this.rotation);
 }
 */
    public move() : void {
        this.x = this.x + this.speed * this.directionX;
        this.y = this.y + this.speed * this.directionY;

        // Comment: Op dit moment beweegt je tank uit het scherm, probeer iets als:
        // if (this.y > 20 && this.y < document.getElementById("container").clientWidth - 50) {
        //     this.y = this.y + this.speed * this.directionY;
        // }
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
         
    }  
}