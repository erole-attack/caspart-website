import React from 'react'
import Layout from '../components/layout'
import { StyleSheet, css } from 'aphrodite'
import SEO from '../components/seo'
import Img from 'gatsby-image'

export const joesImageQuery = graphql`
  query {
    pistache1: file(relativePath: { eq: "pistache1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    joes: file(relativePath: { eq: "trader-joes-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fruit1: file(relativePath: { eq: "soft-fruit1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fruit2: file(relativePath: { eq: "soft-fruit2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pistache2: file(relativePath: { eq: "pistache2.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pistache3: file(relativePath: { eq: "pistache3.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function JoesPage (props) {

  return(
    <Layout>
      <SEO title="Traders Joe's"/>
      <div className={css(joesStyles.page_container)}>
        <div className={css(joesStyles.image_grid)}>
          <Img className={css(joesStyles.large_image)} fluid={props.data.pistache1.childImageSharp.fluid}/>
          <div className={css(joesStyles.large_image)}>
            <p><b>Trader Joe’s voor Aldi</b> - gamma noten & gedroogde vruchten</p>
            <Img fluid={props.data.joes.childImageSharp.fluid}/>
            <p className={css(joesStyles.text)}>Logo ‘American Style’, passend bij de merknaam en het product; de stijl werd verder doorgevoerd op de verpakkingen.</p>
          </div>
          <Img className={css(joesStyles.large_image)} fluid={props.data.fruit1.childImageSharp.fluid}/>
          <Img className={css(joesStyles.large_image)} fluid={props.data.fruit2.childImageSharp.fluid}/>
          <Img className={css(joesStyles.small_image)} fluid={props.data.pistache2.childImageSharp.fluid}/>
          <Img className={css(joesStyles.medium_image)} fluid={props.data.pistache3.childImageSharp.fluid}/>
        </div>
      </div>
    </Layout>
  )
}

export default JoesPage

const joesStyles = StyleSheet.create({

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
    flexBasis: 'calc(60% - 1.5em)',
    margin: '0.75em'
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(40% - 1.5em)',
    margin: '0.75em'
  },

  text: {
    lineHeight: '1.6vw',
    fontSize: '1.2vw',
  }

})
