import { createContext, useContext } from "react";
import { useReducer } from "react";
import { filterReducer } from "../reducer";

const FilterContext = createContext(null);
export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        sortBy: "",
        category: [],
        rating: 1,
        priceRange: 1000,
    })
    return <FilterContext.Provider value={{ filterState, filterDispatch }}>
        {children}
    </FilterContext.Provider>
}


