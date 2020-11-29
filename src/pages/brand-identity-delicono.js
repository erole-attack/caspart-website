import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'

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


function DeliconoPage (props) {

  return(
    <Layout>
      <SEO title="Delicono"/>
      <div className={css(deliconoStyles.page_container)}>
        <div className={css(deliconoStyles.image_grid)}>
          <Img className={css(deliconoStyles.large_image)} fluid={props.data.delicono1.childImageSharp.fluid}/>
          <p className={css(deliconoStyles.large_image, deliconoStyles.caption)}><b>Delicono voor Jacques Ice</b> - gamma luxe chocoladehoorntjes</p>
          <p className={css(deliconoStyles.small_image)}>De ontwikkeling van een verfijnd logo voor een luxe product, welke de kwaliteit van het product benadrukt en een afspiegeling is van de rijke chocolade-leefwereld.</p>
          <Img className={css(deliconoStyles.medium_image)} fluid={props.data.delicono2.childImageSharp.fluid}/>
          <Img className={css(deliconoStyles.large_image)} fluid={props.data.delicono3.childImageSharp.fluid}/>
          <Img className={css(deliconoStyles.large_image)} fluid={props.data.delicono4.childImageSharp.fluid}/>
        </div>
      </div>
    </Layout>
  )
}

export default DeliconoPage

const deliconoStyles = StyleSheet.create({

  page_container: {
    zIndex: '3000',
    margin: '0 auto',
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: '1fr 8fr 1fr',
    gridTemplateRows: '1fr 8fr 1fr',
    overflow: 'hidden'
  },

  image_grid: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: '50vw',
    overflow: 'auto',
    '::-webkit-scrollbar': {
      display: 'none'
    }
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
    marginTop: '0.25em',
    marginBottom: '1.5em'
  }

})
