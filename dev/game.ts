class Game {
        
    private static instance:Game;  
    private tank:Tank1;
    private tank2:Tank2;
     
   
    
    constructor() {
        
        //this.tank1 = new Tank1();
        
        this.tank = new Tank1(100, 200, "tank1");
        this.tank2 = new Tank2();
        
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        
        this.tank.move();
        this.tank.draw();
        this.tank2.move();
        this.tank2.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    public static getInstance() {
        if (! Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
} 