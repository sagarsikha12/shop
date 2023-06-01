import React,{createContext,useContext,useReducer} from "react";


// preparing data layer to pass information
export const StateContext= createContext();


//include our appp and give data layer
export const StateProvider = ({reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

//pull info from data layer
export const useStateValue = () => useContext(StateContext); 
