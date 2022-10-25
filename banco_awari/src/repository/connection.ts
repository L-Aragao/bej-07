import mysql from "mysql2/promise";
import dBconfig from "../config/db.config";

export const connection = mysql.createPool({
    host: dBconfig.HOST,
    user: dBconfig.USER,
    password: dBconfig.PASSWORD,
})