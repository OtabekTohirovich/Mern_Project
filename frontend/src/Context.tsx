import React, { useEffect, useState } from "react";


const SearchContext = React.createContext({});

export function SearchProvider({ children}: any) {
  const [search, setSearch] = useState('');
  useEffect(() => {
    setSearch(search)
  }, [search]);
  const changeData = (data: string) => {
    setSearch('');
    console.log(data);
    
  };
  return (
    <SearchContext.Provider value={{ search, setSearch, changeData }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;