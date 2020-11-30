import { StyleSheet, css } from 'aphrodite'

import React from "react"
import Structure from '../components/structure'

const NotFoundPage = () => (
  <Structure title="404: not Found">
    <div className={css(notFoundStyles.center)}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Structure>
)

export default NotFoundPage

const notFoundStyles = StyleSheet.create({
  center: {
    placeSelf: 'center',
    margin: '0 auto'
  }
})