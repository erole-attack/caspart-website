import "./layout.css"

import Header from "./header"
import React from "react"
import outdatedBrowser from "outdated-browser-rework";

const Layout = ({ children }) => {
  outdatedBrowser()
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
