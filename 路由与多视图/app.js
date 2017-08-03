
var routeModule=angular.module('routeModule',['ngRoute']);
routeModule.config(function ($routeProvider) {
	$routeProvider.
		when('/addOrder',{templateUrl:'add-order.html', controller:'AddOrderController'}).
		when('/showOrder/:orderId',{templateUrl:'show-order.html', controller:'ShowOrderController'}).
		otherwise({ redirectTo:''})
});
routeModule.controller('ShowOrderController',function ($scope,$routeParams) {
	$scope.order_id=$routeParams.orderId;
});