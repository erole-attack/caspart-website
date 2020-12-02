import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import React from 'react'
import Structure from '../components/structure'

export const deliconoImageQuery = graphql`
  query {
    delicono1: file(relativePath: { eq: "delicono1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    delicono2: file(relativePath: { eq: "delicono2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    delicono3: file(relativePath: { eq: "delicono3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    delicono4: file(relativePath: { eq: "delicono4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


function Delicono (props) {

  return(
    <Structure title="Delicono" back="true">
      <div className={css(deliconoStyles.image_grid)}>
        <Img className={css(deliconoStyles.large_image)} fluid={props.data.delicono1.childImageSharp.fluid}/>
        <p className={css(deliconoStyles.large_image, deliconoStyles.caption)}><b className={css(deliconoStyles.bold_caption)}>Delicono voor Jacques Ice</b> - gamma luxe chocoladehoorntjes</p>
        <p className={css(deliconoStyles.small_image)}>De ontwikkeling van een verfijnd logo voor een luxe product, welke de kwaliteit van het product benadrukt en een afspiegeling is van de rijke chocolade-leefwereld.</p>
        <Img className={css(deliconoStyles.medium_image)} fluid={props.data.delicono2.childImageSharp.fluid}/>
        <Img className={css(deliconoStyles.large_image)} fluid={props.data.delicono3.childImageSharp.fluid}/>
        <Img className={css(deliconoStyles.large_image)} fluid={props.data.delicono4.childImageSharp.fluid}/>
        <div className={css(deliconoStyles.blank_div)}/>
      </div>
    </Structure>
  )
}

export default Delicono

const deliconoStyles = StyleSheet.create({

  image_grid: {
    zIndex: '300',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '5%',
    width: '50vw',
    paddingLeft: '25vw',
    paddingRight: '25vw',
  },

  large_image: {
    flexGrow: '3',
    flexBasis: 'calc(100% - 1.5em)',
    margin: '0.75em'
  },

  medium_image: {
    flexGrow: '2',
    flexBasis: 'calc(70% - 1.5em)',
    margin: '0.75em'
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(30% - 1.5em)',
    margin: '0.75em',
    lineHeight: '1.6vw',
    fontSize: '1.2vw',
    
  },

  caption: {
    fontSize: '1vw',
    marginTop: '0.25em',
    marginBottom: '1.5em'
  },

  bold_caption: {
    fontSize: '1.2vw',
    fontWeight: '800'
  },

  blank_div: {
    flexGrow: '3',
    height: '5vw',
    width: '100%',
  }

})
