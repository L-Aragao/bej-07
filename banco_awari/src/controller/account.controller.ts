import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import AccountService from "../service/account.service";


export default class AccountController{
    private accountService: any;

    constructor(accountService: any){
        this.accountService = accountService;
    }

    create = (req: Request, res: Response) => {

    }

    createAccount = (req: Request, res: Response) => {

    }

    createTransfer = (req: Request, res: Response) => {

    }

    read = (req: Request, res: Response) => {

    }

    readAccount = (req: Request, res: Response) => {

    }

    readBalance = (req: Request, res: Response) => {

    }

    updateDeposit = (req: Request, res: Response) => {

    }

    updateWithdraw = (req: Request, res: Response) => {

    }

}
