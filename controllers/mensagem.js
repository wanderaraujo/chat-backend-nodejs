var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/data-base');
  
var novaMensagem = (mensagem, callback) => {

	db.run(`INSERT INTO mensagens (id_usuario, nome, nickname, id_sala, texto, data_envio) 
		VALUES(${mensagem.id_usuario}, "${mensagem.nome}", "${mensagem.nickname}", ${mensagem.id_sala}, "${mensagem.texto}", "${mensagem.data_envio}");`, (err, results) => {
		callback(results)
	})
};

var obterTodasMensagens = (callback) => {

	db.all(`SELECT * from mensagens;`, (err, results) => {
           callback(results);  
	});

};

var obterMensagensBySala = (idSala, callback) => {

	db.all(`SELECT * from mensagens where id_sala = ${idSala}`, (err, results) => {
           callback(results);  
	});

};

module.exports = {
	novaMensagem:novaMensagem,
	obterTodasMensagens:obterTodasMensagens,
	obterMensagensBySala:obterMensagensBySala
}