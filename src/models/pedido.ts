export class Pedido {
    constructor (
        public numeroPedido: number,
        public fecha: Date,
        public total: number,
    ) {}
}