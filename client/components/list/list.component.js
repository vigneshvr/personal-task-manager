(function() {
	angular.module('app.list').component('list', {
		templateUrl: 'components/list/list.html',
		controller: 'ListController',
		controllerAs: 'vm',
		bindings: {
			list: '<',
			onDelete: '&',
			onUpdate: '&'
		}
	});
})();