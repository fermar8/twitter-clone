export const dispatchTypes = {
    SET_USER: 'SET_USER',
    SET_ALL_TWITS: 'SET_TWITS'
}

export const reducer = (state, action) => {
    const { type, payload } = action;
    let newState;

    switch (type) {
        case dispatchTypes.SET_USER: {
            newState = {
              ...state,
                user: payload
            }
            break;
        }
        case dispatchTypes.SET_ALL_TWITS: {
            newState = {
              ...state,
                allTweets: payload
            }
            break;
        }
    }
    return newState;
}