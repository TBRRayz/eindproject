class Idle extends Behavior {
    tank    :   Tank1;

    constructor(t : Tank1) {
        super();
        this.tank = t;
    }

    performBehavior(): void {
        // Behavior idle uitvoeren
        console.log('behavior idle uitvoeren');
    }

    onTimerFinished() {
        // Hier kan je dan doen dat hij bijv. niets doet bij finished, maar idle blijft.
    }

}