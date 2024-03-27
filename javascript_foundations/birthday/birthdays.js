function createBirthday(name, month, day) {
    return {
        name: name,
        month: month,
        day: day,
    }
}

function celebrateBirthday(person) {
    return `Today is ${person.month}/${person.day}! Happy birthday, ${person.name}!`
}

function countBirthdays(birthday, month) {
    var monthCount = 0
    for (var i = 0; i < birthday.length; i++) {
        if (birthday[i].month === month) {
            monthCount += 1
        }
    }
    return monthCount
}

module.exports = { 
    createBirthday, 
    celebrateBirthday, 
    countBirthdays 
};