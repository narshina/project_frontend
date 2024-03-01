import React, { useState } from 'react'
import { createContext } from 'react'

export const LangContext=createContext()

export const LanguageContext = ({children}) => {
    const [lang,setLang]=useState(false)

    const toggleLang=()=>{
        setLang(!lang)
    }
  return (
<LangContext.Provider value={{lang,toggleLang}}>

   {children}
</LangContext.Provider>
  )
}
