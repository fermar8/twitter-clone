import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 172px;
  font-size: 36px;
  font-weight: 700;
  width: 100%;
  height: 762px;
  align-items: center;
`;

const Input = styled.input`
  width: 550px;
  height: 46px;
  font-size: 17px;
  margin-bottom: 2rem;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.lightGrey};
  background-color: ${props => props.theme.colors.darkGrey};
  padding-left: 16px;
  padding-right: 16px;
`;

const TextArea = styled.textarea`
  border: none;
  width: 568px;
  outline: none;
  background: none;
  font-size: 17px;
  color: ${props => props.theme.colors.lightGrey};
  padding-left: 16px;
  padding-right: 16px;
`;

const Label = styled.label`
  display: none;
`;

export { FormContainer, Input, TextArea, Label};