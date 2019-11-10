import $ from 'jquery';

$('#emailInput').on('input', function () {
    $('#emailOutput').text($('#emailInput').val());
});