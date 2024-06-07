import React, { createContext, useState, useContext } from 'react';

const AgeConfirmationContext = createContext();

export const useAgeConfirmation = () => {
    return useContext(AgeConfirmationContext);
};

export const AgeConfirmationProvider = ({ children }) => {
    const [isAdultConfirmed, setIsAdultConfirmed] = useState(false);

    return (
        <AgeConfirmationContext.Provider value={{ isAdultConfirmed, setIsAdultConfirmed }}>
            {children}
        </AgeConfirmationContext.Provider>
    );
};
