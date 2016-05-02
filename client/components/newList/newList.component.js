(function() {
	angular.module('app.newList').component('newList', {
		templateUrl: 'components/newList/newList.html',
		controller: 'NewListController',
		controllerAs: 'vm',
		bindings: {
			listname: '<',
			onAdd: '&'
		}
	});
})();