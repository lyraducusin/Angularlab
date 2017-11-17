(function () {
    function buttonDirective() {
      return {
        restrict: "A",
        link: function($scope,$element,$attrs){
          $element.on("mouseenter", function () {
            $element.css("background-color", "#ff69b4").css("transition","0.5s");
          });
          $element.on("mouseleave", function() {
            $element.css("background-color", "rgb(247, 191, 202)").css("transition","0.5s");
          });
        }
      };
    }

  angular
    .module("moduleApp")
    .directive("buttonDirective", buttonDirective);
})();
