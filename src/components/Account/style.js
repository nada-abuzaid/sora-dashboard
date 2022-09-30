import styled from 'styled-components';

const Datastyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  .password {
    input {
      border: none;
      &:focus {
        border: none;
      }
    }
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    p {
      font-family: "Nunito Sans", sans-serif;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`;

const FormStyle = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 2rem;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;
  }
  .first-col {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 40%;
    height: 100%;
    div {
      display: flex;
      flex-direction: column;
      span {
        color: ${(props) => props.theme.colors.primary};
        font-size: 0.7rem;
        font-family: "Nunito Sans", sans-serif;
        font-weight: bold;
      }
      p {
        font-family: "DM Serif Text", sans-serif;
        font-size: 1rem;
      }
      input {
        border: 1px solid #c6c6c6;
        outline: none;
        padding: 0.7rem 0.5rem;
        border-radius: 6px;
        margin-top: 0.5rem;
      }
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      gap: 1rem;
      p {
        text-align: left;
      }
    }
  }
`;

const UpdateButton = styled.button`
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  width: 15%;
  padding: 0.5rem 2rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-top: 0.5rem;
  @media screen and (max-width: 800px) {
    width: 40%;
  }
`;

export { Datastyle, FormStyle, UpdateButton };
