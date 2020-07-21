/*global $ */
(/*async*/ () => {
    'use strict';

    /*try {
        const response = await fetch('flickr.json');
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const myPics = await response.json();
        myPics.items.forEach(picture => {
            const pic = $(`<h3>${picture.title}</h3> <img src="${picture.media.m}">`);
            $("#pictures").append(pic);
        });

    }
    catch (err) {
        console.log(err);
    }*/

    const tagText = $('#tagText');
    const picButton = $('#button');
    const pictureDiv = $("#pictures");
    const seeAllButton = $('#seeAllButton');
    const allPicsDiv = $('#allPics');
    const picDisplay = $('#picDisplay');
    const picTitle = $('#picTitle');
    const numOfPic = $('#numOfPic');
    let picIndex = 0;

    picButton.click(() => {
        $('#category').text(`you are viewing pictures of ${tagText.val()}`);
        seeAllButton.prop('disabled', false);
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${tagText.val()}&format=json&jsoncallback=?`)
            .done(picture => {
                allPicsDiv.hide();
                pictureDiv.show();
                picIndex = 0;
                tagText.val('');
                picTitle.text(picture.items[picIndex].title);
                picDisplay.attr('src', picture.items[picIndex].media.m);
                indexOfPic();
                $('#rightArrow').click(() => {
                    if (++picIndex === picture.items.length) {
                        picIndex = 0;
                    }
                    picTitle.text(picture.items[picIndex].title);
                    picDisplay.attr('src', picture.items[picIndex].media.m);
                    indexOfPic();
                });
                $('#leftArrow').click(() => {
                    if (--picIndex < 0) {
                        picIndex = picture.items.length - 1;
                    }
                    picTitle.text(picture.items[picIndex].title);
                    picDisplay.attr('src', picture.items[picIndex].media.m);
                    indexOfPic();
                });

                seeAllButton.click(() => {
                    pictureDiv.css('display', 'none');
                    allPicsDiv.show();
                    picture.items.forEach(pics => {
                        const pic = $(`<div><h4>${pics.title}</h4> <img src="${pics.media.m}"><div/>`);
                        allPicsDiv.append(pic);
                    });
                });

                function indexOfPic() {
                    numOfPic.text(`${picIndex + 1} / ${picture.items.length}`);
                }
            });
    });
})();