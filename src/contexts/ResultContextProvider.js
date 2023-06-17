import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

const baseUrl = 'https://google-search72.p.rapidapi.com/search';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    const getResults = async (type) => {

        setIsLoading(true);
        const response = await fetch(baseUrl + type, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                // 'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': process.env.REACT_APP_GOOGLE_API_KEY,
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        });

        const data = await response.json();
        console.log(data);
        setResults(data);
        setIsLoading(false);
    }


    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}


export const useResultContext = () => useContext(ResultContext);
