declare namespace Album {
  type Data = {
    id: string;
    title: string;
    user: User.Data;
    photos: Pagination.Data<Photo.Data[]>;
  }
}