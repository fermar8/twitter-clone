import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AppContext } from '../hooks/useAppProvider';

const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const { user } = useContext(AppContext);

    useEffect(() => {
        if (typeof window !== 'undefined' && !user) {
          router.replace('/');
        }
      }, [router, user]);

    return <Component {...props} />;
  };

  return Auth;
};

export default withAuth;