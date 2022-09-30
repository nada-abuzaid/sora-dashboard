import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
@media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
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
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    gap: 1rem;
   .col{
    gap: 0rem;
    p {
    font-size: 0.9rem;
  }
   }
  }
}
`;

export { Container, Row };
