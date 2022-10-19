import { Pool, ResultSetHeader } from 'mysql2/promise';
import UserAccountDTO from '../dto/UserAccountDTO';


export default class AccountEntity {

    connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    async create(accountUser: UserAccountDTO): Promise<UserAccountDTO> {
        const { nome, email, documento } = accountUser;
        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO Awari.account_users (nome, email, documento) VALUES (?, ?, ?)',
            [nome, email, documento],
        );
        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id: insertId, ...accountUser };
    }

    async findById(id: number): Promise<UserAccountDTO[]> {
        const result = await this.connection
            .execute('SELECT * FROM Awari.account_users WHERE id = ?', [id]);
        const [rows] = result;
        return rows as UserAccountDTO[];
    }

    async findByDocument(document: string): Promise<UserAccountDTO[]> {
        const result = await this.connection
            .execute('SELECT * FROM Awari.account_users WHERE documento = ?', [document]);
        const [rows] = result;
        return rows as UserAccountDTO[];
    }

    async findAll(): Promise<UserAccountDTO[]> {
        const result = await this.connection.execute('SELECT * FROM Awari.account_users')
        const [rows] = result;
        return rows as UserAccountDTO[];
    }

    async updateAll(accountUser: UserAccountDTO): Promise<UserAccountDTO[]> {
        const { nome, email, documento } = accountUser
        const result = await this.connection.execute<ResultSetHeader>(
            'UPDATE Awari.account_users set (nome, email) VALUES (?, ?) where documento = ?',
            [nome, email, documento]
        );
        return await this.findByDocument(accountUser.documento);
    }

    async updateUserName(document:string, name:string): Promise<UserAccountDTO[]> {
        await this.connection.execute(
            'UPDATE Awari.account_users SET nome = ? WHERE documento = ?',
            [name, document]
        );
        return await this.findByDocument(document);
    }

    async updateUserEmail(document:string, email:string): Promise<UserAccountDTO[]> {
        const result = await this.connection.execute(
            'UPDATE Awari.account_users SET email = ? WHERE documento = ?',
            [email, document]
        );
        return await this.findByDocument(document);
    }

    deleteByDocument(document: string) {
        throw new Error('Method not implemented.');
    }
}