(function () {
  var taskList = {
    controller: "FormController",
    templateUrl: "templates/inner-form-component.html"

  }

  angular
    .module("moduleApp")
    .component("taskList", taskList);
})();
