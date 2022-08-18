import styled from 'styled-components';

const EmptySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  .title {
    font-family: "DM Serif Text", sans-serif;
    font-size: 2rem;
  }
  .desc {
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.5rem;
  }
  img {
    width: 70%;
    margin-top: 2rem;
  }
`;

export default EmptySection;
