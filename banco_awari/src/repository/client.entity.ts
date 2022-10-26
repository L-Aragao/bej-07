import { Pool, ResultSetHeader } from "mysql2/promise";
import ClientDTO from "../interface/client.dto";
import connection from "./connection"



export default class ClientEntity {
    connection: Pool;

    constructor() {
        this.connection = connection;
    }

    async create(client: ClientDTO): Promise<ClientDTO> {
        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO BANCO_AWARI.CLIENTE  (NOME , EMAIL , DOCUMENTO , DATA_NASCIMENTO)  VALUES (?, ?, ?, ?)',
            [client.nome, client.email, client.documento, client.data_nascimento]
        );
        console.error(result)
        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id_cliente: insertId, ...client };
    }

    async findByDocument(doc: ClientDTO["documento"]): Promise<ClientDTO[]> {
        const result = await this.connection.execute(
            'SELECT * FROM BANCO_AWARI.CLIENTE WHERE DOCUMENTO = ?', [doc]
        );
        const [rows] = result;
        return rows as ClientDTO[];
    }

    async update(client: ClientDTO): Promise<ClientDTO[]> {
        await this.connection.execute<ResultSetHeader>(
            'UPDATE BANCO_AWARI.CLIENTE SET NOME = ?, DATA_NASCIMENTO = ?, EMAIL = ? WHERE ID_CLIENTE = ?',
            [client.nome, client.data_nascimento, client.email, client.id_cliente]
        );
        const updatedClient = await this.findByDocument(client.documento);
        return updatedClient;
    }

    async delete(client: ClientDTO) {
        await this.connection.execute<ResultSetHeader>(
            'DELETE FROM BANCO_AWARI.CONTA_CLIENTE  WHERE ID_CLIENTE = ?',
            [client.id_cliente]
        );
    }

}