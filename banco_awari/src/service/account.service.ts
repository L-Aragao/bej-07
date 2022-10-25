import AccountDTO from "../interface/account.dto"

class AccountService{
    accountEntity: any;

    constructor(){
        this.accountEntity = 'Instanciar a entidade';
    }

    createAccount = async (newAccount : AccountDTO) => {
        const account = await this.accountEntity.create(newAccount);
        return [account];
    }

    findAccountById = async (id : Number) => {
        const account = await this.accountEntity.findById(id);
        return [account];
    }

    findAccounts = async () => {
        const accounts = await this.accountEntity.findAccounts();
        return accounts;
    }

    updateAccount = async (account: AccountDTO) => {
        const updatedAccount = await this.accountEntity.update(account);
        return updatedAccount;
    }

    deleteAccountById = async (account: AccountDTO) => {
        await this.accountEntity.delete(account.id)
    }

}

export default AccountService;