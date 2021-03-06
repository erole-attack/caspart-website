import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import React from 'react'
import Structure from '../components/structure'

export const pasenImageQuery = graphql`
  query {
    pasen1: file(relativePath: { eq: "pasen1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pasen2: file(relativePath: { eq: "pasen2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pasen3: file(relativePath: { eq: "pasen3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pasen4: file(relativePath: { eq: "pasen4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pasen5: file(relativePath: { eq: "pasen5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pasen6: file(relativePath: { eq: "pasen6.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pasen7: file(relativePath: { eq: "pasen7.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pasen8: file(relativePath: { eq: "pasen8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function PasenPage (props) {

  return(
    <Structure title="pasen" back="true">
      <div className={css(pasenStyles.image_grid)}>
        <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen1.childImageSharp.fluid}/>
        <p className={css(pasenStyles.large_image, pasenStyles.caption)}><b className={css(pasenStyles.bold_caption)}>Pasen voor Aldi</b> - gamma paasfiguren</p>
        <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen2.childImageSharp.fluid}/>
        <p className={css(pasenStyles.large_image, pasenStyles.text)}>Ontwikkeling van een tijdloos paasgamma voor Aldi. Gedurfd afwijken van het klassieke geel / groen en opteren voor een eigentijdse look. Eenvoudig te vertalen naar de verschillende producten en verpakkingen.</p>
        <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen3.childImageSharp.fluid}/>
        <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen4.childImageSharp.fluid}/>
        <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen5.childImageSharp.fluid}/>
        <Img className={css(pasenStyles.medium_image)} fluid={props.data.pasen6.childImageSharp.fluid}/>
        <Img className={css(pasenStyles.small_image)} fluid={props.data.pasen7.childImageSharp.fluid}/>
        <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen8.childImageSharp.fluid}/>
        <div className={css(pasenStyles.blank_div)}/>
      </div>
    </Structure>
  )
}

export default PasenPage

const pasenStyles = StyleSheet.create({

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
    margin: '0.75vw',
    fontSize: '1.2vw',
  },

  medium_image: {
    flexGrow: '2',
    flexBasis: 'calc(60% - 1.5em)',
    margin: '0.75vw'
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(30% - 1.5em)',
    margin: '0.75vw'
  },

  text: {
    textAlign: 'justify',
    marginTop: '0.25vw',
    lineHeight: '1.6vw',
    fontSize: '1.2885vw',
  },

  caption: {
    fontSize: '1vw',
    marginTop: '0.25em',
    marginBottom: '0.25em',
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
