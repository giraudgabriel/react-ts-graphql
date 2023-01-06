import { Container } from "./styles";

interface ErrorProps {
  error: any;
}

export function Error({ error }: ErrorProps): JSX.Element {
  console.error("An error has occurred", error);
  return <Container>An error has occurred</Container>;
}
