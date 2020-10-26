import React from 'react'
import { graphql, Link } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

function ConceptPage (props) {

  return(
    <Layout>
      <SEO title="Concept"/>
      <div className={css(conceptStyles.page_container)}>
        <svg className={css(conceptStyles.arrow_up)} width="47" height="12" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Link to="/">
            <path d="M46 10.5L23.5 2L1 10.5" stroke="#790722" stroke-width="2"/>
          </Link>
        </svg>
        <div className={css(conceptStyles.content_container)}>
          <h1>WHAT WE DO</h1>
          <p>Casp’art is een inspirerend Antwerps ontwerpbureau boordevol frisse ideeën met de drive deze doelgericht</p>
          <p>te vertalen naar de wensen van uw product.</p>
          <p>Of het nu gaat om uw <b>brand identity</b>, <b>packaging design</b>, <b>style guides</b> of <b>food styling</b>,</p>
          <p>wir shaffen das!</p>
          <p>In een markt met steeds wisselende trends, verstaan wij de kunst</p>
          <div>
            
          </div>
        </div>
        <svg className={css(conceptStyles.arrow_down)} width="47" height="12" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Link to="/concept">
            <path d="M46 1.5L23.5 10L1 1.5" stroke="black" stroke-width="2"/>
          </Link>
        </svg>
      </div>
    </Layout>
  )
}

export default ConceptPage

const conceptStyles = StyleSheet.create({

  page_container: {
    margin: '0 auto',
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: '1fr 8fr 1fr',
    gridTemplateRows: '1fr 8fr 1fr',
    overflow: 'hidden'
  },

  content_container: {
    placeSelf: 'center',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    textAlign: 'center'
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
