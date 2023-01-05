import { createContext, useContext, useState } from "react";

import {LangContext} from '../services/langContext'
import LangSwitcher from "./LangSwitcher";
import MainContent from "./MainContent";

const HookTest = () => {
    const [lang, setLang] = useState('uk')

    return (
        <>
        <LangContext.Provider value={{lang, setLang}}>
            <LangSwitcher/>
            <MainContent/>
        </LangContext.Provider>
        </>
    )
}
export default HookTest;