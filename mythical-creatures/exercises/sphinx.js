class Sphinx {
    constructor() {
        this.riddles = [];
        this.heroesEaten = 0;
    }

    collectRiddle(riddle) {
        this.riddles.push(riddle)
        if (this.riddles.length > 3) {
            this.riddles.shift()
        }
    }

    attemptAnswer(answer) {
        if(this.riddles.length >= 1) {
            for (let i = 0; i < this.riddles.length; i++) {
                if (answer == this.riddles[i].answer) {
                    this.riddles.splice(i, 1);
                    if (this.riddles.length === 0) {
                        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
                    } else {
                        return 'That wasn\'t that hard, I bet you don\'t get the next one'
                    }
                } 
            }
        
            for (let i = 0; i < this.riddles.length; i++) {
                if (answer !== this.riddles[i].answer) {
                        return this.heroesEaten += 1
                }
            }
    }  
    }
}

module.exports = Sphinx