import dbConfig from "../config/db.config";
import mysql from "mysql2/promise";

export const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD
});

// Teste de conexao
// connection.getConnection(function(err){
//     if(err){
//         return console.error('error: ' + err.message);
//     }

//     console.log('Connected to the mysql server!')
// });

