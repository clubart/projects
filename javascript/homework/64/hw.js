/* global $ */
(function () {
    'use strict';

    const userInput = $('#fileInput').val();
    const mySpinner = $('<img src="spinner.png"></img>')
        .prependTo($(document.body))
        .css('position', 'fixed')
            .css('top', '50')
            .css('right', '50');
        setTimeout(() => {
            fetch(userInput)
                .then(r => {
                    if (r.ok) {
                        return r.text();
                    } else {
                        throw new Error(r.status);
                    }
                })
                .then(rt => {
                    $('#myPlaceholder').text(rt);
                    //$('body').append(rt);
                    //$('body').text(rt);
                    mySpinner.hide();
                })
                .catch(() => {
                    mySpinner.hide();
                    window.pcs.messageBox.show('could not find file');
                });
        }, 2000);
    });
}());