var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/data-base');
  
var cadastrarSala = (nomeSala, callback) => {
	
	db.run(`INSERT INTO sala (nome_sala) VALUES("${nomeSala}");`, (err, results) => {
		callback(results)
	})
};

var obterSalas = ( callback) => {

	db.all("SELECT * from sala;", (err, results) => {
        callback(results);  
	});

};

var obterSalaById = (idSala, callback) => {

	db.all(`SELECT * from sala where id = ${idSala}`, (err, results) => {
        callback(results);  
	});

};

module.exports = {
	cadastrarSala:cadastrarSala,
	obterSalas:obterSalas,
	obterSalaById:obterSalaById,
}