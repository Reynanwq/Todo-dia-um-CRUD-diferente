const db = require('../db');

module.exports = {
  buscarTodos: () => {
    return new Promisse((aceito, rejeitado) => {
      db.query('SELECT * FROM carros', (error, results) => {
        if(error) {rejeitado(error); return; }
          aceito(results);
      });
    });
  }
}
