var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/data-base');

db.serialize(function() {

  db.run(`CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    nickname TEXT,
    online BOOLEAN
    );`
  );
  
  db.run(`CREATE TABLE IF NOT EXISTS  sala (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_sala TEXT
    );`
  );

  db.run(`INSERT INTO sala (nome_sala)
  SELECT * FROM (SELECT 'Sala Principal') AS tmp
  WHERE NOT EXISTS (
      SELECT nome_sala FROM sala WHERE nome_sala = 'Sala Principal'
  ) LIMIT 1;`);   

  db.run(`CREATE TABLE IF NOT EXISTS  mensagens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER,
    id_sala INTEGER,
    texto TEXT,
    data_envio TEXT
    );`
  );
  
});

db.close();
