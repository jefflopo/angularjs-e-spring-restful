var app = angular.module('loja', []);

app.controller('personCtrl', function($scope) {
		$scope.firstName = "John";
		$scope.lastName = "Doe";
	}
);

app.controller('namesCtrl', function($scope){
	
	$scope.names = [
		{name:'Jani', country: 'Norway'},
		{name: 'Carl', country: 'Sweden'},
		{name: 'Margareth', country: 'England'},
		{name: 'Hege', country: 'Norway'},
		{name: 'Joe', country: 'Denmark'},
		{name: 'Jeff', country: 'Taguatinga'},
		{name: 'Gustav', country: 'Sweden'}
	];
	
});

app.controller('costCtrl', function($scope){
	$scope.price = 58;
});


app.controller('namesCtrl2', function($scope){
	$scope.names = [
		'Jani',
		'Carl',
		'Margareth',
		'Hege',
		'Joe',
		'Gustav',
		'Jeff',
		'Birgit'
	];
});

app.controller('namesCtrl3', function($scope){
	$scope.names = [
		'Jani',
		'Carl',
		'Margareth',
		'Hege',
		'Joe',
		'Gustav',
		'Jeff',
		'Birgit',
		'Kai'
	];
});

app.controller('namesCtrl4', function($scope){
	$scope.names = [
		{name: 'Jani', country: 'Norway'},
		{name: 'Carl', country: 'Sweden'},
		{name: 'Margareth', country: 'England'},
		{name: 'Jeff', country: 'Taguatinga'},
		{name: 'Birgit', country: 'Denmark'},
		{name: 'Kai', country: 'Norway'}
	];
	$scope.orderByMe = function(x){
		$scope.myOrderBy = x;
	}
});











