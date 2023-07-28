import { useContext, createContext } from 'react';

export const AppContext = createContext();

const useAppProvider = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppProvider must be used within an AppProvider');
    }

    return context;
}

export default useAppProvider;