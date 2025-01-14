import React, { Children, createContext, useState } from 'react'

export const ThemeContext = createContext();
 export const ThemeProvider =({children})=>{
  const [mode,setMode] = useState("light")

  const themeChange = ()=>{
    // setMode({mode="light"?"dark":"light"})
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
}

// added for pr

  return (<ThemeContext.Provider value={{mode,themeChange}}>
   {/* <div className={`${mode}`}>{children}</div>  */}
   {children}
  </ThemeContext.Provider>
  )
}

