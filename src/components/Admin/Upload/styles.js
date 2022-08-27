import styled from 'styled-components';

const P = styled.p`
  font-family: "DM Serif Text", serif;
  font-size: 1.5rem;
`;

const Desc = styled.p`
  font-family: "Nunito Sans", serif;
  font-size: 1.2rem;
`;

const Submit = styled.button`
  background-color: ${({ theme: { colors } }) => colors.secondaryGreen};
  color: ${({ theme: { colors } }) => colors.white};
  width: 20%;
  border: none;
  outline: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  border-radius: 6px;
  padding: 0.7rem;
  cursor: pointer;
  margin-top: 0.5rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  P, Desc, Submit, Div,
};
