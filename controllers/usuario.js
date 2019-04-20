var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/data-base');
  
var cadastrarUsuario = (usuario, callback) => {
	db.run(`INSERT INTO usuario (nome, nickname)VALUES("${usuario.nome}", "${usuario.nickname}");`, (err, results) => {
		callback(results)
	})
};

var obterUsuarios = (usuario, callback) => {
	
	db.all("SELECT * from usuario;", (err, results) => {
        callback(results);  
	});
};

var obterUsuarioById = (usuario, callback) => {
	
	callback(db.run(`INSERT INTO usuario (nome, nickname)VALUES("${usuario.nome}", "${usuario.nickname}");`))
	db.close();
};

module.exports = {
	cadastrarUsuario:cadastrarUsuario,
	obterUsuarios:obterUsuarios,
	obterUsuarioById:obterUsuarioById
}