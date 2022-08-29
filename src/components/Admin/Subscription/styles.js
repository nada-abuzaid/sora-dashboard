import styled from 'styled-components';

const SubscriptionWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 45%;
border-radius: 6px;
font-family: "Nunito Sans", serif;
font-size: 0.9rem;
padding: 0.5rem;
${({ type }) => (type === '1' ? `
background-color: #CEBBC3;
color: #000;
` : `
background-color: #73314F;
color: #fff;
`)}
`;

export default SubscriptionWrapper;
