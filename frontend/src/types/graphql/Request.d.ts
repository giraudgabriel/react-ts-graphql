declare namespace RequestInfo {
  type Data<T> = {
    [key: string]: {
      data: T
    }
  }
}