import { cliente } from "./cliente";
import { Compania } from "./compania";
import { Item } from "./item";

export class invoice {
    id!:number;
    name!:string;
    cliente!:cliente;
    compania!:Compania;
    items!: Item[];

    total!:number;
  static items: any;
}