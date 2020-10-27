import React, { createContext, useState, useEffect } from 'react'


export const GlobalContext = createContext()

const Provider = props => {


  return (
    <GlobalContext.Provider value={{  }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);
