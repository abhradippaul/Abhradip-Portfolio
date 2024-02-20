import { useContext, createContext, SetStateAction, Dispatch } from "react";

export type Theme = {
    theme: Boolean
}

// export const ThemeContext = createContext({
//     theme : Theme,
//     setTheme : <SetStateAction<Theme>>
// })
export interface ThemeContextInterface {
    theme : Theme,
    setTheme : Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<Partial<ThemeContextInterface>>({})

// export const ThemeContextProvider = ThemeContext.Provider

export function useThemeContext () {
    return useContext(ThemeContext)
}