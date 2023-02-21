class Unicorn {
    constructor(name, color) {
      this.name = name;
      this.color = color || 'white';
    }

    isWhite() {
      return false
    }

    says(name) {
      return `**;* ${name} *;**`
    }
  }
  
  module.exports = Unicorn;