import { Pool, ResultSetHeader } from 'mysql2/promise';
import UserDTO from '../dto/user.dto'

export default class UserRepository {
    connection: Pool;
    
    constructor(connection: Pool) {
        this.connection = connection;
    }
    
    async create(user: UserDTO): Promise<UserDTO> {
        const { nome, email, documento } = user;
        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO Awari.account_users (nome, email, documento) VALUES (?, ?, ?)',
            [nome, email, documento],
        );
        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id: insertId, ...user };
    }

    async findAll(): Promise<UserDTO[]> {
        const result = await this.connection
            .execute('SELECT * FROM Awari.account_users');
        const [rows] = result;
        return rows as UserDTO[];
    }

    async findByDocument(document: string): Promise<UserDTO[]> {
        const result = await this.connection
            .execute('SELECT * FROM Awari.account_users WHERE documento = ?', [document]);
        const [rows] = result;
        return rows as UserDTO[];
    }

    async updateByDocument(document: string, user: UserDTO): Promise<UserDTO[]> {
        const { nome, email, documento } = user
        await this.connection.execute(
            'UPDATE Awari.account_users set nome = ?, email = ?, documento = ? WHERE documento = ?',
            [nome, email, documento, document]
        );
        return await this.findByDocument(user.documento);
    }

}