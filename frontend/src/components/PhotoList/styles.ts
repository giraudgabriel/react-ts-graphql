import styled from 'styled-components';

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  fit-content: contain;
  flex-wrap: wrap;
  background-color: #f5f5f5;

  img {
    width: 5vh;
    height: 5vh;
    margin: 8px;
  }
`;