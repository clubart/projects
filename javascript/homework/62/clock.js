(function () {
    'use strict';

    let d = new Date();
    let hour = d.getHours() % 12 || 12;
    let minute = d.getMinutes();
    let second = d.getSeconds();

    const clockDiv = document.createElement('div');
    clockDiv.style.backgroundColor = 'lightGray';
    clockDiv.style.position = 'fixed';
    clockDiv.style.bottom = '0';
    clockDiv.style.right = '0';
    clockDiv.style.fontSize = '2em';
    clockDiv.style.width = '115px';
    clockDiv.style.textAlign = 'center';
    document.body.appendChild(clockDiv);

    function setTime() {
        if (minute < 10 && second < 10) {
            clockDiv.innerHTML = hour + ":0" + minute + ":0" + second;
        }
        else if (second < 10) {
            clockDiv.innerHTML = hour + ":" + minute + ":0" + second;
        }
        else if (minute < 10) {
            clockDiv.innerHTML = hour + ":0" + minute + ":" + second;
        }
        else {
            clockDiv.innerHTML = hour + ":" + minute + ":" + second;
        }
    }

    setInterval(() => {
        second++;
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            if (hour === 12) {
                hour = 1;
            } else {
                hour++;
            }
            minute = 0;
        }
        setTime();
    }, 1000);
}());