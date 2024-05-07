var hrs = 0
var min = 0
var sec = 0
var getHrs = document.querySelector('.hrs')
var getMin = document.querySelector('.min')
var getSec = document.querySelector('.sec')
var interval;
function Start() {
    interval = setInterval(function () {
        sec++
        getSec.innerHTML = sec
        if (sec >= 100) {
            min++
            getMin.innerHTML = min
            sec = 0
        }
        else if (min >= 60) {
            hrs++
            getHrs.innerHTML = hrs
            min = 0
        }
        else if (hrs >= 24) {
            hrs = 0
        }
    }, 10)
    document.getElementById('start').disabled  = true
}
function Stop() {
    clearInterval(interval)
    document.getElementById('start').disabled  = false
}
function Reset() {
    hrs = 0
    min = 0
    sec = 0
    getSec.innerHTML = sec
    getMin.innerHTML = min
    getHrs.innerHTML = hrs




}