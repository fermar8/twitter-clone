import { useState } from 'react';
import { ContentContainer } from '@/styles/components/layout';
import { TextArea } from '@/styles/components/form';
import Button from '@/styles/components/buttons/Button';

const PostBox = ({ onTweetSubmit }) => {
  const [text, setText] = useState('');

  const handleTweetSubmit = () => {
    onTweetSubmit(text);
    setText('');
  };

  return (
    <ContentContainer>
      <TextArea
        type="text"
        placeholder="What's happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button width="80px" onClick={handleTweetSubmit}>
          Tweet
        </Button>
      </div>
    </ContentContainer>
  );
};

export default PostBox;