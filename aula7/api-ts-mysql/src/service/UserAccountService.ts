import UserAccountDTO from '../dto/UserAccountDTO'
import UserAccountEntity from '../repository/UserAccountEntity';
import { connection } from '../repository/connection';

//Podemos criar interfaces para fazer a inversão de dependencia

// export interface IAccountService {
//     createAccountMail(name: string, email: string, document: string): unknown;
//     deleteAccount(document: string): unknown;
//     updateAccount(document: string, name: string, email: string): unknown;
//     sendMail(to: { name: string; email: string; }, message: { subject: string; body: string; }): unknown;
//     findAccount(document: string): unknown;
//     findAllAccounts(): unknown;
// }

export default class UserAccountService {
    public userEntity: UserAccountEntity

    constructor() {
        this.userEntity = new UserAccountEntity(connection)
    }

    async createUserAccount(newUserAccount: UserAccountDTO): Promise<UserAccountDTO[]> {
        let user = await this.userEntity.create(newUserAccount)
        return [user]
    }

    async deleteUserAccount(document: string) {
        try {
            new UserAccountEntity(connection).deleteByDocument(document)
        } catch (error) {
            throw new Error(String(error))
        }
    }

    async updateUserAccount(document: string, name: string, email: string) {
        try {
            let user: UserAccountDTO = { nome: name, email: email, documento: document }
            new UserAccountEntity(connection).updateAll(user)
        } catch (error) {

        }
    }

    async findAccount(document: string) {
        return await new UserAccountEntity(connection).findByDocument(document)
    }

    async findAllAccounts() {
        const result = await new UserAccountEntity(connection).findAll()
        return result
    }
}
