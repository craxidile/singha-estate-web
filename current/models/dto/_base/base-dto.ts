export default interface BaseDto<T, U> {

  create(input: T): Promise<T | null>;
  list(query?: U, take?: number, skip?: number): Promise<T[]>;
  find(id: string): Promise<T | null>;
  update(id: string, input: T): Promise<T | null>;
  remove(id: string): Promise<T | null>;

}
