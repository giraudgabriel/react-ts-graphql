import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  fit-content: contain;
  flex-wrap: wrap;
  background-color: #f5f5f5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 48vh;
  height: 24vh;
  background-color: gray;
  border: 1px solid #3a3a3a;
  margin: 16px;
`;

export const Title = styled.h3`
  font-size: 14px;
  max-width: 40vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #3a3a3a;
  line-height: 56px;
  margin: 16px;
`;  