import styled,  { css }  from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  width: 566px;
  height: 52px;
  font-size: 17px;
  font-weight: 700;
  border: none;
  border-radius: 52px;
  cursor: pointer;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

export default Button;