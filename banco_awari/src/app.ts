import express, { Router } from 'express';
import clientRoute from './route/client.route';
import accountRoute from './route/account.route';
import connection from './repository/connection';
import { ResultSetHeader } from 'mysql2';

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(clientRoute);
app.use(accountRoute);


// const teste = async () => { 
//     const result = await connection.execute<ResultSetHeader>(
//         'INSERT INTO BANCO_AWARI.CLIENTE  (NOME , EMAIL , DOCUMENTO , DATA_NASCIMENTO)  VALUES (?, ?, ?, ?)',
//         ["Mario Bros", "mario@bros.com", "987654321-20", "1983-05-20"]
//     );
//     console.log(result)
//     const [dataInserted] = result;
//     const { insertId }  = dataInserted;
//     console.log({ id_cliente: insertId })
// }

app.listen(3333, () => {
    console.log('O servidor esta Online');
    // teste();
});