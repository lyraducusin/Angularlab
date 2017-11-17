(function () {
    function listDirective() {
      return {
        restrict: "A",
        link: function($scope,$element,$attrs){
          $element.on("mouseenter", function () {
            $element.css("background-color", "#bbb").css("transition","0.5s");
          });
          $element.on("mouseleave", function() {
            $element.css("background-color", "white").css("transition","0.5s");
          });
        }
      };
    }

  angular
    .module("moduleApp")
    .directive("listDirective", listDirective);
})();
