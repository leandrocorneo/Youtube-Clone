import { createContext, useState } from "react";

export const SearchContext = createContext({} as any);

export const SearchStore = ({children}: any) => {

    const [search, setSearch] = useState('');

    return(
        <SearchContext.Provider value={{
            search,
            setSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}