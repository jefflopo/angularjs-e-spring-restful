var app = angular.module('loja', []);

app.config(function($routeProvider) {
	
	$routeProvider
	.when("/", { controller: "listController", templateUrl: "list.html" } )
	.when("/edit/:name", { controller: "editController", templateUrl: "form.html" } )
	.when("/new", { controller: "newController", templateUrl: "form.html" } )
	.otherwise({ redirectTo: "/" });
	
});

app.run(function($rootScope) {
	
	$rootScope.frutas = ['banana', 'melancia', 'pera'];
	
});

app.controller('listController', function() {
	
});

//$scope é o escopo da aplicação html
//$location é o redirecionamento entre rotas
// $routeParams são os parametros repassados pela URL

app.controller('editController', function editController($scope, $location, $routeParams) {
	
	$scope.title = 'Editar Frutas';
	$scope.fruta = $routeParams.name;
	$scope.frutaIndex = $scope.frutas.indexOf($scope.fruta);
	
	$scope.salvar = function() {
		$scope.frutas[$scope.frutaIndex] = $scope.fruta;
		$location.path('/');
	};
	
});

app.controller('newController', function newController($scope, $location) {
	
	$scope.title = 'Nova Fruta';
	$scope.fruta = '';
	
	$scope.salvar = function() {
		$scope.frutas.push($scope.fruta);
		$location.path('/');
	};
	
});









