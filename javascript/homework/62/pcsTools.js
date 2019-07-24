window.pcs = window.pcs || {};

window.pcs = function (id) {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, style) {
        element.style[property] = style;
    }

    function getCss(element, property) {
        // return element.style[property];
        return getComputedStyle(element)[property];
    }

    function colors() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    const elem = get(id);
    const myData = {};

    return {
        css: function (property, style) {
            if (arguments.length < 2) {
                return getCss(elem, property);
            }
            setCss(elem, property, style);
            return this;
        },
        hide: function () {
            setCss(elem, 'display', 'none');
            return this;
        },
        show: function () {
            setCss(elem, 'display', 'block');
            return this;
        },
        click: function (callback) {
            elem.addEventListener('click', callback);
            return this;
        },
        changeColors: function (stopColors, flash = 1000) {
            let change = setInterval(function () {
                setCss(elem, 'color', colors());
            }, flash);

            setTimeout(() => clearInterval(change), stopColors);
            return this;
        },

        data: function (key, value) {
            if (arguments.length < 2) {
                return myData[key];
            }
            myData[key] = value;
            return this;
        }
    };
};