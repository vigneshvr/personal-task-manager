(function() {
  'use strict';

  angular
    .module('app.newList')
    .controller('NewListController', NewListController);

  function NewListController() {
    var vm = this;
    vm.state = "new";
    vm.listname = "";

    vm.getState = getState;

    vm.changeState = changeState;
    vm.addList = addList;

    function addList(listname) {
      if(!listname) {
        alert('Please specify a list name!!');
        return false;
      }
      vm.onAdd({listname: listname});
      vm.state="new";
      vm.listname="";
    }

    function changeState(newState) {
      vm.state = newState;
    }

    function getState() {
      return vm.state;
    }
  }
})();