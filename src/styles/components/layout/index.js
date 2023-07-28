import styled, { css } from 'styled-components';

const ContainerApp = styled.div`
  width: 1265px;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
  border-left: 1px solid ${props => props.theme.colors.darkGrey};
  border-right: 1px solid ${props => props.theme.colors.darkGrey};
  width: 600px;
  padding: 8px;

  ${({ width, borderLeft, borderRight }) =>
    css`
      width: ${width};
      border-left: ${borderLeft};
      border-right: ${borderRight};
    `}
`;


export { ContainerApp, ContentContainer };