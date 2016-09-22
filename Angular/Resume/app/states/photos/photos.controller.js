(function() {
    angular
        .module('profileApp')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    CarouselDemoCtrl.$inject = ['photoService'];

    function CarouselDemoCtrl(photoService) {
        var vm = this;
        vm.myInterval = photoService.myInterval;
        vm.noWrapSlides = photoService.noWrapSlides;
        vm.active = photoService.active;
        vm.slides = photoService.slides;
    }
})()
