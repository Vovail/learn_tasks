(function(){
  angular
    .module("profileApp")
    .directive("headerNav", footerContent);

    function footerContent(){
      return {
        restrict:"A",
        templateUrl: "app/directive/header-nav.html"
      }
    }
})();
