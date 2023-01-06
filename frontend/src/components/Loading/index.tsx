import { Container } from "./styles";

interface LoadingProps {
  loading: boolean;
}

export function Loading({ loading }: LoadingProps): JSX.Element {
  if (loading) return <Container>Loading...</Container>;
  return <></>;
}
