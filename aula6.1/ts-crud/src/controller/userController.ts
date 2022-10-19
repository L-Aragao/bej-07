import { Request, Response } from 'express';
import AccountService from '../service/accountService';

//Podemos criar interfaces para fazer a inversão de dependencia
// export interface IUserController {
//     readAll(req: Request, res: Response): void
//     read(req: Request, res: Response): void
//     create(req: Request, res: Response): void
//     update(req: Request, res: Response): void
//     delete(req: Request, res: Response): void
// }

export default class UserController {
    private accountService: AccountService;

    
    constructor(accountService: AccountService) {
        this.accountService = accountService;
        //binding
        this.readAll = this.readAll.bind(this);
        this.read = this.read.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async readAll(req: Request, res: Response) {
        const users = await this.accountService.findAllAccounts();
        res.status(200).json({ users });
    };

    async read(req: Request, res: Response) {
        let response = await this.accountService.findAccount(req.params.document)
        console.log(response)
        response !== null ? res.json(response) : res.status(404).send({ err: `${req.body.document} NOT FOUND` })
    };

    async create(req: Request, res: Response) {
        await this.accountService.createAccountMail( req.body.nome, req.body.email, req.body.document)
        res.status(201).send();
    }

    async update(req: Request, res: Response) {
        await this.accountService.updateAccount(req.body.document, req.body.nome, req.body.email)
        res.send();
    }

    async delete(req: Request, res: Response) {
        await this.accountService.deleteAccount(req.body.document)
        res.send();
    }
};