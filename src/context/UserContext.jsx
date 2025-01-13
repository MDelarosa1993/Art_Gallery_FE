import React, { createContext, useState, useContext} from 'react';
import { Navigate } from 'react-router-dom';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (userData, userToken) => {
        setUser(userData);
        setToken(userToken);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
    };
    
    const value = {
        user,
        token,
        isLoggedIn,
        login,
        logout
    }

    return (
        <UserContext.Provider value={ value }>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}

export default UserProvider;