import {Pool, ResultSetHeader} from "mysql2/promise";
import AccountDTO from "../interface/account.dto";



export default class AccountEntity{
    connection: Pool;

    constructor(connection: Pool){
        this.connection = connection;
    }

    async create(account: AccountDTO): Promise<AccountDTO> {
        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO BANCO_AWARI.CONTA_CLIENTE  (ID_CLIENTE, TIPO, SALDO) VALUES (?, ?, ?)',
            [account.id_cliente, account.tipo, account.saldo]
        )
        const [dataInserted] = result;
        const { insertId}  = dataInserted;
        return { id_conta: insertId, ...account }
    }

    async findById(id: AccountDTO["id_conta"]): Promise<AccountDTO[]> {
        const result = await this.connection.execute(
            'SELECT * FROM BANCO_AWARI.CONTA_CLIENTE WHERE ID_CONTA = ?', [id]
        );
        const [rows] = result;
        return rows as AccountDTO[];
    }

    async update(account: AccountDTO): Promise<AccountDTO[]> {
        await this.connection.execute<ResultSetHeader>(
            'UPDATE BANCO_AWARI.CONTA_CLIENTE  SET SALDO = ?  WHERE ID_CONTA = ?',
            [account.saldo, account.id_conta]
        );
        const updatedAccount = await this.findById(account.id_conta);
        return updatedAccount;
    }

    async delete(account: AccountDTO) {
        await this.connection.execute<ResultSetHeader>(
            'DELETE FROM BANCO_AWARI.CONTA_CLIENTE  WHERE ID_CONTA  = ?',
            [account.id_conta]
        );
    }

}