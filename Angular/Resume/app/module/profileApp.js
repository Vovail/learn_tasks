(function() {
  'use strict';
    angular
        .module("profileApp", ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/main.html',
                })
                .when('/photos', {
                    templateUrl: 'app/photos.html'
                })
                .when('/feedback', {
                    templateUrl: 'app/feedback.html'
                })
                .otherwise({
                    template: '<h2>ERROR 404. Page does not exist</h2>'
                })
        });
})();
