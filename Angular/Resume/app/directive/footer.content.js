(function(){
  angular
    .module("profileApp")
    .directive("footerContent", footerContent);

    function footerContent(){
      return {
        restrict:"A",
        templateUrl: "app/directive/footer-content.html"
      }
    }
})();
