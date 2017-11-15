(function(){
  function FormController(){
    var vm = this;
    vm.list = [];
    vm.addList = function(addItems){
      vm.list.push(addItems);
      vm.addItems = "";
    };

    vm.removeItems = function(index){
      vm.list.splice(index, 1);
    };

  }
  angular
  .module("moduleApp")
  .controller("FormController", FormController);


})();
