import { cliente } from "./cliente";
import { Compania } from "./compania";

export class invoice {
    id!:number;
    name!:string;
    cliente!:cliente;
    compania!:Compania;
    items!: invoice[];

}