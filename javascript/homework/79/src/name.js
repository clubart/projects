import $ from 'jquery';

$('#nameInput').on('input', function () {
    $('#nameOutput').text($('#nameInput').val());
});