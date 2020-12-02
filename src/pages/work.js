import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import React from 'react'
import Structure from '../components/structure'
import { graphql } from 'gatsby'

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

function Work (props) {

  const imageGrid =
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
        <div className={css(workStyles.pile_image_container)}>
          <Img className={css(workStyles.pile_image)} fluid={props.data.kruidenboter.childImageSharp.fluid}/>
          <Img className={css(workStyles.pile_image)} fluid={props.data.leberg.childImageSharp.fluid}/>
        </div>
      </div>
      <Img className={css(workStyles.small_image)} fluid={props.data.cupcake.childImageSharp.fluid}/>
      <Img className={css(workStyles.medium_image)} fluid={props.data.superfood.childImageSharp.fluid}/>
      <div className={css(workStyles.small_image)}>
        <div className={css(workStyles.pile_image_container)}>
          <Img className={css(workStyles.pile_image)} fluid={props.data.pistache.childImageSharp.fluid}/>
          <Img className={css(workStyles.pile_image)} fluid={props.data.blondeel.childImageSharp.fluid}/>
        </div>
      </div>
      <Img className={css(workStyles.medium_image)} fluid={props.data.olieen.childImageSharp.fluid}/>
      <Img className={css(workStyles.medium_image)} fluid={props.data.paaseitjes.childImageSharp.fluid}/>
      <div className={css(workStyles.small_image)}>
        <div className={css(workStyles.pile_image_container)}>
          <Img className={css(workStyles.pile_image)} fluid={props.data.cornflakes.childImageSharp.fluid}/>
          <Img className={css(workStyles.pile_image)} fluid={props.data.truffles.childImageSharp.fluid}/>
        </div>
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
      <div className={css(workStyles.empty_space)}/>
    </div>

  return(
    <Structure title="Work" up="/concept" down="/clients">

      {imageGrid}

    </Structure>
  )
}

export default Work

const workStyles = StyleSheet.create({

  scroll_field: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'yellow',
  },

  image_grid: {
    zIndex: '300',
    overflow: 'visible',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '6vw',
    width: '100vw',
    paddingLeft: '25vw',
    paddingRight: '25vw'
  },

  large_image: {
    flexGrow: '3',
    flexBasis: 'calc(100% - 1em)',
    border: '0.5em white solid'
  },

  medium_image: {
    flexGrow: '2',
    flexBasis: 'calc(66% - 1em)',
    border: '0.5em white solid'
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(33% - 1em)',
    border: '0.5em white solid',
    backgroundColor: 'white'
  },

  pile_image: {
    border: '0.5em white solid',
    backgroundColor: 'white'
  },

  pile_image_container: {
    margin: '-0.5em',
    backgroundColor: 'white'
  },

  empty_space: {
    height: '6vw',
    width: '100%'
  }

})
