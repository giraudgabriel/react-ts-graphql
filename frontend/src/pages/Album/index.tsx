import { PhotoList } from "@/components/PhotoList";
import { Error } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { ALBUM_GQL } from "@/graphql/album";
import { useQuery } from "@apollo/client";
import { Container, Content, Title } from "./styles";

export const Album = () => {
  const { data, loading, error } = useQuery<RequestInfo.Data<Album.Data[]>>(
    ALBUM_GQL.albums
  );

  if (loading) return <Loading loading={loading} />;
  if (error) return <Error error={error} />;

  return (
    <Container>
      {data?.albums.data.map((album: Album.Data | undefined) => (
        <Content key={album?.id}>
          <Title>
            #{album?.id} - {album?.title}
          </Title>
          <PhotoList photos={album?.photos?.data} />
        </Content>
      ))}
    </Container>
  );
};
