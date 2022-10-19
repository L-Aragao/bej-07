import { Request, Response } from 'express';
import UserService from '../service/user.service';
import { StatusCodes } from 'http-status-codes';


class UserController {
    private userService: UserService;
    constructor(userSerice: UserService) {
        this.userService = userSerice;
    }

    create = async (req: Request, res: Response) => {
        const { nome, email, documento } = req.body;
        const user = await this.userService.create({ nome, email, documento });
        res.status(StatusCodes.CREATED).json(user);
    }

    readAll = async (req: Request, res: Response) => {
        const users = await this.userService.findAll();
        res.status(StatusCodes.OK).json(users);
    }

    readByDocument = async (req: Request, res: Response) => {
        let documento = req.query.document
        if (documento) {
            const users = await this.userService.findByDocument(String(documento));
            res.status(StatusCodes.OK).json(users);
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ err: 'document is missing' })
        }
    }

    readByDocumentParams = async (req: Request, res: Response) => {
        let documento = req.params.document;
        if (documento) {
            const users = await this.userService.findByDocument(String(documento));
            res.status(StatusCodes.OK).json(users);
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ err: 'document is missing' })
        }
    }

    updateByDocument = async (req: Request, res: Response) => {
        const { nome, email, documento } = req.body;
        const document = req.params.document;
        if (document) {
            const users = await this.userService.updateByDocument(document, { nome, email, documento });
            res.status(StatusCodes.OK).json(users);
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ err: 'document is missing' })
        }
    }

    deleteByDocument = async (arg0: string, deleteByDocument: any) => {
        throw new Error('Method not implemented.');
    }
}

export default UserController;