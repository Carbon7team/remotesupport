import {createContext, useContext} from "react";
import Dataset from './store'

export const AppContext = createContext(Dataset);
export const AppContextProvider = AppContext.Provider;
export const useStore = () => useContext(AppContext);