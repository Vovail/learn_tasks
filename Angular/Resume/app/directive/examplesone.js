(function() {
    angular
        .module("profileApp")
        .directive("examplesOne", examplesOne);

    function examplesOne() {
        return {
            restrict: "E",
            templateUrl: "app/directive/examples-one.html"
        }
    }
})();
