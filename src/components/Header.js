import styled  from 'styled-components';
import Link from 'next/link';
import { ContentContainer } from '@/styles/components/layout';


const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
`


const Header = ({ isHome, text }) => {
    return (
        <ContentContainer borderLeft="1px solid #545454" borderRight="1px solid #545454">
            <HeaderDiv>
                {!isHome ? <Link href='/feed' style={{textDecoration: 'none', color: 'inherit'}}><p>  &lt; </p></Link> : null}
                <p>{text}</p>
                <p></p>
            </HeaderDiv>
        </ContentContainer>
    );
}

export default Header;