declare namespace User {
  type Data = {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address.Data;
    phone: string;
    website: string;
    company: Company.Data;
    posts: Pagination.Data<Post.Data>;
    albums: Pagination.Data<Album.Data>;
    todos: Pagination.Data<Todo.Data>;
  }
}