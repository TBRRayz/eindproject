

ik ben tankwarz aan het maken dat is een spel voor 2 spellers waar bij je alle 2 een tank bent en op elkaar kan schieten.
een tank bestuur je met ASWD en CTRL de andere met de pijltjes en spaties. 

# UML

![UML](UML.png?raw=true "UML")

singleton zit in het aanroepen van de game.

        public static getInstance() {
        if (! Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
    
    let g = Game.getInstance();
    

interface zit in tank1 die inplements tank.
       
       interface Tank {
   
           x: number;
           y: number;
           tag: string;
           div: HTMLElement;

        }



# nog maken
- wall.ts
- wall2.ts
- shell.ts




# nu bezig met
de besturing voor de tanks op een manier dat de voorkant ook de voorkant blijft van de tank.

# moet nog gebeuren

- walls
- kogels
- healt balks
- colision

