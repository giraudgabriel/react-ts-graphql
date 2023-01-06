declare namespace Photo {
  type Data = {
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
    album: Album.Data;
  }
}