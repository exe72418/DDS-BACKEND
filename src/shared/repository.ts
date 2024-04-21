export interface Repository<T> {
  findAll(): T[] | undefined
  findOne(item: T): T | undefined
  add(item: T): T | undefined
  update(item: T): T | undefined
  delete(item:T): T | undefined
} 