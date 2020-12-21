import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import Lottie from 'lottie-react-web'
import React from 'react'
import Structure from '../components/structure'
import animation from '../content/engel_data.json'
import engeltje from '../images/engel-fly.gif'
import { graphql } from 'gatsby'
import useHover from '../components/hooks'

export const indexImageQuery = graphql`
  query {
    engel: file(relativePath: { eq: "grote-engel.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function Index (props) {

  const [hoverRef, isHovered] = useHover()
  const textFade = css(indexStyles.engel_fading_tekst)
  const noTextFade = css(indexStyles.engel_non_fading_tekst)

  const welcomeMessage = 
    <div className={css(indexStyles.engel_tekst)}>
      {isHovered ?
        <div className={css(indexStyles.text_container)}>
          <h3 className={css(indexStyles.text_part1, indexStyles.titles)}>CASP'ART IS</h3>
          <div className={css(indexStyles.text_part2)}><h1 className={css(indexStyles.titles)}><span className={textFade}>A FULL-SERVICE BR</span>AN<span className={textFade}>D</span> EXPIERENCE<span className={css(indexStyles.single_D)}>D</span></h1></div>
          <div className={css(indexStyles.text_part3)}><h1 className={css(indexStyles.titles)}><span className={textFade}>& PACKAGING</span> DESIGN AGENCY</h1></div>
        </div>
      :
        <div className={css(indexStyles.text_container)}>
          <h3 className={css(indexStyles.text_part1, indexStyles.titles)}>CASP'ART IS</h3>
          <div className={css(indexStyles.text_part2)}><h1 className={css(indexStyles.titles)}><span className={noTextFade}>A FULL-SERVICE BR</span>AN<span className={noTextFade}>D</span> EXPIERENCE<span className={css(indexStyles.no_single_D)}>D</span></h1></div>
          <div className={css(indexStyles.text_part3)}><h1 className={css(indexStyles.titles)}><span className={noTextFade}>& PACKAGING</span> DESIGN AGENCY</h1></div>
        </div>
      }
    </div>
  
  const hoverArea =
    <div className={css(indexStyles.svg_container)}>
      <svg className={css(indexStyles.hover_area_container)} width='100%' height='100%' viewBox="-2 -30 130 130">
        <path className={css(indexStyles.hover_area)} ref={hoverRef} d="M23.5 23.7801C23.94 23.9001 24.38 23.6401 24.48 23.2001C25.39 19.1901 29.46 8.29014 46.42 14.6701C48.21 15.2801 46.93 18.0601 49.07 19.0301C49.59 19.2701 50.1 19.5301 50.53 19.9201C51.93 21.2101 54.28 24.0501 50.91 27.3701C50.56 28.1201 48.93 32.7801 55.02 28.3501C48.02 16.7501 73.02 -17.6499 67.74 14.1601C67.66 14.6701 68.11 15.0901 68.62 14.9901C73.21 14.1001 71.67 24.8001 66.64 29.6601C65.77 30.5001 66.52 31.9501 67.7 31.6601C74.83 29.9101 83.4 23.8801 95.93 34.8401C96.88 35.6701 98.2 35.9301 99.39 35.5001C106.2 33.0401 127.43 31.4401 123.17 43.1101C122.63 44.5901 120.88 45.2101 119.55 44.3601C117.61 43.1101 114.71 41.5101 111.41 41.9101C110.26 42.0501 109.78 43.4901 110.67 44.2201C112.55 45.7501 113.54 48.2401 108.21 49.8901C107.81 50.0101 107.39 50.0501 106.98 50.0001C105.22 49.7901 102.05 48.9801 99.26 52.5401C96.92 54.3901 90.82 60.0601 81.72 58.4501C68.15 52.1401 80.91 70.8901 62.25 65.4501C57.11 63.6301 57.04 54.5701 46.78 54.0901C44.64 53.7701 39.69 53.1501 33.15 49.2901C32.71 49.0301 32.3 48.7101 31.91 48.3801C31.11 47.7001 29.38 46.5301 27.44 47.1401C27.01 47.2701 26.57 47.3201 26.12 47.3201C22.68 47.3501 5.43999 52.0001 4.96999 50.4601C4.72999 49.6701 3.55999 48.9501 2.77999 48.6901C-2.23001 47.0801 4.13 39.8101 11.52 41.7801C13.45 41.2801 16.83 39.9101 19.17 38.9801C20.12 38.6001 20.35 37.3501 19.58 36.6601C18.71 35.8901 17.69 34.7601 16.98 32.6501C16.69 31.7801 16.08 31.0301 15.3 30.5401C-0.550005 20.5901 10.28 20.0701 23.5 23.7801Z" fill="white" fill-opacity="0.0" stroke="none" strokeWidth="2" stroke-miterlimit="10"/>
      </svg>
    </div>

  const engel = 
    <div className={css(indexStyles.engel_container)}>
      <Img className={css(indexStyles.engel)} fluid={props.data.engel.childImageSharp.fluid}/>
      {/* <Lottie className={css(indexStyles.engel)} options={{ animationData: animation }} /> */}
    </div>

  return(
    <Structure title="Home" down="/concept">
      <div className={css(indexStyles.center_items)}>
        <img className={css(indexStyles.engel_fly)} src={engeltje}/>
        {welcomeMessage}
        {engel}
        {hoverArea}
      </div>
    </Structure>
  )
}

const fly = {
  '0%': {
      transform: 'translate(100vw, -20vh)',
  },

  '100%': {
      transform: 'translate(-100vw, -20vh)',
  },
}

export default Index

const indexStyles = StyleSheet.create({

  center_items: {
    position: 'relative',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden'
  },

  engel_tekst: {
    zIndex: '10',
    textAlign: 'right'
  },

  engel: {
    width: '65vw'
  },

  text_container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap'
  },

  text_part1: {
    marginRight: '2vw',
    flexGrow: '1'
  },
  text_part2: {
    flexGrow: '1'
  },
  text_part3: {
    marginRight: '2vw',
    flexGrow: '1',
  },

  titles: {
    lineHeight: '0'
  },

  engel_non_fading_tekst: {
    fontWeight: '300',
    transition: 'opacity 1.8s ease'
  },

  engel_fading_tekst: {
    fontWeight: '300',
    transition: 'opacity 0.5s ease',
    opacity: '0.15'
  },

  single_D: {
    fontWeight: '300',
    transition: 'opacity 1.8s ease',
  },

  no_single_D: {
    fontWeight: '300',
    transition: 'opacity 1s ease',
    opacity: '0'
  },

  engel_container: {
    display: 'grid',
    placeItems: 'center',
    position: 'absolute',
    width: '80vw',
    margin: '0'
  },

  svg_container: {
    overflow: 'hidden',
    zIndex: '120',
    position: 'absolute',
    margin: '0'
  },

  hover_area_container: {
    width: '65vw',
    height: '100%',
    overflow: 'hidden',
  },

  engel_fly: {
    zIndex: '9999',
    position: 'absolute',
    animationName: fly,
    animationDuration: '10s',
    animationFillMode: 'forwards'
  }

})
