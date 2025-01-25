
export class Item {
    id!: number;
    nombreProducto!: string;
    precio!: number;
    cantidad!: number;

    total(): number {
        return this.precio * this.cantidad;
    }
}

