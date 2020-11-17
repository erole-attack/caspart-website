import React from 'react'
import Layout from '../components/layout'
import { StyleSheet, css } from 'aphrodite'
import SEO from '../components/seo'
import Img from 'gatsby-image'

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
    <Layout>
      <SEO title="Pasen"/>
      <div className={css(pasenStyles.page_container)}>
        <div className={css(pasenStyles.image_grid)}>
          <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen1.childImageSharp.fluid}/>
          <p className={css(pasenStyles.large_image)}><b>Pasen voor Aldi</b> - gamma paasfiguren</p>
          <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen2.childImageSharp.fluid}/>
          <p className={css(pasenStyles.large_image, pasenStyles.text)}>Ontwikkeling van een tijdloos paasgamma voor Aldi. Gedurfd afwijken van het klassieke geel / groen en opteren voor een eigentijdse look. Eenvoudig te vertalen naar de verschillende producten en verpakkingen.</p>
          <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen3.childImageSharp.fluid}/>
          <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen4.childImageSharp.fluid}/>
          <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen5.childImageSharp.fluid}/>
          <Img className={css(pasenStyles.medium_image)} fluid={props.data.pasen6.childImageSharp.fluid}/>
          <Img className={css(pasenStyles.small_image)} fluid={props.data.pasen7.childImageSharp.fluid}/>
          <Img className={css(pasenStyles.large_image)} fluid={props.data.pasen8.childImageSharp.fluid}/>
        </div>
      </div>
    </Layout>
  )
}

export default PasenPage

const pasenStyles = StyleSheet.create({

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
    margin: '0.75em',
    fontSize: '1.2vw',
  },

  medium_image: {
    flexGrow: '2',
    flexBasis: 'calc(70% - 1.5em)',
    margin: '0.75em'
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(30% - 1.5em)',
    margin: '0.75em'
  },

  text: {
    lineHeight: '1.6vw',
    fontSize: '1.2vw',
  }

})
