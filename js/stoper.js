var ss = document.getElementsByClassName('stoper');
var lap = document.getElementsByClassName('lap');
var laps = document.getElementsByClassName('stoper__laps');


[].forEach.call(ss, function (s) {
    var currentTimer = 0;
    var interval = 0;
    var lastUpdateTime = new Date().getTime();
    var start = s.querySelector('button.start');
    var stop = s.querySelector('button.stop');
    var reset = s.querySelector('button.reset');
    var mins = s.querySelector('span.minutes');
    var sec = s.querySelector('span.seconds');
    var msec = s.querySelector('span.milseconds');
    var lap = s.querySelector('button.lap');
    var laps = s.querySelector('ul.stoper__laps');
    var clear = s.querySelector('button.clear');

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);
    lap.addEventListener('click', lapTimer);
    clear.addEventListener('click', clearTimer);


    function pad (n) {
        return ('00' + n).substr(-2);
    }

    function update () {
        var now = new Date().getTime();
        var dt = now - lastUpdateTime;

        currentTimer += dt; 

        var time = new Date(currentTimer);

        mins.innerHTML = pad(time.getMinutes());
        sec.innerHTML = pad(time.getSeconds());
        msec.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));
        lastUpdateTime = now;
    }

    function startTimer () {
        if (!interval) {
            lastUpdateTime = new Date().getTime();
            interval = setInterval(update, 1);
        }
    }

    function stopTimer () {
        clearInterval(interval);
        interval = 0;
    }

    function resetTimer () { 
        stopTimer();
        currentTimer = 0;
        mins.innerHTML = sec.innerHTML = msec.innerHTML = pad(0);
        laps.innerHTML = '';
    }

    function lapTimer () {
        laps.innerHTML += "<li>" + mins.innerHTML + " : " + sec.innerHTML + ' : ' + msec.innerHTML + "</li>";
    }

    function clearTimer () {
        laps.innerHTML = '';
    }

});