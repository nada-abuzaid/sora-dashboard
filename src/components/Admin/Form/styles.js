import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
`;

const Row = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 1.5rem;
.col {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  height: 6rem;
  max-height: 100%;
  p {
    font-size: 1.2rem;
  }
  input, select {
    width: 90%;
    max-height: 100%;
    max-width: 90%;
    padding: 0.8rem;
  }
}
`;

export { Container, Row };
