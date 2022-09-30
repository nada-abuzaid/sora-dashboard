import styled from 'styled-components';

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldStyle = styled.div`
  position: relative;
  ${(props) => (!props.error
    ? `
  .form__input  {
    border: 1px solid #DA1E28 !important;
  }
  .form__label{
    color: #DA1E28 !important;
  }
  `
    : 'border: none;')}
  .form__input {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #c6c6c6;
    border-radius: 5px;
    outline: none;
    padding: 1rem;
    font-family: 'Nunito Sans', sans-serif;
  }
  .form__label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: ${({ theme: { colors } }) => colors.primaryDark};
    cursor: text;
    transition: all 200ms ease-in;
    background-color: white;
    font-family: 'Nunito Sans', sans-serif;
  }
  .form__input:focus + .form__label,
  .form__input:valid + .form__label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
    padding: 0 0.4rem;
    transition: all 200ms ease-in;
  }
`;

const SubmitStyle = styled.div`
  .btn {
    width: 100%;
    padding: 0.7rem;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

const TextErrorStyle = styled.div`
  color: ${({ theme: { colors } }) => colors.error};
  font-size: 0.9rem;
  font-family: "Nunito", sans-serif;
`;

export {
  FieldStyle, SubmitStyle, TextErrorStyle, FieldWrapper,
};
