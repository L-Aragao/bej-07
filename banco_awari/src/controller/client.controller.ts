import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ClientService from "../service/client.service";


export default class ClientController{
    private clientService: any;

    constructor(clienteService: any){
        this.clientService = clienteService;
    }

    create = (req: Request, res: Response) => {

    }

    createClient = (req: Request, res: Response) => {

    }

    read = (req: Request, res: Response) => {

    }

    readClient = (req: Request, res: Response) => {

    }

    update = (req: Request, res: Response) => {

    }

    updateClient = (req: Request, res: Response) => {

    }

    delete = (req: Request, res: Response) => {

    }

    deleteClient = (req: Request, res: Response) => {

    }
    

}
