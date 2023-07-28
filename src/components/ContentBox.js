import styled from 'styled-components';
import { FaRegComment } from 'react-icons/fa';
import { ContentContainer } from '@/styles/components/layout';

const StyledSpan = styled.span`
    color: ${props => props.theme.colors.darkGrey};
    margin-left: 8px;
`

const IconSpan = styled.span`
    color: ${props => props.theme.colors.lightGrey};
    margin-left: 8px;
`

const StyledText = styled.p`
    color: ${props => props.theme.colors.lightGrey};
`

const ContentBox = ({ content }) => {
    return (
        <ContentContainer>
            <span>{content.username}</span><StyledSpan>{content.tag}</StyledSpan>
            <StyledText>{content.content}</StyledText>
            <IconSpan><FaRegComment /></IconSpan>{content.comments && <StyledSpan>{content.comments.length}</StyledSpan>}
        </ContentContainer>
    );
}

export default ContentBox;