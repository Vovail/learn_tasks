(function() {
    angular
        .module("profileApp")
        .controller("resumeCTRL", resumeCTRL);

    // resumeCTRL.$inject = ['userData'];

    function resumeCTRL($http) {
        var vm = this;
        vm.person = {};

        $http.get('app/data/data.json')
            .then(function(result) {
                vm.person = result.data;
                console.log(vm.person);
            }, function() {
                console.log('error');
            })

        // userData.getData().then(function(result) {
        //     vm.person = result.data;
        // }, function() {
        //     console.log('error')
        // });
        vm.dutiesFlag = false;
        vm.toggleDuties = function() {
            vm.dutiesFlag = !vm.dutiesFlag;
        }
    }
})();
