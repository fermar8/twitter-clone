import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import withAuth from '@/hocs/withAuth';
import { AppContext } from '@/hooks/useAppProvider';
import Menu from '@/components/layout/menu/Menu';
import ContentBox from '@/components/ContentBox';
import Header from '@/components/Header';
import PostBox from '@/components/PostBox';
import { ContainerApp } from '@/styles/components/layout';


function Feed() {
  const { user, allTweets, setAllTweets } = useContext(AppContext);

  const handleTweetSubmit = (text) => {
    const newTweet = { 
      id: allTweets.length + 1, 
      username: user.username, 
      tag: user.tag, 
      content: text, 
      comments: [] 
    }
    setAllTweets([newTweet, ...allTweets]);
  };

  return (
    <>
      <Head>
        <title>Feed</title>
        <meta name="description" content="Feed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerApp>
        <Menu />
        <main>
          <Header isHome={true} text="Home" />
          <PostBox onTweetSubmit={handleTweetSubmit} />
          {allTweets.length > 0 ? (
            allTweets.map((tweet, index) => 
            <Link key={tweet.id} href={`/feed/tweet/${tweet.id}`} style={{ textDecoration: 'none', color: 'inherit' }} passHref>
            <ContentBox key={index} content={tweet} />
            </Link>
            )
          ) : (
            <p>Loading twits...</p>
          )}
        </main>
      </ContainerApp>
    </>
  );
}

export default withAuth(Feed);