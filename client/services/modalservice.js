(function() {
  'use strict';

  angular
    .module('app.service',['ui.bootstrap'])
    .service('ModalService', ModalService);

  ModalService.$inject = ['$modal','$filter'];

  function ModalService($modal, $filter) {
    var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: 'services/modal.html'
    };

    var modalOptions = {
        closeButtonText: 'Close',
        actionButtonText: 'OK',
        headerText: 'Proceed?',
        bodyText: 'Perform this action?'
    };

    this.showModal = function (customModalDefaults, customModalOptions) {
        if (!customModalDefaults) customModalDefaults = {};
        customModalDefaults.backdrop = 'static';
        return this.show(customModalDefaults, customModalOptions);
    };

    this.show = function (customModalDefaults, customModalOptions) {
        //Create temp objects to work with since we're in a singleton service
        var tempModalDefaults = {};
        var tempModalOptions = {};

        //Map angular-ui modal custom defaults to modal defaults defined in service
        angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

        //Map modal.html $scope custom properties to defaults defined in service
        angular.extend(tempModalOptions, modalOptions, customModalOptions);

        if (!tempModalDefaults.controller) {
            tempModalDefaults.controller = function ($scope, $modalInstance) {
                $scope.modalOptions = tempModalOptions;
                $scope.card = $scope.modalOptions.card || {};
                $scope.addComment = function(comment) {
                    if(!$scope.card.comments) {
                        $scope.card.comments = [];
                    }
                    $scope.card.comments.push({data: comment, timestamp: ($filter('date')(new Date(), 'dd MMM yyyy')).toUpperCase()});
                }
                $scope.modalOptions.ok = function (result) {
                    if(result && !result.title) {
                        alert('Please give a title for the card');
                        return false;
                    }
                    $modalInstance.close(result);
                };
                $scope.modalOptions.close = function (result) {
                    $modalInstance.dismiss('cancel');
                };
            }
        }

        return $modal.open(tempModalDefaults).result;
    };
  }
})();