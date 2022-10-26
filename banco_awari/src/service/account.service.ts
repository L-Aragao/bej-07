import AccountDTO from "../interface/account.dto";
import AccountEntity from "../repository/account.entity";
import connection from "../repository/connection";


class AccountService{
    accountEntity: AccountEntity;

    //Estamos ferindo o DI - Injeçao de dependencia
    constructor(){
        this.accountEntity = new AccountEntity(connection);
    }

    createAccount = async (newAccount : AccountDTO) => {
        const account = await this.accountEntity.create(newAccount);
        return [account];
    }

    findAccountById = async (id : AccountDTO["id_conta"]) => {
        const account = await this.accountEntity.findById(id);
        return account;
    }

    // findAccounts = async () => {
    //     const accounts = await this.accountEntity.findAccounts();
    //     return accounts;
    // }

    updateAccount = async (account: AccountDTO) => {
        const updatedAccount = await this.accountEntity.update(account);
        return updatedAccount;
    }

    deleteAccountById = async (account: AccountDTO) => {
        await this.accountEntity.delete(account)
    }

}

export default AccountService;