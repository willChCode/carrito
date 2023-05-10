import { createContext, useContext, useState } from 'react';

//Crear contexto
export const filtersContext = createContext();

export const useFilter = () => {
  const context = useContext(filtersContext);
  if (!useFilter) throw new Error('no existe los filters');
  return context;
};
//Crear elprovider, para proveer el contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    title: null
  });

  return (
    <filtersContext.Provider
      value={{
        filters,
        setFilters
      }}>
      {children}
    </filtersContext.Provider>
  );
}
