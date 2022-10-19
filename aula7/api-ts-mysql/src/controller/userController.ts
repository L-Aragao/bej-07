import { Request, Response } from 'express';
import UserAccountService from '../service/UserAccountService';

//Podemos criar interfaces para fazer a inversão de dependencia
// export interface IUserController {
//     readAll(req: Request, res: Response): void
//     read(req: Request, res: Response): void
//     create(req: Request, res: Response): void
//     update(req: Request, res: Response): void
//     delete(req: Request, res: Response): void
// }

export default class UserController {
    private userAccountService: UserAccountService;


    constructor(userAccountService: UserAccountService) {
        this.userAccountService = userAccountService;
        //binding
        this.create = this.create.bind(this);
        this.readAll = this.readAll.bind(this);
        this.read = this.read.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async readAll(req: Request, res: Response) {
        const users = await this.userAccountService.findAllAccounts();
        res.status(200).json({ users });
    };

    async read(req: Request, res: Response) {
        let response = await this.userAccountService.findAccount(req.params.document)
        response !== null ? res.json(response) : res.status(404).send({ err: `${req.body.document} NOT FOUND` })
    };

    async create(req: Request, res: Response) { 
        const {nome, email, documento} = req.body;
        const user = await this.userAccountService.createUserAccount({nome, email, documento});
        res.status(201).json(user);
    }

    async update(req: Request, res: Response) {
        await this.userAccountService.updateUserAccount(req.body.document, req.body.nome, req.body.email)
        res.send();
    }

    async delete(req: Request, res: Response) {
        await this.userAccountService.deleteUserAccount(req.body.document)
        res.send();
    }
};