(function() {
    angular
        .module("profileApp")
        .controller("resumeCTRL", ['$http', resumeCTRL]);

    function resumeCTRL($http) {
        var vm = this;

        $http.get('app/data/data.json')
            .success(function(result) {
                vm.person = result;
            })
            .error(function(result) {
                console.log('error');
            });

        vm.tab = "skills";
        vm.setTab = function(activeTab) {
            vm.tab = activeTab;
        };

        vm.dutiesFlag = false;
        vm.toggleDuties = function() {
            vm.dutiesFlag = !vm.dutiesFlag;
        }
    }
})();
