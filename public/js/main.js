angular.module('ifsp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
	
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	});

	$routeProvider.when('/contato/:contatoId', {
    	templateUrl: 'partials/contato.html', 
    	controller: 'ContatoController'
    });

    $routeProvider.when('/cursos', {
		templateUrl: 'partials/cursos.html',
		controller: 'CursosController'
	});

	$routeProvider.when('/curso/:contatoId', {
    	templateUrl: 'partials/curso.html', 
    	controller: 'CursoController'
    });   

	$routeProvider.when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });


    $routeProvider.otherwise({redirectTo: '/contatos'});

	

});