(function() {
    angular
        .module("profileApp")
        .controller("resumeCTRL", resumeCTRL);

    resumeCTRL.$inject = ['userData'];

    function resumeCTRL(userData) {
        var vm = this;
        vm.person = userData;
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
