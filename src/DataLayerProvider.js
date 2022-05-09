import { useContext, useReducer, createContext } from "react";


// preparing the data;
export const DataLayerContext = createContext();

//wrapping 

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider  value={useReducer(reducer, initialState)}>
        { children }
    </DataLayerContext.Provider>
);

export const UseDataLayerValue = () => useContext(DataLayerContext)