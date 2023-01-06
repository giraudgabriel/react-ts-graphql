import { gql } from "@apollo/client";

const albums = gql`
{
  albums {
    data {
      id
      title
      user {
        name
      }
      photos(options: { paginate: { limit: 5 }}) {
        data {
          id 
          thumbnailUrl
        }
      }
    }
  }
}
`
export const ALBUM_GQL = {
  albums
};