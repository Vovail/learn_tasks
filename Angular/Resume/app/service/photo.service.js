(function() {
    'use strict';
    angular
        .module('profileApp')
        .factory('photoService', photoService);

    function photoService() {

        var countOfSlides = 5;
        var currIndex = 0;
        var photoData = {
            slides: [],
            myInterval: 1500,
            noWrapSlides: false,
            active : Math.random() * countOfSlides ^ 0
        };

        for (var i = 0; i < countOfSlides; i++) {
            addSlide();
        }

        function addSlide() {
            var newWidth = 600 + photoData.slides.length + 1;
            photoData.slides.push({
                image: 'libs/img/photos/' + (currIndex + 1) + '.jpg',
                id: currIndex++
            });
        };

        return photoData;
    }
})()
