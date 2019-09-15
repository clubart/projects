/*global $ */

(function () {
    'use strict';

    let dragging;
    let offset;
    let savedParts = [];
    let nextZindex = 1;

    $(document)
        .on('mousedown', '.piece', e => {
            //console.log('down', e);
            dragging = $(e.target);
            offset = { y: e.offsetY, x: e.offsetX };
        }).mousemove(e => {
            if (dragging) {
                //console.log('move', e);
                let position = { top: e.pageY - offset.y, left: e.pageX - offset.x };
                dragging.css(position);
                e.preventDefault();
            }
        }).mouseup(e => {
            console.log('up', e);
            dragging = null;
            if (savedParts.length !== 0) {
                const newPiece = savedParts.every(p => p.part !== e.target.attributes.src.nodeValue);
                if (newPiece) {
                    savePage(e);
                } else {
                    savedParts.forEach(p => {
                        if (e.target.attributes.src.nodeValue === p.part) {
                            p.top = e.pageY - offset.y;
                            p.left = e.pageX - offset.x;
                            localStorage.savedPage = JSON.stringify(savedParts);
                        }
                    });
                }
            } else {
                savePage(e);
            }
        });

    function savePage(e) {
        savedParts.push({ part: e.target.attributes.src.nodeValue, top: e.pageY - offset.y, left: e.pageX - offset.x });
        localStorage.savedPage = JSON.stringify(savedParts);
    }

    if (localStorage.savedPage) {
        savedParts = JSON.parse(localStorage.savedPage);
        savedParts.forEach(p => {
            //p.part.css({ 'top': p.top, 'left': p.left });
        });
    }

}());