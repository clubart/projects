/*global $*/

(function () {
    'use strict';

    function showInfo(newContact) {
        //document.body.append(`${newContact.firstName} ${newContact.lastName} ${newContact.address}`);
        $('#firstName').append($('#first').val());
        $('#lastName').append($('#last').val());
        $('#addressText').append($('#address').val());
    }

    $('#checkBox').click(() => {
        if ($('#checkBox')[0].checked === false /*document.getElementById("checkBox").checked === false*/) {
            //$('#addButton')[0].disable = true;
            $('#addButton').prop('disabled', true);
        } else {
            // document.getElementById("addButton").disabled = false;
            //$('#addButton')[0].disabled = false;
            $('#addButton').prop('disabled', false);
        }

    });

    const firstNameInput = $('#first');
    const lastNameInput = $('#last');
    const addressInput = $('#address');
    const contactForm = $('#contactForm');

    contactForm.submit(event => {
        const newContact = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            address: addressInput.val(),
        };

        showInfo(newContact);
        hideContactForm();

        event.preventDefault();
    });

    function hideContactForm() {
        //contactForm.hide();
        contactForm.slideUp('fast'); // 5000);
        contactForm[0].reset();
    }

    $('#cancel').click(() => {
        hideContactForm();
    });

    $('#addContact').click(() => {
        //contactForm.show();
        contactForm.slideDown('slow');
    });


}());