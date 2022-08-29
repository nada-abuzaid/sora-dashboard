import styled from 'styled-components';

const P = styled.p`
font-family: "DM Serif Text", serif;
font-size: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;

const Button = styled.button`
outline: none;
padding: 0.8rem 1.3rem;
border-radius: 6px;
width: 50%;
cursor: pointer;
:first-child {
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid #000;
  :hover {
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: bold;
    border: none;
  }
}
:last-child {
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  border: none;
  :hover {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};
    border: 1px solid #000;
    font-weight: bold;
  }
}
`;

const Actions = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
gap: 1.5rem;
`;

export {
  P,
  Button,
  Actions,
};
