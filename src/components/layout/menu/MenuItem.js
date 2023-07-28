import styled from 'styled-components';
import Link from 'next/link';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  justify-content: flex-start;
  gap: 16px;
`;

const Icon = styled.span`
  font-size: 24px;
  text-align: center;
`;

const Text = styled.span`
  font-size: 16px;
`;

const MenuItem = ({ icon, text, route }) => {
  return (
    <Link href={route} style={{textDecoration: 'none', color: 'inherit'}}>
      <StyledDiv>
        <Icon>{icon}</Icon>
        <Text>{text}</Text>
      </StyledDiv>
    </Link>
  );
}

export default MenuItem;