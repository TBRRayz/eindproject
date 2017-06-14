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

Verder heb ik drie files aangemaakt, een behavior.ts een reloading.ts en een idle.ts. Hiermee kan je uit de voeten voor je strategy pattern. Omdat je op dit moment twee tank classes hebt, raad ik je aan eerst dit op te lossen voordat je hier gebruik van maakt. Maar met deze files kan je goed op weg naar een strategy pattern. Lees verder voor uitleg waarom die filenamen:).

Suggestie die gecomment is uitleg:
```
        if (this.y > 20 && this.y < document.getElementById("container").clientWidth - 50) {
            this.y = this.y + this.speed * this.directionY;
        }
```
Op dit moment kun je met de tank uit het scherm bewegen. Ik neem aan dat dit iets is wat je wilt voorkomen.
Probeer iets als bovenstaande code te gebruiken om dit te voorkomen o.i.d.

Verder moet je even kijken of je wilt vermenigvuldigen in deze berekening, nu gaat het goed, maar als je met veranderende vars wilt werken (zag iets over powerups) kan dit misschien gaan tegenwerken.

## Beoordeling week 4
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

# feedback week 7
Het is goed om te zien dat je verder bent gegaan met je project. Ik zie dat je er nu een strategy pattern in hebt zitten. Echter missen een paar dingen om het eindproduct te voltooien met een voldoende. Denk aan een Library, observer,namespaces enzovoorts. Onderstaande beoordeling kun je zien wat er nu nog mist.

Je hebt nog steeds twee tank classes. Nu is dit verder geen eis alleen wat extra werk voor jezelf. 
Waar je even op moet letten is dat nu het spelletje misschien een beetje oneerlijk is, omdat de groene tank per schot op CTRL moet drukken, en de geel/oranje tank spatie ingedrukt kan houden haha.

Van GameObject voor nu even een abstracte class gemaakt zodat je er op z'n minst een hebt, maar misschien kun je iets verzinnen dat je een abstracte class hebt met een daadwerkelijke functie.

Zoals aangegeven mis je namespaces en enumerations.

### Namespaces
Ik heb als suggestie een namespace gemaakt bij level.ts
```
namespace LevelMaps {
    export class Level 
    {       
        [.....]
    }
}
```
Let op dat je deze class nu ook anders moet aanspreken.
In je game maakte je een instantie aan van level.ts d.m.v.
```
private level:Level = new Level();
```
Nu is dat:
```
private level:LevelMaps.Level = new LevelMaps.Level();
```
Nu vraag je je misschien af wat het nut hier van is, maar namespaces gebruik je eigenlijk ter voorkoming van problemen als je dezelfde class naam wilt gebruiken. Voorbeeldje zodat het duidelijk voor je is:

Nu kunnen je tanks schieten op elkaar. Je hebt hiervoor een shooting.ts behavior. Maar wat nou als je enemies wilt hebben die ook behaviors hebben waar er ook eentje shooting heet. Je kunt er dan voor kiezen om deze EnemyShooting.ts te noemen, of als je met namespaces werkt kun je deze gewoon shooting.ts blijven noemen. 

Stel je zou nu willen dat je tank bij het raken van de vijand een level omhoog kan, kun je nu een level.ts aanmaken met als namespace 'Experience'. Dan kun je dus onderscheid maken bij het aanroepen van level.ts dmv LevelMaps.level of Experience.level. 

Hoop dat het een beetje dudelijk is, en anders moet je 't even vragen.

### Enumerations
Op het moment van schrijven gaat je gameloop altijd door. Ik interpeteer dit als dat je game dus niet een echt einde heeft. De loop blijft namelijk altijd lopen.

Nu kun je er voor kiezen om een boolean te maken waar de game actief is of niet. En als deze actief is om de gameloop door te laten gaan en anders stop te zetten. Maar wat nou als je wilt dat je game in de toekomst ook op pauze kan? 

Hiervoor kun je Enumerations gebruiken. Misschien heb je enumerations al eens gebruikt in een database. Ook hier komen ze handig van pas. Je kunt dan namelijk van te voren bepalen wat ingevuld moet worden. Zo voorkom je dat iemand iets invult wat je niet verwacht. Al helemaal handig is dat bij Typescript je editor dit automatisch aanvult.

Ik heb voor jou nu even Enumerations gemaakt rondom je gameloop. Deze vind je dus ook in game.ts
```
enum GameActive {
    YES,
    NO,
    PAUSE
}

private activeGame : GameActive = GameActive.YES;

if(this.activeGame == GameActive.YES) {
    // Jou code voor de gameloop hier neergezet
    } else {
        console.log('The game has not started yet or is on pause.');
    }
```

### Library
Als je een library wilt gebruiken in deze stadium van het project (let op: library is een eis), raad ik je aan om een redelijk gemakkelijke library te gebruiken die snel op te zetten is. Je wilt misschien niet al je code opnieuw overhoop halen. Zowel de PIXI library als de Isomer library zijn goed te doen vind ik (ook enigste twee waar ik mee 'gespeeld' heb). 

Zelf heb ik Isomer gebruikt in mijn project om aan te geven wat de huidige situatie is (hoogte). Bij jou zou ik iets kunnen bedenken als het aantal kogels wat je tank nog heeft oid. Vrij gemakkelijke implementatie en toch erg leuk om mee te hobbyen. 

Links:
- [Pixi.js - canvas rendering library](http://www.pixijs.com)
- [Isomer - isometric game library](http://jdan.github.io/isomer/)
- [GitHub CMGT TypeScript](https://github.com/HR-CMGT/Typescript)

Als je vragen hebt over deze libraries hoor ik ze graag. Kijk ook even op Erik(?)/CMGT z'n GitHub, staat wat uitleg over.

### Observers
Je mist ook nog observer/subject stuk. Ik vind het lastig om zo snel iets te bedenken waar je dit goed kan toepassen, maar je zou het kunnen doen bij je tank en wall oid? Bijvoorbeeld dat als tank1 de muur raakt, dat tank2 hiervan notified wordt en voor korte tijd meer schade aanricht, sneller beweegd of iets. 

Probeer zelf wat te bedenken want ik ben er van overtuigd dat je een beter invulling kunt geven aan observers.

Ik heb de observer.ts en subject.ts files voor je aangemaakt. Probeer te bedenken waar je deze gaat gebruiken in je spel. Om je wel wat op weg te helpen hier een voorbeeldje van mijn code (compleet kun je vinden op mijn Git)

In mijn subject
```
public observers : Array<Observer> = new Array<Observer>();

        if (this.y < 100) {
            for(var i = 0; i < this.observers.length; i++) {
                this.observers[i].notify();
            }
        }

    public subscribe(o : Observer) {
        // console.log('Subscribed!');
        this.observers.push(o);
    }

    public unsubscribe(o : Observer): void {
        for(var i = 0; i < this.observers.length; i++) {
            if(this.observers[i] == o) {
                this.observers.splice(i, 1);
            }
        }
        console.log('Unsubscribed!');
    }
```

In je observer
```
public notify() {
    //Notify
    this.speed = 50;
    console.log('Notified');
}
```

------------
Ik hoop dat je hier mee goed op weg kunt! Al met al ben je echt goed bezig. Probeer deze week de laatste dingen nog even te maken.

Als je nog vragen hebt of dingen wilt weten hoor ik 't wel.

## Beoordeling week 7
- [x] De code voor het deelproduct staat op je eigen github
- [x] Er is een live page waar de game speelbaar is
- [x] Het deelproduct moet werkend zijn zonder foutmeldingen / bugs
- [x] Het deelproduct bevat een Readme (evt. met installatie instructies)
- [ ] Er is een klassendiagram aanwezig
In je readme mis ik nog uitleg, maar deze moest je ook nog aanpassen gaf je aan.

- [ ] Maakt gebruik van de volgende programmeerprincipes
    - [ ] Library
    - [x] Encapsulation
    - [x] Inheritance
    - [x] Singleton
    - [ ] Observer
    - [x] Strategy Pattern
    - [x] Interface
    - [x] Static
    - [ ] Abstract
    - [ ] Namespaces
    - [x] Polymorphism
    - [ ] Enumerations
    - [x] Game Loop
- [ ] Readme.md file waarin bovenstaande wordt toegelicht 












