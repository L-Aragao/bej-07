import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ClientService from "../service/client.service";


export default class ClientController{
    private clientService: ClientService;

    constructor(clienteService: ClientService){
        this.clientService = clienteService;
    }

    create = (req: Request, res: Response) => {

    }

    // FALTA FAZER as validaçoes dos dados da Requisiçao
    createClient = async(req: Request, res: Response) => {
        try {
            if(!(req.body.nome && req.body.email && req.body.documento && req.body.data_nascimento)) {
                res.status(StatusCodes.BAD_REQUEST).json({err: "Requisiçao Vazia ou faltando dados"});
            }
            else{
                const { nome, email, documento, data_nascimento } = req.body;
                const result = await this.clientService.createClient({ nome, email, documento, data_nascimento });
                res.status(StatusCodes.CREATED).json(result)
            }
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err: error})
        }
    }

    read = (req: Request, res: Response) => {

    }

    // Criar validaçao de usuario nao encontrado
    readClient = async (req: Request, res: Response) => {
        try {
            let documento = req.params.documento || String(req.query.documento) 
            if(documento) {
                console.log(documento)
                const cliente = await this.clientService.findClientByDocument(documento);
                res.status(StatusCodes.ACCEPTED).json(cliente);
            }
            else {
                res.status(StatusCodes.BAD_REQUEST).json({err: "documento nao enviado"});
            }
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err: error})
        }
    }

    update = (req: Request, res: Response) => {

    }

    //Falta criar as validaçoes da requisiçao
    updateClient = async (req: Request, res: Response) => {
        try {
            const { id_cliente, nome, email, documento, data_nascimento } = req.body;
            const result = await this.clientService.updateClient({ id_cliente, nome, email, documento, data_nascimento });
            res.status(StatusCodes.OK).json(result)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err: error})
        }
    }

    delete = (req: Request, res: Response) => {

    }

    deleteClient = (req: Request, res: Response) => {

    }
    

}
