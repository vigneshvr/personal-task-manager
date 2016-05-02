(function() {
  'use strict';

  angular
    .module('app.card')
    .controller('CardController', CardController);

  function CardController() {
    var vm = this;

    /*vm.showModal = showModal;

    function showModal(card) {
      var addNew = true;
      if(card) {
        addNew=false;
      }

      var modalOptions = {
        closeButtonText: 'Cancel',
        actionButtonText: 'Save',
        headerText: 'Add Card'
      }

      ModalService.showModal({}, modalOptions).then(function (card) {
        console.log(result.name);
      });
    }*/
  }
})();