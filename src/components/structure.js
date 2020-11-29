import { StyleSheet, css } from 'aphrodite'

import Layout from './layout'
import { Link } from 'gatsby'
import React from 'react'
import SEO from './seo'

function Structure (props) {

    const arrowUp = 
        <>
            {props.up ? 
                <Link className={css(structureStyles.arrow_up)} cover to={props.up}>
                        <svg width="47" height="12" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46 10.5L23.5 2L1 10.5" stroke="black" strokeWidth="2"/>
                    </svg>
                </Link>
            :
                <div/>
            }
        </>

    const arrowDown = 
        <>
            {props.down ? 
                <Link id="downToConcept" className={css(structureStyles.arrow_down)} to={props.down}>
                    <svg  width="47" height="12" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46 1.5L23.5 10L1 1.5" stroke="black" strokeWidth="2"/>
                    </svg>
                </Link>
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

  content_container: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    overflow: 'auto',
    '::-webkit-scrollbar': {
      display: 'none'
    },
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: '65vw'
  },

  arrow_up: {
    zIndex: '300',
    placeSelf: 'center',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '2'
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
