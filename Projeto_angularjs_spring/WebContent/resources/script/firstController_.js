var app = angular.module('loja', []);

app.controller('firstController', function($scope) {
		
		$scope.user = {meuNome : 'Jefferson'};
		
		$scope.contador = 0;
		
		$scope.addContador = function(){
			$scope.contador++;
		};
		
		//$scope.pessoas = [];
		$scope.pessoas = ['Ana', 'Mário', 'José Afonso', 'Jefferson Moreira'];
	}
);