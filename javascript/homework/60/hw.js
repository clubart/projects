(function () {
    'use strict';

    let changeColors;
    const theButton = document.getElementById('startStop');
    theButton.addEventListener('click', () => {
        if (!changeColors) {
            changeColors = setInterval(setBodyColor, 1000);
            theButton.innerHTML = 'stop';
        } else {
            clearInterval(changeColors);
            changeColors = 0;
            theButton.innerHTML = 'Start';
        }
    });

    function setBodyColor() {
        colors(document.body, 'backgroundColor');
        colors(document.body, 'color');
        addToTable(document.body.style.backgroundColor, document.body.style.color);
    }

    function colors(element, property) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        element.style[property] = "rgb(" + r + "," + g + "," + b + ")";
    }

    const theTable = document.getElementById('theTable');
    function addToTable(backgroundColor, textColor) {
        let now = new Date();
        const row = theTable.insertRow();
        const timeCell = row.insertCell();
        const backroundColorCell = row.insertCell();
        const textColorCell = row.insertCell();

        timeCell.innerHTML = now.toLocaleString();
        backroundColorCell.innerHTML = backgroundColor;
        textColorCell.innerHTML = textColor;
        row.addEventListener('click', () => {
            document.body.style.backgroundColor = backroundColorCell.innerHTML;
            document.body.style.color = textColorCell.innerHTML;
        });
    }
}());