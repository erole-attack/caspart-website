import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query {
    engel: file(relativePath: { eq: "grote-engel.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// Hook
function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

function IndexPage (props) {

  const [hoverRef, isHovered] = useHover()
  const textFade = css(indexStyles.engel_fading_tekst)
  const noTextFade = css(indexStyles.engel_non_fading_tekst)

  return(
    <Layout>
      <SEO title="Home"/>
      <div className={css(indexStyles.page_container)}>
        <div className={css(indexStyles.svg_container)}>
          <svg className={css(indexStyles.hover_area_container)} width='100%' height='100%' viewBox="-2 -30 130 130">
            <path className={css(indexStyles.hover_area)} ref={hoverRef} d="M23.5 23.7801C23.94 23.9001 24.38 23.6401 24.48 23.2001C25.39 19.1901 29.46 8.29014 46.42 14.6701C48.21 15.2801 46.93 18.0601 49.07 19.0301C49.59 19.2701 50.1 19.5301 50.53 19.9201C51.93 21.2101 54.28 24.0501 50.91 27.3701C50.56 28.1201 48.93 32.7801 55.02 28.3501C48.02 16.7501 73.02 -17.6499 67.74 14.1601C67.66 14.6701 68.11 15.0901 68.62 14.9901C73.21 14.1001 71.67 24.8001 66.64 29.6601C65.77 30.5001 66.52 31.9501 67.7 31.6601C74.83 29.9101 83.4 23.8801 95.93 34.8401C96.88 35.6701 98.2 35.9301 99.39 35.5001C106.2 33.0401 127.43 31.4401 123.17 43.1101C122.63 44.5901 120.88 45.2101 119.55 44.3601C117.61 43.1101 114.71 41.5101 111.41 41.9101C110.26 42.0501 109.78 43.4901 110.67 44.2201C112.55 45.7501 113.54 48.2401 108.21 49.8901C107.81 50.0101 107.39 50.0501 106.98 50.0001C105.22 49.7901 102.05 48.9801 99.26 52.5401C96.92 54.3901 90.82 60.0601 81.72 58.4501C68.15 52.1401 80.91 70.8901 62.25 65.4501C57.11 63.6301 57.04 54.5701 46.78 54.0901C44.64 53.7701 39.69 53.1501 33.15 49.2901C32.71 49.0301 32.3 48.7101 31.91 48.3801C31.11 47.7001 29.38 46.5301 27.44 47.1401C27.01 47.2701 26.57 47.3201 26.12 47.3201C22.68 47.3501 5.43999 52.0001 4.96999 50.4601C4.72999 49.6701 3.55999 48.9501 2.77999 48.6901C-2.23001 47.0801 4.13 39.8101 11.52 41.7801C13.45 41.2801 16.83 39.9101 19.17 38.9801C20.12 38.6001 20.35 37.3501 19.58 36.6601C18.71 35.8901 17.69 34.7601 16.98 32.6501C16.69 31.7801 16.08 31.0301 15.3 30.5401C-0.550005 20.5901 10.28 20.0701 23.5 23.7801Z" fill="white" fill-opacity="0.0" stroke="none" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
        </div>
        <div className={css(indexStyles.engel_tekst)}>
          {isHovered ?
            <div>
              <h3>CASPART IS...</h3>
              <h1><span className={textFade}>A FULL-SERVICE BR</span>AN<span className={textFade}>D</span> EXPIERENCE</h1><h1 className={css(indexStyles.single_D)}>D</h1>
              <h1><span className={textFade}>& PACKAGING</span> DESIGN AGENCY</h1>
            </div>
          :
            <div>
              <h3>CASPART IS...</h3>
              <h1><span className={noTextFade}>A FULL-SERVICE BR</span>AN<span className={noTextFade}>D</span> EXPIERENCE</h1><h1 className={css(indexStyles.no_single_D)}>D</h1>
              <h1><span className={noTextFade}>& PACKAGING</span> DESIGN AGENCY</h1>
            </div>
          }
        </div>
        <div className={css(indexStyles.engel)}>
          <Img fluid={props.data.engel.childImageSharp.fluid}/>
        </div>
        <svg className={css(indexStyles.arrow_down)} width="47" height="12" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Link to="/concept">
            <path d="M46 1.5L23.5 10L1 1.5" stroke="black" stroke-width="2"/>
          </Link>
        </svg>
      </div>
    </Layout>
  )
}

export default IndexPage

const indexStyles = StyleSheet.create({

  page_container: {
    margin: '0 auto',
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: '1fr 8fr 1fr',
    gridTemplateRows: '1fr 8fr 1fr',
    overflow: 'hidden'
  },

  engel_tekst: {
    zIndex: '10',
    textAlign: 'right',
    placeSelf: 'center',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4'
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
    transition: 'opacity 1.8s ease',
    position: 'absolute',
    marginLeft: '654px',
    marginTop: '-44px'
  },

  no_single_D: {
    transition: 'opacity 1s ease',
    position: 'absolute',
    marginLeft: '654px',
    marginTop: '-44px',
    opacity: '0'
  },

  engel: {
    placeSelf: 'center',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    width: '65vw',
    margin: 'auto',
    display: 'block'
  },

  svg_container: {
    zIndex: '120',
    placeSelf: 'center',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4'
  },

  hover_area_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '65vw',
  },

  arrow_down: {
    zIndex: '300',
    placeSelf: 'center',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '3',
    gridRowEnd: '4'
  }

})
