import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import React from 'react'
import Structure from '../components/structure'

export const moonyImageQuery = graphql`
  query {
    moony1: file(relativePath: { eq: "moony1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    moony2: file(relativePath: { eq: "moony2.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    moony3: file(relativePath: { eq: "moony3.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    moony4: file(relativePath: { eq: "moony4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    moony5: file(relativePath: { eq: "moony5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function MoonyPage (props) {

  return(
    <Structure title="Moony Cakes" back="true">
      <div className={css(moonyStyles.image_grid)}>
        <Img className={css(moonyStyles.large_image)} fluid={props.data.moony1.childImageSharp.fluid}/>
        <p className={css(moonyStyles.large_image, moonyStyles.caption)}><b className={css(moonyStyles.bold_caption)}>Logo Moony voor Chatar</b> - gamma cakes</p>
        <p className={css(moonyStyles.small_image)}>Een sterk en herkenbaar logo voor producten met een jong en eigentijds imago, doch met een betrouwbare authenticiteit. Een duurzaam ontwerp behoudt zijn waarde en zorgt voor een grote naambekendheid.</p>
        <Img className={css(moonyStyles.medium_image)} fluid={props.data.moony2.childImageSharp.fluid}/>
        <Img className={css(moonyStyles.large_image, moonyStyles.out_of_bounds)} fluid={props.data.moony3.childImageSharp.fluid}/>
        <Img className={css(moonyStyles.large_image)} fluid={props.data.moony4.childImageSharp.fluid}/>
        <Img className={css(moonyStyles.large_image)} fluid={props.data.moony5.childImageSharp.fluid}/>
        <div className={css(moonyStyles.blank_div)}/>
      </div>
    </Structure>
  )
}

export default MoonyPage

const moonyStyles = StyleSheet.create({

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
    flexBasis: 'calc(70% - 1.5em)',
    margin: '0.75em'
  },

  small_image: {
    flexGrow: '1',
    flexBasis: 'calc(30% - 1.5em)',
    margin: '0.75em',
    lineHeight: '1.6vw',
    fontSize: '1.2vw'
  },

  out_of_bounds: {
    marginLeft: '-11.5vw',
    marginRight: '-11.5vw',
    zIndex: '700'
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
