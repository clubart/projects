import $ from 'jquery';

$('#ageInput').on('input', function () {
    $('#ageOutput').text($('#ageInput').val());
});