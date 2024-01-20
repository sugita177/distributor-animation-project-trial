import { useState, createContext } from "react";

export const StateValuesContext = createContext();

export function StateValuesProvider(props) {
    const [stateValues, setStateValues] = useState({
        angle: 0,
        centerPoint: [0, 0]
    });
    const value = {stateValues, setStateValues};

    return(
        <StateValuesContext.Provider value={value}>
            {props.children}
        </StateValuesContext.Provider>
    );
}