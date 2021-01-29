import { StyleSheet, css } from 'aphrodite'

import ImageGrid from '../components/imageGrid'
import React from 'react'
import Structure from '../components/structure'

function Work (props) {

  return(
    <Structure title="Work" up="/concept" down="/clients">
      <div className={css(workStyles.grid_size)}>
        <ImageGrid/>
      </div>
    </Structure>
  )
}

export default Work

const workStyles = StyleSheet.create({

  grid_size: {
    width: '100vw',
    paddingLeft: '25vw',
    paddingRight: '25vw'
  }

})
