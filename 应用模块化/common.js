var loginModule=angular.module('loginModule',[]);
loginModule.controller('UserController',function ($scope,$log) {
	$scope.uname='liang';
	$scope.pword='admin'
	$scope.submit=function () {
		alert('登陆')
	}
});
var registerModule=angular.module('registerModule',[]);
loginModule.controller('UserController',function ($scope,$log) {
	$scope.uname='register';
	$scope.pword='admin'
	$scope.submit=function () {
		alert('登陆')
	}
});