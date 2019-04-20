var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/data-base');
  
var novaMensagem = (mensagem, callback) => {
	
	db.run(`INSERT INTO mensagens (id_usuario, id_sala, texto, data_envio) 
		VALUES(${mensagem.id_usuario}, ${mensagem.id_sala}, "${mensagem.texto}", DATETIME('now'));`, (err, results) => {
		callback(results)
	})
};

var obterTodasMensagens = (callback) => {

	db.all(`SELECT * from mensagens;`, (err, results) => {
           callback(results);  
	});

};

var obterMensagens = (idSala, callback) => {

	db.all(`SELECT * from mensagens where id_sala = ${idSala}`, (err, results) => {
           callback(results);  
	});

};

module.exports = {
	novaMensagem:novaMensagem,
	obterMensagens:obterMensagens,
	obterTodasMensagens:obterTodasMensagens
}