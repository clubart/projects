/* global $, google */
(function () {
    'use strict';

    const searchButton = $('#searchButton');
    const userInput = $('#userInput');
    const results = $('#results');
    let map;


    function createMap() {
        map = new google.maps.Map(document.getElementById('showMap'), {
            center: { lat: 40.096068191437205, lng: -74.222168870743332 },
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }

    function createMarkers(city) {
        let marker = new google.maps.Marker({
            position: { lat: city.lat, lng: city.lng },
            map: map,
            title: city.title,
        });
        let infoWindow = new google.maps.InfoWindow();
        marker.addListener('click', () => {
            infoWindow.setContent(city.summary);
            infoWindow.open(map, marker);
        });
    }

    searchButton.click(() => {
        results.empty();
        fetch(`http://api.geonames.org/wikipediaSearch?q=${userInput.val()}&maxRows=10&username=clubart&type=json`)
            .then(r => {
                if (r.ok) {
                    return r.json();
                } else {
                    throw new Error(r.status);
                }
            })
            .then(cities => {
                createMap();
                cities.geonames.forEach(city => {
                    results.append(`<h4>${city.title}</h4> <img src="${city.thumbnailImg}">`)
                        .click(rt => {

                        });
                    createMarkers(city);
                });
            });
    });
}());