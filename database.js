const sqlite3 = require("sqlite3").verbose();

module.exports = function createConnection() {
  const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Database connected.');
  });
      
  return db;
};
