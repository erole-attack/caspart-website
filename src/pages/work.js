import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/layout'
import { StyleSheet, css } from 'aphrodite'
import SEO from '../components/seo'
import Img from 'gatsby-image'

export const workImageQuery = graphql`
  query {
    olijfolie: file(relativePath: { eq: "al-oud-olijfolie.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    manna: file(relativePath: { eq: "manna_sauzen.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    prima: file(relativePath: { eq: "prima_cocoa.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    groentesap: file(relativePath: { eq: "pure-fruit-groentesap.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nuts: file(relativePath: { eq: "joy-nuts-paprika.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bcolijfolie: file(relativePath: { eq: "b&c-olijfolie.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cavalier: file(relativePath: { eq: "cavalier-chocolade.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    saucee: file(relativePath: { eq: "saucee.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kruidenboter: file(relativePath: { eq: "kruidenboter-mix.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    leberg: file(relativePath: { eq: "leberg.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cupcake: file(relativePath: { eq: "cupcake-chocolates.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    superfood: file(relativePath: { eq: "superfoods.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pistache: file(relativePath: { eq: "pistachenootjes.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blondeel: file(relativePath: { eq: "frederic-blondeel.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    olieen: file(relativePath: { eq: "b&c-olieen.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    paaseitjes: file(relativePath: { eq: "paaseitjes.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cornflakes: file(relativePath: { eq: "cornflakes.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    truffles: file(relativePath: { eq: "truffles.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    brokkensaus: file(relativePath: { eq: "brokkensaus.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    monte: file(relativePath: { eq: "del-monte.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    chocomelk: file(relativePath: { eq: "milsa-chocomelk.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    yoghurt: file(relativePath: { eq: "milsani-yoghurt.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    azijn: file(relativePath: { eq: "b&c-azijn.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    madeleines: file(relativePath: { eq: "arioso-madeleines.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vleesbrood: file(relativePath: { eq: "vleesbrood.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    soup: file(relativePath: { eq: "soup.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    delinut: file(relativePath: { eq: "delinut.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    yoplait: file(relativePath: { eq: "panier-de-yoplait.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mahall: file(relativePath: { eq: "mahall-saus.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vermeiren: file(relativePath: { eq: "vermeiren-cookies.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    shortbread: file(relativePath: { eq: "shortbread-cookies.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    melro: file(relativePath: { eq: "melro-room.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


function WorkPage (props) {

  return(
    <Layout>
      <SEO title="Work"/>
      <div className={css(workStyles.page_container)}>
      <AniLink className={css(workStyles.arrow_up)} cover to="/concept" bg="#0070BA" direction="down">
        <svg width="47" height="12" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46 10.5L23.5 2L1 10.5" stroke="#790722" stroke-width="2"/>
        </svg>
      </AniLink>
        <div className={css(workStyles.image_grid)}>
          <Img className={css(workStyles.large_image)} fluid={props.data.olijfolie.childImageSharp.fluid}/>
          <Img className={css(workStyles.large_image)} fluid={props.data.manna.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.prima.childImageSharp.fluid}/>
          <Img className={css(workStyles.medium_image)} fluid={props.data.groentesap.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.nuts.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.bcolijfolie.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.cavalier.childImageSharp.fluid}/>
          <Img className={css(workStyles.medium_image)} fluid={props.data.saucee.childImageSharp.fluid}/>
          <div className={css(workStyles.small_image)}>
            <Img className={css(workStyles.pile_image)} fluid={props.data.kruidenboter.childImageSharp.fluid}/>
            <Img fluid={props.data.leberg.childImageSharp.fluid}/>
          </div>
          <Img className={css(workStyles.small_image)} fluid={props.data.cupcake.childImageSharp.fluid}/>
          <Img className={css(workStyles.medium_image)} fluid={props.data.superfood.childImageSharp.fluid}/>
          <div className={css(workStyles.small_image)}>
            <Img className={css(workStyles.pile_image)} fluid={props.data.pistache.childImageSharp.fluid}/>
            <Img fluid={props.data.blondeel.childImageSharp.fluid}/>
          </div>
          <Img className={css(workStyles.medium_image)} fluid={props.data.olieen.childImageSharp.fluid}/>
          <Img className={css(workStyles.medium_image)} fluid={props.data.paaseitjes.childImageSharp.fluid}/>
          <div className={css(workStyles.small_image)}>
            <Img className={css(workStyles.pile_image)} fluid={props.data.cornflakes.childImageSharp.fluid}/>
            <Img fluid={props.data.truffles.childImageSharp.fluid}/>
          </div>
          <Img className={css(workStyles.small_image)} fluid={props.data.brokkensaus.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.monte.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.chocomelk.childImageSharp.fluid}/>
          <Img className={css(workStyles.large_image)} fluid={props.data.yoghurt.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.azijn.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.madeleines.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.vleesbrood.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.soup.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.delinut.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.yoplait.childImageSharp.fluid}/>
          <Img className={css(workStyles.large_image)} fluid={props.data.mahall.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.vermeiren.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.shortbread.childImageSharp.fluid}/>
          <Img className={css(workStyles.small_image)} fluid={props.data.melro.childImageSharp.fluid}/>
        </div>
      </div>
    </Layout>
  )
}

export default WorkPage

const workStyles = StyleSheet.create({

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
    width: '38vw',
    overflow: 'auto',
    '::-webkit-scrollbar': {
      display: 'none'
    }
  },

  large_image: {
    flexGrow: '3',
    flexBasis: 'calc(100% - 1em)',
    margin: '0.5em'
  },

  medium_image: {
    flexGrow: '2',
    flexBasis: 'calc(66% - 1em)',
    margin: '0.5em'
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(33% - 1em)',
    margin: '0.5em'
  },

  pile_image: {
    marginBottom: '1em'
  },

  arrow_up: {
    zIndex: '300',
    placeSelf: 'center',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '2'
  }

})
