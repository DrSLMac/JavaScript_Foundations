var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(victim) {
        var newStatue = new Statue(victim.name)
        this.statues.push(newStatue)
        if (this.statues.length > 3) {
            var freePerson = new Person(this.statues.shift().name)
            freePerson.mood = 'relieved'
            return freePerson
        }
    }
}

module.exports = Medusa