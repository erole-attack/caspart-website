import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import React from 'react'
import Structure from '../components/structure'

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
    <Structure title="Bio" back="true">
      <div className={css(bioStyles.image_grid)}>
        <Img className={css(bioStyles.large_image)} fluid={props.data.bio1.childImageSharp.fluid}/>
        <p className={css(bioStyles.large_image, bioStyles.caption)}><b className={css(bioStyles.bold_caption)}>Bio voor Aldi</b> - gamma diverse producten</p>
        <Img className={css(bioStyles.large_image)} fluid={props.data.bio2.childImageSharp.fluid}/>
        <div className={css(bioStyles.medium_image, bioStyles.text_block)}><p className={css(bioStyles.text)}>Ontwikkelen van jonge en frisse basisstijl voor de BIO-range van Aldi. Elk product behoudt zijn eigen merk-naam onder de noemer BIO. Door de ontwikkeling van een basiscompositie met een herkenbare band boven-aan in combinatie met de BIO-stempel, ontstaat er een uniformiteit ongeacht het soort product.</p></div>
        <Img className={css(bioStyles.small_image)} fluid={props.data.bio3.childImageSharp.fluid}/>
        <Img className={css(bioStyles.large_image)} fluid={props.data.bio4.childImageSharp.fluid}/>
        <Img className={css(bioStyles.large_image)} fluid={props.data.bio5.childImageSharp.fluid}/>
        <Img className={css(bioStyles.large_image)} fluid={props.data.bio6.childImageSharp.fluid}/>
        <Img className={css(bioStyles.large_image)} fluid={props.data.bio7.childImageSharp.fluid}/>
        <div className={css(bioStyles.blank_div)}/>
      </div>
    </Structure>
  )
}

export default BioPage

const bioStyles = StyleSheet.create({

  image_grid: {
    zIndex: '300',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '5%',
    width: '50vw',
    paddingLeft: '25vw',
    paddingRight: '25vw'
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
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(35% - 1.5em)',
    margin: '0.75em'
  },

  text_block: {
    display: 'grid',
    alignItems: 'center',
  },

  text: {
    lineHeight: '1.6vw',
    fontSize: '1.35vw',
    textAlign: 'justify',
    textJustify: 'inter-word',
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
