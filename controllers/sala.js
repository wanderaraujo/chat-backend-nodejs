var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/data-base');
  
var cadastrarSala = (nomeSala, callback) => {
	
	db.run(`INSERT INTO sala (nome_sala) VALUES("${nomeSala}");`)
	db.all("SELECT * FROM sala;", (err, results) => {
        callback(results);  
	});
};

var obterSalas = ( callback) => {

	db.all("SELECT * FROM sala;", (err, results) => {
        callback(results);  
	});

};


var obterSalaByNome = (nomeSala, callback) => {

	db.all(`SELECT * FROM sala WHERE nome_sala = "${nomeSala}"`, (err, results) => {
		callback(results);  
	});

};

var obterSalaById = (idSala, callback) => {

	db.all(`SELECT * FROM sala WHERE id = ${idSala}`, (err, results) => {
        callback(results);  
	});

};

module.exports = {
	cadastrarSala:cadastrarSala,
	obterSalas:obterSalas,
	obterSalaById:obterSalaById,
	obterSalaByNome:obterSalaByNome
}