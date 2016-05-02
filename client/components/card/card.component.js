(function() {
	angular.module('app.card').component('card', {
		templateUrl: 'components/card/card.html',
		controller: 'CardController',
		controllerAs: 'vm',
		bindings: {
			card: '<',
			onUpdateCard: '&'
		}
	});
})();