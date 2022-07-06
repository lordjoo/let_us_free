const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db.sqlite');

function addFeedback(name, email, message) {
    db.run(`
        INSERT INTO feedbacks (name, email, message)
        VALUES (?, ?, ?)
    `, [name, email, message]);
}

function getFeedbacks() {
    return new Promise((resolve, reject) => {
        db.all(`
            SELECT * FROM feedbacks
        `, (err, feedbacks) => {
            if (err) {
                reject(err);
            } else {
                resolve(feedbacks);
            }
        });
    });
}

