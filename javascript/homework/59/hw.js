(function () {
    'use strict';
    const button = document.getElementById('button');
    const backroundLabel = document.getElementById('backroundLabel');
    const textLabel = document.getElementById('textLabel');

    button.addEventListener('click', () => {
        let backroundColor = document.getElementById('backroundColor').value;
        let textColor = document.getElementById('textColor').value;
        document.body.style.backgroundColor = backroundColor;
        backroundLabel.style.color = textColor;
        textLabel.style.color = textColor;
    });
}());