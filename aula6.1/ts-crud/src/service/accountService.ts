import AccountDTO from '../DTOs/AccountDTO'

//Podemos criar interfaces para fazer a inversão de dependencia

// export interface IAccountService {
//     createAccountMail(name: string, email: string, document: string): unknown;
//     deleteAccount(document: string): unknown;
//     updateAccount(document: string, name: string, email: string): unknown;
//     sendMail(to: { name: string; email: string; }, message: { subject: string; body: string; }): unknown;
//     findAccount(document: string): unknown;
//     findAllAccounts(): unknown;
// }

export default class AccountService {
    private users: AccountDTO[];

    constructor() {
        this.users = [
            { nome: 'Luiz', email: 'luiz@luiz', document: '987654321-10' },
            { nome: 'teste', email: 'teste@teste', document: '987654321-99' }]
    }

    async createAccountMail(name: string, email: string, document: string) {
        console.log()
        this.users.push({ nome: name, email: email, document: document })
    }

    async deleteAccount(document: string) {
        this.users = this.users.filter(user => user.document !== document);
    }

    async updateAccount(document: string, name: string, email: string) {
        let index = this.users.findIndex(obj => obj.document == document);
        console.log(this.users[index])
        if (index != -1) {
            if (name) this.users[index].nome = name
            if (email) this.users[index].email = email
        }
    }

    sendMail(to: { name: string; email: string; }, message: { subject: string; body: string; }) { }

    async findAccount(document: string) {
        return this.users.find(obj => obj.document == document);
    }

    async findAllAccounts() { return this.users }
}
