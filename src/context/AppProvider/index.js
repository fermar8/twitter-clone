import { useReducer, useMemo } from 'react';
import { useRouter } from 'next/router';
import { dispatchTypes, reducer } from '../../reducers/appProvider';
import db from '../../db/db.json'

import { AppContext } from '../../hooks/useAppProvider';

const defaultState = {
    user: undefined,
    allTweets: db
}

const AppProvider = ({ children }) => {
    const router = useRouter();

    const [app, dispatchApp] = useReducer(reducer, defaultState);


    const values = useMemo(() => {
        const setUser = (userData) => {
            dispatchApp({ type: dispatchTypes.SET_USER, payload: userData });
        }

        const setAllTweets = (twitsArray) => {
          dispatchApp({ type: dispatchTypes.SET_ALL_TWITS, payload: twitsArray });
        }

        const logout = () => {
          dispatchApp({ type: dispatchTypes.SET_USER, payload: undefined });
          router.push('/login');
        };
    
        return {
          ...app,
          setUser,
          setAllTweets,
          logout
        };
      },
      [app, router]
    );

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
        
}

export default AppProvider;
