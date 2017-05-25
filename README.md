# eindproject
tankwarz
ik ben tankwarz aan het maken dat is een spel voor 2 spellers waar bij je alle 2 een tank bent en elkaar kan kapot schieten.
een tank bestuur je met ASWD en de andere met de pijltjes. 
ze kunnen nu alleen nog maar op en neer bewegen omdat ik nog bezig ben met de rotatie.
je kan hem hier spel https://tbrrayz.github.io/eindproject/

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

stratery patron zit er nog niet in.

tank2 extends van gameobject.

# UML

![UML](UML.png?raw=true "UML")

# af
- main.ts
- game.ts

# bezig
- tank.ts
- tank1.ts
- tank2.ts
- vector.ts

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

# feedback week 4
Probeer voor jezelf wat duidelijkheid te creëren tijdens het programmeren. De code ziet er goed uit, je kunt goed zien dat je weet waar je mee bezig bent.

Echter staan (stonden) er hier en daar wat 'loze' comments voor functionaliteiten die je hebt gemaakt op een andere plek. Probeer dit soort dingen bij te houden, ziet je code er overzichtelijk uit. Uitlijning en consistentie is belangrijk.

In je UML kon ik maar één tank vinden, maar toch heb je twee tank classes die eigenlijk exact het zelfde doen maar op een andere positie. Tank 1 maakte gebruik van een interface en tank 2 extends van gameObject. Ik heb voor consistentie (en je UML gevolgd) hier beide een extensie van gameObject voor gemaakt. Maar kijk naar de mogelijkheden om maar 1 tank class te hebben. Scheelt veel code die je moet herhalen. 

### Beoordeling week 4
- [x] De code voor het deelproduct staat op je eigen github
- [x] Er is een live page waar de game speelbaar is
- [x] Het deelproduct moet werkend zijn zonder foutmeldingen / bugs
- [x] Het deelproduct bevat een Readme (evt. met installatie instructies)
- [x] Er is een klassendiagram aanwezig
- [x] Je legt uit in je Readme waar je gebruik maakt van de volgende programmeerprincipes
    - [x] Interface
    - [x] Static Utility Method
    - [x] Singleton
    - [x] Strategy
    - [x] Een van de programmeertechnieken uit jaar 1:
        - [x] Encapsulation
        - [x] Inheritance

Opmerkingen:
Je bent heel erg goed op weg naar het eindproduct. Ik mis nog een strategy pattern. In je UML kon ik deze ook niet zo snel vinden.
Een tip vanuit mij zou zijn om een tankbehavior te maken waar je een idle behavior hebt en een reloading. En dat je een functionaliteit toevoegd waardoor een tank x aantal bullets heeft. Als deze op zijn je moet reloaden en in een behavior terecht komt waar je 1 of 2 seconden stilstaat (of niet kunt schieten) of iets dergelijks.

Resultaat: Voldoende













