var routerModule=angular.module('routerModule',['ui-router']);
routerModule.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'template/home.html',
		controller:function ($scope) {
			$scope.books=['wwe','tt','uu']
		}
	});
	$stateProvider.state('about',{
		url:'/home',
		templateUrl:'template/home.html',
		controller:function ($scope) {
			$scope.books=['wwe','tt','uu']
		}
	})
});