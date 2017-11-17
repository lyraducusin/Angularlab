(function () {
  var taskForm = {
    controller: "FormController",
    templateUrl: "templates/outer-form-template.html"
  }

  angular
    .module("moduleApp")
    .component("taskForm", taskForm);
})();
