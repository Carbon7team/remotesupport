import {createContext, useContext} from "react";
import Rootstore from "../ModelStores/RootStore";

export const AppContext = createContext(Rootstore);
export const AppContextProvider = AppContext.Provider;
export const useStore = () => useContext(AppContext);