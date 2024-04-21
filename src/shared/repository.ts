export interface Repository<T> {
  findAll(): T[] | undefined
  findOne(item: { CUIT: string }): T | undefined
  add(item: T): T | undefined
  update(item: T): T | undefined
  delete(item: { CUIT: string }): T | undefined
}