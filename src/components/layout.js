import "./layout.css"

import Header from "./header"
import React from "react"

const Layout = ({ children }) => {

  return (
    <>
      <Header>
      </Header>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
