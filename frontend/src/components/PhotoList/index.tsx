import { PhotoContainer } from "./styles";

interface PhotoListProps {
  photos: Photo.Data[] | undefined;
}

export function PhotoList({ photos }: PhotoListProps) {
  return (
    <PhotoContainer>
      {photos?.map((photo: Photo.Data | undefined) => (
        <img key={photo?.id} src={photo?.thumbnailUrl} alt={photo?.title} />
      ))}
    </PhotoContainer>
  );
}
