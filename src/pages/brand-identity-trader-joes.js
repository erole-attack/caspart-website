import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'

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
        fluid(maxWidth: 1800) {
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
        <div className={css(joesStyles.grid_container)}>
          <div className={css(joesStyles.image_grid)}>
            <Img className={css(joesStyles.large_image)} fluid={props.data.pistache1.childImageSharp.fluid}/>
            <p className={css(joesStyles.large_image, joesStyles.caption)}><b>Trader Joe’s voor Aldi</b> - gamma noten & gedroogde vruchten</p>
            <div className={css(joesStyles.large_image)}>
              <Img fluid={props.data.joes.childImageSharp.fluid}/>
              <div className={css(joesStyles.textframe)}>
                <p className={css(joesStyles.text)}>Logo ‘American Style’, passend bij de merknaam en het product;</p>
                <p className={css(joesStyles.text)}>de stijl werd verder doorgevoerd op de verpakkingen.</p>
              </div>
            </div>
            <Img className={css(joesStyles.large_image)} fluid={props.data.fruit1.childImageSharp.fluid}/>
            <Img className={css(joesStyles.large_image, joesStyles.out_of_bounds)} fluid={props.data.fruit2.childImageSharp.fluid}/>
            <Img className={css(joesStyles.small_image)} fluid={props.data.pistache2.childImageSharp.fluid}/>
            <Img className={css(joesStyles.medium_image)} fluid={props.data.pistache3.childImageSharp.fluid}/>
          </div>
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

  grid_container: {
    position: 'relative',
    overflow: 'auto',
    '::-webkit-scrollbar': {
      display: 'none'
    },
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '2',
    gridRowEnd: '3',
  },

  image_grid: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: '50vw',
  },

  large_image: {
    flexGrow: '3',
    flexBasis: 'calc(100% - 1.5em)',
    margin: '0.75em',
    fontSize: '1.2vw',
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

  textframe: {
    marginTop: '-3vw'
  },

  text: {
    textAlign: 'center',
    lineHeight: '0.4vw',
    fontSize: '1.2vw',
  },

  out_of_bounds: {
    marginLeft: '-8.8vw',
    marginRight: '-8.4vw',
    zIndex: '700'
  },

  caption: {
    marginTop: '0.25em',
    marginBottom: '1.5em'
  }

})
