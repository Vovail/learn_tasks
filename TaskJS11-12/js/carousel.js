(function($) {
    $.fn.carousel = function(showImgCount, maxWidthOfImg) {
        var hider = $(".carousel-hider");
        var leftArrow = $(".carousel-arrow-left");
        var rightArrow = $(".carousel-arrow-right");
        var arrowHeight = leftArrow.outerHeight();
        var carouselList = $(".carousel-list");
        var imgContainer = carouselList.find('li');
        if (maxWidthOfImg) {
          imgContainer.find('img').css('max-width', maxWidthOfImg);
        }
        var widthOfPicture = imgContainer.outerWidth(true);
        var heightOfPicture = imgContainer.outerHeight();
        leftArrow.css('margin-top', heightOfPicture / 2 - arrowHeight / 2);
        rightArrow.css('margin-top', heightOfPicture / 2 - arrowHeight / 2);
        var picturesCount = imgContainer.length;
        var maxWidth = picturesCount * widthOfPicture;
        showImgCount = showImgCount || 4;
        hider.width(showImgCount * widthOfPicture);
        var visibleWidth = showImgCount * widthOfPicture;
        var currentLeftValue = 0;

        leftArrow.click(function() {
            currentLeftValue -= widthOfPicture;
            if (currentLeftValue < -maxWidth + visibleWidth) {
                currentLeftValue = -maxWidth + visibleWidth;
                carouselList.animate({
                    left: -maxWidth + visibleWidth - widthOfPicture / 3 + "px"
                }, 250);
                carouselList.animate({
                    left: -maxWidth + visibleWidth + "px"
                }, 250);
                return;
            }
            carouselList.animate({
                left: currentLeftValue + "px"
            }, 300);
        });

        rightArrow.click(function() {
            currentLeftValue += widthOfPicture;
            if (currentLeftValue > 0) {
                currentLeftValue = 0;
                carouselList.animate({
                    left: widthOfPicture / 3 + "px"
                }, 250);
                carouselList.animate({
                    left: 0 + "px"
                }, 250);
                return;
            }
            carouselList.animate({
                left: currentLeftValue + "px"
            }, 300);
        });
        return this;
    };
})(jQuery);
