(function() {
  'use strict';

  angular
    .module('app.addComment')
    .controller('AddCommentController', AddCommentController);

  function AddCommentController() {
    var vm = this;
    vm.state="new";
    vm.comment=""
    vm.getState = getState;
    vm.changeState = changeState;
    vm.addComment = addComment;

    function getState() {
      return vm.state;
    }

    function addComment(comment) {
      if(!comment) {
        alert('Comment cannot be empty!!');
        return false;
      }
      vm.onAdd({comment: comment});
      vm.state="new";
      vm.comment="";
    }

    function changeState(newState) {
      vm.state = newState;
    }

    function getState() {
      return vm.state;
    }
  }
})();