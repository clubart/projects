/* global google */

window.initMap = function () {
    'use strict';
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    let mapObjects = [];
    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        if (event.type === 'marker') {
            mapObjects.push({ position: event.overlay.position, type: 'marker' });
            localStorage.markerPlaces = JSON.stringify(mapObjects);
        }
        if (event.type === 'circle') {
            mapObjects.push({ center: event.overlay.center, radius: event.overlay.radius, type: 'circle' });
            localStorage.markerPlaces = JSON.stringify(mapObjects);
        }
    });

    if (localStorage.markerPlaces) {
        mapObjects = JSON.parse(localStorage.markerPlaces);
        mapObjects.forEach(place => {
            if (place.type === 'marker') {
                new google.maps.Marker({
                    position: place.position,
                    map: map
                });
            }
            if (place.type === 'circle') {
                new google.maps.Circle({
                    center: place.center,
                    radius: place.radius,
                    map: map
                });
            }
        });
    }
};