class Ogre {
    constructor(ogreDetails) {
        this.name = ogreDetails.name;
        this.home = ogreDetails.abode || 'Swamp';
        this.swings = 0;
    }

    encounter(human) {
        human.encounterCounter ++
        if (human.noticesOgre()) {
            this.swingAt(human)
        }
        if (this.swings % 2 === 0 && this.swings !== 0) {
            human.knockedOut = true;
        }
    }

    //ogre swings at human, this.swings increases by 1
    //ogre encounters human 3 times, human.encounterCounter = 3, then human noticesOgre = true
    //then ogre swings at human.

    swingAt(human) {
        var notices = human.noticesOgre()
        if (notices = true) {
            this.swings += 1;
        }
    }

    apologize(human) {
        human.knockedOut = false;
    }
}

module.exports = Ogre