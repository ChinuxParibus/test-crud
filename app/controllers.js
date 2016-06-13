angular.module('crud')

.controller('CrudCtrl', ['$scope', 'DBService', function ($scope, DBService) {
	/* Desarrolle toda la funcionalidad de la aplicación aquí */

	$scope.usuarios = DBService.obtenerTodo();

	$scope.agregar = function (usuario) {
		DBService.incluirUsuario(usuario);

		$scope.usuarios = DBService.obtenerTodo();
	}

	$scope.remover = function (posicion) {
		DBService.excluirUsuario(posicion);

		$scope.usuarios = DBService.obtenerTodo();
	}


}]);