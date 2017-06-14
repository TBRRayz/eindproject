class Game 
{
        
    private static instance:Game;  
    
    private tank1:Tank1 = new Tank1(1000, 200);;
    private tank2:Tank2 = new Tank2(100, 200);
    private level:Level = new Level();

    constructor() 
    {
        //gameloop aanroepen
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop()
    {

        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1280, 720);
        this.level.Update(this.tank1, this.tank2);

        this.tank1.draw();
        this.tank2.draw();
        
        requestAnimationFrame(() => this.gameLoop());
    }

    //checken of er al een game instance is
    public static getInstance() 
    {
        if (! Game.instance) 
        {
            Game.instance = new Game();
        }
        return Game.instance;
    }
} 