const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../db/cocktailDB.sqlite');

const Soft = function(alcohol){
    this.softName = soft.name;
}

Soft.getAll = ()=>{
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM SOFTS", (err, results) => {
            if (err) {
                reject(err);
            }
            else{
                resolve(results);
            }
        })
    })
}



module.exports = Soft;