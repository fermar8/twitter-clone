import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@/hooks/useAppProvider';
import { ContainerApp } from '@/styles/components/layout';
import Menu from '@/components/layout/menu/Menu';
import Header from '@/components/Header';
import ContentBox from '@/components/ContentBox';
import { Input } from '@/styles/components/form';

const TweetDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  const [comments, setComments] = useState([]);
  const [selectedTweet, setSelectedTweet] = useState({});
  const { user, allTweets } = useContext(AppContext);

  useEffect(() => {
    const findSelected = allTweets.find(tweet => tweet.id === Number(id));
    setSelectedTweet(findSelected);
    console.log('findSelected', findSelected);
    setComments(findSelected.comments);
  }, [allTweets, id]);

  console.log('selectedTweet', selectedTweet);
  console.log('allTweets', allTweets);
  console.log('comments', comments);

  const handleAddComment = (newComment) => {
    const buildComment = {
      username: user.username,
      tag: user.tag,
      content: newComment,
      comments: [],
    }
    const updatedComments = [buildComment, ...comments];
    selectedTweet.comments = updatedComments;
    setComments(updatedComments);
    setSelectedTweet(selectedTweet);

  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddComment(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <ContainerApp>
      <Menu />
      <div>
      <Header text="Tweet" />
        {selectedTweet ? (
          <ContentBox content={selectedTweet} />
        ) : (
          <p>Loading tweet...</p>
        )}

        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index}>
              {index === 0 && (
                <div style={{ marginTop: '16px', borderBottom: '1px solid #808080'}}>
                  <Input
                    type="text"
                    placeholder="Add Comment"
                    onKeyDown={handleKeyDown}
                  />
                </div>
              )}
              <ContentBox content={comment} isComment={true} />
            </div>
          ))
        ) : (
          <><p>No comments for now</p><Input
            type="text"
            placeholder="Tweet your reply"
            onKeyDown={handleKeyDown} /></>
        )}
      </div>
    </ContainerApp>
  );
};

export default TweetDetailPage;