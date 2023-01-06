declare namespace Post {
  type Data = {
    id: string;
    title: string;
    body: string;
    user: User.Data;
    comments: unknown;
  }
}