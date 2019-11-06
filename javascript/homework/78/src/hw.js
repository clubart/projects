import './css/hw.css';

import $ from 'jquery';
import Snake from './images/snakehead.png';

$('#button').click(() => {
    const snakeImage = document.createElement('img');
    snakeImage.src = Snake;
    $('#pictureDiv').append(snakeImage);
});
