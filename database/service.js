/* NO MODIFICAR: Servicio de Angular.js que interactúa con la base de datos del navegador */

angular.module('crud')

.service('DBService', ['$localStorage', function ($localStorage) {

	//Referencia automática
	var self = this;

	// Objeto constructor
	var _usuario = function (u) {
		this.nombre = u.nombre;
		this.edad = u.edad;
		this.sexo = u.sexo;
	}

	// Nombre de la Base de datos
	self.clave = "usuarios";

	// Inicialización automática de la base de datos
	self.usuarios = $localStorage.get(self.clave) ? $localStorage.get(self.clave) : [] ;

	//Actualiza la base de datos
	self.actualizarLista = function () {
		$localStorage.put(self.clave, self.usuarios);
	}

	// Incluye un nuevo registro en la base de datos
	self.incluirUsuario = function (usuario) {
		var data = new _usuario(usuario);
		self.usuarios.push(data);
		self.actualizarLista();
	}

	// Obtener todos los registros de la base de datos
	self.obtenerTodo = function () {
		return self.usuarios;
	}

	// Elimina un registro de la base de datos según su posición
	self.excluirUsuario = function (posicion) {
		self.usuarios = self.usuarios.splice(posicion, 1);
		self.actualizarLista();
	}

}]);

