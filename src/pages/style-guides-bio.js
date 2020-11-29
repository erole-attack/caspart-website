import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'

export const bioImageQuery = graphql`
  query {
    bio1: file(relativePath: { eq: "bio1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bio2: file(relativePath: { eq: "bio2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bio3: file(relativePath: { eq: "bio3.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bio4: file(relativePath: { eq: "bio4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bio5: file(relativePath: { eq: "bio5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bio6: file(relativePath: { eq: "bio6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bio7: file(relativePath: { eq: "bio7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function BioPage (props) {

  return(
    <Layout>
      <SEO title="Bio"/>
      <div className={css(bioStyles.page_container)}>
        <div className={css(bioStyles.image_grid)}>
          <Img className={css(bioStyles.large_image)} fluid={props.data.bio1.childImageSharp.fluid}/>
          <p className={css(bioStyles.large_image, bioStyles.caption)}><b>Bio voor Aldi</b> - gamma diverse producten</p>
          <Img className={css(bioStyles.large_image)} fluid={props.data.bio2.childImageSharp.fluid}/>
          <p className={css(bioStyles.medium_image, bioStyles.text)}>Ontwikkelen van jonge en frisse basisstijl voor de BIO-range van Aldi. Elk product behoudt zijn eigen merknaam onder de noemer BIO. Door de ontwikkeling van een basiscompositie met een herkenbare band bovenaan in combinatie met de BIO-stempel, ontstaat er een uniformiteit ongeacht het soort product.</p>
          <Img className={css(bioStyles.small_image)} fluid={props.data.bio3.childImageSharp.fluid}/>
          <Img className={css(bioStyles.large_image)} fluid={props.data.bio4.childImageSharp.fluid}/>
          <Img className={css(bioStyles.large_image)} fluid={props.data.bio5.childImageSharp.fluid}/>
          <Img className={css(bioStyles.large_image)} fluid={props.data.bio6.childImageSharp.fluid}/>
          <Img className={css(bioStyles.large_image)} fluid={props.data.bio7.childImageSharp.fluid}/>
        </div>
      </div>
    </Layout>
  )
}

export default BioPage

const bioStyles = StyleSheet.create({

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
    flexBasis: 'calc(65% - 1.5em)',
    margin: '0.75em',
    lineHeight: '2.2vw',
    fontSize: '1.2vw'
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(35% - 1.5em)',
    margin: '0.75em'
  },

  text: {
    marginTop: '1.25em',
  },

  caption: {
    marginTop: '0.25em',
    marginBottom: '1.5em'
  }

})
