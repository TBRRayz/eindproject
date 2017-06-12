class Reloading extends Behavior {
    tank    :   Tank1;

    constructor(t : Tank1) {
        super();
        this.tank = t;
    }

    performBehavior(): void {
        // Behavior reloading uitvoeren
        console.log('behavior reloading uitvoeren');
    }

    onTimerFinished() {
        // Hier kan je doen dat 't na reloading terug naar idle gaat bijv.
    }

}