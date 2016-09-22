(function() {
    'use strict';
    angular
        .module('profileApp')
        .factory('userData', ['$http', userData]);

    function userData($http) {
        return {
            getData: function() {
                return $http.get('app/data/data.json');

            }
        }
        // $http.get('app/data/data.json')
        //     .success(function(result) {
        //         obj = result;
        //         console.log(obj);
        //     })
        //     .error(function(result) {
        //         console.log('error');
        //     });
        // console.log(obj);
        //
        // return obj;
    }

})();
