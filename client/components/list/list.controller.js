(function() {
  'use strict';

  angular
    .module('app.list')
    .controller('ListController', ListController);

  ListController.$inject = ['ModalService'];

  function ListController(ModalService) {
    var vm = this;

    vm.showModal = showModal;

    vm.updateCard = updateCard;

    function updateCard(card) {
      var idx = vm.list.cards.indexOf(card);
      showModal(idx,card);
    }

    function showModal(idx,card) {
      var addNew = true;
      if(card) {
        addNew=false;
      }

      var modalOptions = {
        closeButtonText: 'Cancel',
        actionButtonText: 'Save',
        headerText: 'Add Card',
        card: card
      }

      ModalService.showModal({}, modalOptions).then(function (newcard) {
        if(addNew) {
          if(newcard) {
            vm.list.cards.push(newcard);
          }
        }
        else {
          if(newcard) {
            vm.list.cards[idx]=newcard;
          }
          else {
            vm.list.cards.splice(idx,1);
          }
        }
      });
    }
  }
})();