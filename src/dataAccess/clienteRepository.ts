import { Cliente } from '../models/cliente.js';
import { Repository } from '../shared/repository.js';

const clientes = [
  new Cliente(
    '12345',
    'Leonel Andres Messi',
    341432642,
    'leo.messi@gmail.com',
    'AV Rosario 345',
  ),
]

export class ClienteRepository implements Repository<Cliente> {

  public findAll(): Cliente[] | undefined {
    return clientes
  }

  public findOne(item: { CUIT: string; }): Cliente | undefined {
    return clientes.find((cliente) => cliente.CUIT === item.CUIT)
  }

  public add(item: Cliente): Cliente | undefined {
    clientes.push(item)
    return item
  }

  public update(item: Cliente): Cliente | undefined {
    const clienteIdx = clientes.findIndex((cliente) => cliente.CUIT === item.CUIT)

    if (clienteIdx !== -1) {
      Object.assign(clientes[clienteIdx], item)
    }
    return clientes[clienteIdx]
  }
  public delete(item: { CUIT: string; }): Cliente | undefined {
    const clienteIdx = clientes.findIndex((cliente) => cliente.CUIT === item.CUIT)
    if (clienteIdx !== -1) {
      const clienteBorrado = clientes[clienteIdx]
      clientes.splice(clienteIdx, 1)
      return clienteBorrado
    }

  }
}