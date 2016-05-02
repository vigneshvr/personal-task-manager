(function() {
  'use strict';

  angular
    .module('app.board')
    .controller('BoardController', BoardController);

  function BoardController() {
    var vm = this;
    vm.boardname="";
    vm.lists = [];
    vm.isempty=true;

    vm.isEmpty = isEmpty;
    vm.addBoard = addBoard;
    vm.addList = addList;

    vm.deleteList = function(list) {
    var idx = vm.lists.indexOf(list);
      if (idx >= 0) {
        vm.lists.splice(idx, 1);
      }
    }
    function isEmpty() {
      return vm.isempty;
    }
    function addBoard() {
      if(vm.boardname=="") {
        alert('Please spicify a board name!!');
        return false;
      }
      vm.isempty=false;
    }

    function addList(listname) {
      vm.lists.push({title: listname, cards: []});
    }

  }
})();