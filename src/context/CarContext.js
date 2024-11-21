import { useWeb3React } from "@web3-react/core";
import { useState, createContext } from "react";

export const CarContext = createContext();

export const CarContextProvider = (props) => {
    const [ leftBarCollepse, setLeftBarCollepse ] = useState(false);
    const handleLeftBarClose = () => setLeftBarCollepse(false);
    const handleLeftBarShow = () => setLeftBarCollepse(true);
    const { account } = useWeb3React();

    return (
        <CarContext.Provider value={{ leftBarCollepse, account, setLeftBarCollepse, handleLeftBarClose, handleLeftBarShow }}>
            {props.children}
        </CarContext.Provider>
    )
}