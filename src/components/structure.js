import { StyleSheet, css } from 'aphrodite'

import BackdropFilter from 'react-backdrop-filter'
import Layout from './layout'
import { Link } from 'gatsby'
import React from 'react'
import SEO from './seo'

function Structure (props) {

  const arrowUp = 
      <>
          {props.up ? 
            <div className={css(structureStyles.button, structureStyles.button_up)} >
              <Link className={css(structureStyles.button_hover)} to={props.up}>
                  <div className={css(structureStyles.arrow_up)}>
                    <svg width="49" height="17" viewBox="0 0 49 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48.5 16.5L24.5 1.5L0.499999 16.5" stroke="black" strokeWidth="4"/>
                    </svg>
                  </div>
              </Link>
            </div>
          :
              <div/>
          }
      </>

  const arrowDown = 
      <>
          {props.down ? 
            <BackdropFilter className={css(structureStyles.button, structureStyles.button_down)} filter={"blur(10px) saturate(180%) contrast(35%) brightness(155%)"} canvasFallback={false}>
              <Link className={css(structureStyles.button_hover)} to={props.down}>
                  <div id="downToConcept" className={css(structureStyles.arrow_down)}>
                    <svg width="49" height="17" viewBox="0 0 49 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 0.499999L24.5 15.5L48.5 0.5" stroke="black" strokeWidth="4"/>
                    </svg>
                  </div>
              </Link>
            </BackdropFilter>
          :
              <div/>
          }
      </>

  const arrowBack = 
    <>
        {props.back === "true" ? 
          <BackdropFilter className={css(structureStyles.button, structureStyles.button_down)} filter={"blur(10px) saturate(180%) contrast(35%) brightness(155%)"} canvasFallback={false}>
            <Link className={css(structureStyles.button_hover)} to="/concept">
                <div id="downToConcept" className={css(structureStyles.arrow_back)}>
                  <svg width="17" height="50" viewBox="0 0 17 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1L1 25L16 49" stroke="black" strokeWidth="4"/>
                  </svg>
                </div>
            </Link>
          </BackdropFilter>
        :
            <div/>
        }
    </>



  return(
      <Layout>
          <SEO title={props.title}/>
          <div className={css(structureStyles.page_container)}>
              {arrowUp}
              <div className={css(structureStyles.content_container)}>
                  {props.children}
              </div>
              {arrowDown}
              {arrowBack}
          </div>
      </Layout>
  )
}

export default Structure

const structureStyles = StyleSheet.create({

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

  button: {
    zIndex: '900',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'grid',
    placeItems: 'center',
    gridColumnStart: '1',
    gridColumnEnd: '4',
  },

  button_hover: {
    zIndex: '0',
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    transition: 'backdrop-filter 0.5s',
    ':hover': {
      ':nth-child(1n) > div ': {
        cursor: 'pointer',
        filter: 'invert(0%) opacity(70%)'
      }
    }
  },

  button_up: {
    gridRowStart: '1',
    gridRowEnd: '2',
  },

  button_down: {
    gridRowStart: '3',
    gridRowEnd: '4',
  },

  content_container: {
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: '100%'
  },

  arrow_up: {
    zIndex: '300',
    transition: 'filter 0.5s',
    filter: 'invert(50%) opacity(30%)'
  },

  arrow_down: {
    zIndex: '300',
    transition: 'filter 0.5s',
    filter: 'invert(50%) opacity(30%)'
  },

  arrow_back: {
    zIndex: '300',
    transition: 'filter 0.5s',
    filter: 'invert(50%) opacity(30%)'
  }

})
