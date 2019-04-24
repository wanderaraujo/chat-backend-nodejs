var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/data-base');

var checkUsuarioExist = (usuario, callback) => {
	db.all(`SELECT * FROM usuario WHERE nome = "${usuario.nome}" AND nickname = "${usuario.nickname}";`, (err, results) => {
		callback(results);
	});
};

var cadastrarUsuario = (usuario, callback) => {

	db.run(`INSERT INTO usuario (nome, nickname, online)VALUES("${usuario.nome}", "${usuario.nickname}", true);`)

	db.all("SELECT * FROM usuario ORDER BY id DESC LIMIT 1;", (err, results) => {
		callback(results);
	});
};

var obterUsuarios = (callback) => {

	db.all("SELECT * FROM usuario;", (err, results) => {
		callback(results);
	});
};

var obterUsuarioById = (usuarioId, callback) => {
	db.all(`SELECT * FROM usuario WHERE id = ${usuarioId}`, (err, results) => {
		callback(results);
	});
};

var alterarStatusUsuario = (usuario, callback) => {
	
	db.run(`UPDATE usuario SET online = ${usuario.status} WHERE id = ${usuario.id};`)
	db.all(`SELECT * FROM usuario WHERE online = true`, (err, results) => {
		callback(results);
	});
};

var buscarUsuariosOnline = (usuario, callback) => {
	db.all(`SELECT * FROM usuario WHERE online = true`, (err, results) => {
		callback(results);
	});
};

module.exports = {
	checkUsuarioExist: checkUsuarioExist,
	cadastrarUsuario: cadastrarUsuario,
	obterUsuarios: obterUsuarios,
	obterUsuarioById: obterUsuarioById,
	alterarStatusUsuario: alterarStatusUsuario,
	buscarUsuariosOnline: buscarUsuariosOnline
}