import { Cliente } from '../models/cliente.entity.js';
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

  public findOne(item: { cuit: string; }): Cliente | undefined {
    return clientes.find((cliente) => cliente.cuit === item.cuit)
  }

  public add(item: Cliente): Cliente | undefined {
    clientes.push(item)
    return item
  }

  public update(item: Cliente): Cliente | undefined {
    const clienteIdx = clientes.findIndex((cliente) => cliente.cuit === item.cuit)

    if (clienteIdx !== -1) {
      Object.assign(clientes[clienteIdx], item)
    }
    return clientes[clienteIdx]
  }
  public delete(item: { cuit: string; }): Cliente | undefined {
    const clienteIdx = clientes.findIndex((cliente) => cliente.cuit === item.cuit)
    if (clienteIdx !== -1) {
      const clienteBorrado = clientes[clienteIdx]
      clientes.splice(clienteIdx, 1)
      return clienteBorrado
    }

  }
}