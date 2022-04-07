import {createContext, useContext} from "react";
import Dataset from './store/Dataset'

export const AppContext = createContext(Dataset);
export const AppContextProvider = AppContext.Provider;
export const useStore = () => useContext(AppContext);