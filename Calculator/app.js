
function dabaya(e) {
    document.getElementById('inp').value += e
}
function eq() {
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}
function clr() {
    document.getElementById('inp').value = ''
}
function dte() {
    var b = new Date().getDate()
    var a = new Date().getFullYear()
    var add = (`${b}${c}${a}`)
    var monthsName = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (var i = 0; i <= monthsName.length; i++) {
        document.getElementById('inp').value = monthsName[i]
        new Date().getMonth(monthsName[i]) = c
    }
    document.getElementById('inp').value = add
}
function dy() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for (var i = 0; i < days.length; i++) {
        var currentDay = new Date().getDay(i)
        document.getElementById('inp').value = currentDay  
        
    }
}