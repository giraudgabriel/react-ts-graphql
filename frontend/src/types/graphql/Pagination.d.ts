declare namespace Pagination {
  type Data<T> = {
    data: T;
    links: Links;
    meta: MetaData;
  }

  type LimitPair = {
    page: number;
    limit: number;
  }

  type MetaData = {
    totalCount: number;
  }

  type Links = {
    first: LimitPair;
    last: LimitPair;
    prev: LimitPair;
    next: LimitPair;
  }
}