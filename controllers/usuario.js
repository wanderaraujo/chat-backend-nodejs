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

var obterUsuarioById = (usuarioId, callback) => {
	db.all(`SELECT * from usuario where id_sala = ${usuarioId}`, (err, results) => {
        callback(results);  
	});
};

var alterarStatusUsuario = (usuario, callback) => {
	callback(db.run(`UPDATE usuario SET online = ${usuario.status} WHERE id = ${usuario.id_usuario};);`))
};

module.exports = {
	cadastrarUsuario:cadastrarUsuario,
	obterUsuarios:obterUsuarios,
	obterUsuarioById:obterUsuarioById,
	alterarStatusUsuario:alterarStatusUsuario
}