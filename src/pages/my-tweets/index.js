import Head from 'next/head';
import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import withAuth from '@/hocs/withAuth';
import { AppContext } from '@/hooks/useAppProvider';
import Menu from '@/components/layout/menu/Menu';
import ContentBox from '@/components/ContentBox';
import Header from '@/components/Header';
import { ContainerApp } from '@/styles/components/layout';


function MyTweets() {

  const [userTweets, setUserTweets] = useState([]);
  const { user, allTweets } = useContext(AppContext);

  useEffect(() => {
    const findUserTweets = allTweets.filter(tweet => tweet.username === user.username);
    setUserTweets(findUserTweets)
  }, [allTweets, user.username]);

  return (
    <>
      <Head>
        <title>Feed</title>
        <meta name="description" content="My Tweets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerApp>
        <Menu />
        <main>
          <Header text="Mis Tweets" />
          {userTweets.length > 0 ? (
            userTweets.map((tweet, index) => 
            <Link key={tweet.id} href={`/feed/tweet/${tweet.id}`} style={{ textDecoration: 'none', color: 'inherit' }} passHref>
            <ContentBox key={index} content={tweet} />
            </Link>
            )
          ) : (
            <p>No tweets yet</p>
          )}
        </main>
      </ContainerApp>
    </>
  );
}

export default withAuth(MyTweets);