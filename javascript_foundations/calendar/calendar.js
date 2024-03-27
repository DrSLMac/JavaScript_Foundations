function createEvent(event, month, day) {
    var daysOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31]



    return {
        title: event,
        month: month,
        day: day,
    }
}

function createCalendar() {

}

function reportMonthlyEvents() {
    
}

module.exports = { 
    createEvent, 
    createCalendar, 
    reportMonthlyEvents 
};