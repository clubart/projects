/* global $ */
(function () {
    'use strict';
    const tbody = $('#tbody');

    $('#load').click(() => {
        fetch('contacts.json')
            .then(r => {
                if (r.ok) {
                    return r.json();
                } else {
                    throw new Error(r.status);
                }
            })
            .then(rt => {
                for (let i = 0; i < rt.length; i++) {
                    let contact = rt[i];
                    tbody.append('<tr>');                
                    for (let key in contact) {
                        if (contact.hasOwnProperty(key)) {
                            tbody.append(`<th>${contact[key]}</th>`);
                        }
                    }
                    tbody.append('</tr>');
                }
                })
            .catch(() => window.pcs.messageBox.show('Error could not load contacts'));
    });
}());