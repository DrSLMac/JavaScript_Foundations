class Centaur {
    constructor(centaurDetails) {
        this.name = centaurDetails.name;
        this.breed = centaurDetails.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.count = 0;
    }

    shootBow() {
        this.count ++
        if (this.count === 3) {
            this.cranky = true;
        }
        if (this.cranky || this.layingDown) {
            return 'NO!'
        } else {
            return 'Twang!!!'
        }
    }

    run() {
        this.count ++
        if (this.count === 3) {
            this.cranky = true;
        }
        if (this.cranky || this.layingDown) {
            return 'NO!'
        } else {
        return 'Clop clop clop clop!!!'
        }
    }

    sleep() {
        if (this.layingDown) {
            this.cranky = false;
            return "ZZZZ"
        }
        if (this.standing) {
            return 'NO!'
        }
    }

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.layingDown = false;
        this.standing = true;
    }

    drinkPotion() {
        if (this.standing) {
            this.cranky = false;
        } else {
            return 'Not while I\'m laying down!'
        }
    }
}

module.exports = Centaur