function clock(){
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours() % 12 || 12;
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;


}

var interval = setInterval(clock, 1);