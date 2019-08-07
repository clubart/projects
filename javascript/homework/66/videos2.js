/*global $ */
(async () => {
    'use strict';

    $('#showVideo').hide();
    try {
        const response = await fetch('videos2.json');
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const myVideos = await response.json();
        myVideos.forEach(video => {
            const myli = $(`<li>${video.title} <img src="${video.picture}" class="videoPic"></li>`);
            $('#myVideos').append(myli);
            myli.click(() => {
                $('#showVideo').attr('src', video.url).show();
                $('#showVideo')[0].play();
            });
        });
    }
    catch (err) {
        window.pcs.messageBox.show(err, true);
    }
})();