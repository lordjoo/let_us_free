const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db.sqlite');

console.log('db.sqlite created');

db.run(`
    CREATE TABLE IF NOT EXISTS feedbacks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        message TEXT
    )
`);

console.log('feedbacks table created');

