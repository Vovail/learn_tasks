(function() {
    'use strict';
    angular
        .module("profileApp", ['ui.router'])
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main/home');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/main.html'
            })
            .state('main.home', {
                url: '/home',
                templateUrl: 'app/states/home.html',
                controller: 'resumeCTRL as ctrl'
            })
            .state('main.photo', {
                url: '/photo',
                templateUrl: 'app/states/photos.html'
            })
            .state('main.feedback', {
                url: '/feedback',
                templateUrl: 'app/states/feedback.html'
            });
    }
})();
