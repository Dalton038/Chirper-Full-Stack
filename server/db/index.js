import * as mysql from 'mysql';

import Chirps from './chirps.js'

export const Connection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'root',
password: 'Dalton7113',
database: 'c16_chirpr'
});

export const Query = (query, values) => {

    return new Promise ((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        })
    })
}

export default {
Chirps
    }