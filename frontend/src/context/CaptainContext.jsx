import React, { createContext, useContext, useState } from 'react';

const CaptainDataContext = createContext();

// export function useCaptain() {
//     const ctx = useContext(CaptainDataContext);
//     if (!ctx) throw new Error('useCaptain must be used within a CaptainProvider');
//     return ctx;
// }

export function CaptainContext({ children }) {
    const [captain, setCaptain] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = { captain, updateCaptain, isloading, setIsLoading, error, setError };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
}

export default CaptainDataContext;
