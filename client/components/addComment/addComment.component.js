(function() {
	angular.module('app.addComment').component('addComment', {
		templateUrl: 'components/addComment/addComment.html',
		controller: 'AddCommentController',
		controllerAs: 'vm',
		bindings: {
			comment: '<',
			onAdd: '&'
		}
	});
})();