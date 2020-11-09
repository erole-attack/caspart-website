import React from 'react'
import { graphql, Link } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import useHover from '../components/hooks'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

export const conceptImageQuery = graphql`
  query {
    pistache: file(relativePath: { eq: "pistachenootjes.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    superfood: file(relativePath: { eq: "superfood.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nougat: file(relativePath: { eq: "nougat-cranberry.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bio: file(relativePath: { eq: "bio.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pasen: file(relativePath: { eq: "pasen.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    delicono: file(relativePath: { eq: "delicono.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    moony: file(relativePath: { eq: "moony-cakes.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    joes: file(relativePath: { eq: "trader-joes.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function ConceptPage (props) {

  const [bioRef, bioIsHovered] = useHover()
  const [pasenRef, pasenIsHovered] = useHover()
  const [deliconoRef, deliconoIsHovered] = useHover()
  const [moonyRef, moonyIsHovered] = useHover()
  const [joesRef, joesIsHovered] = useHover()

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
          <div className={css(conceptStyles.images_container)}>
            <div className={css(conceptStyles.category_selector)}>
            {deliconoIsHovered ?
              <div className={css(conceptStyles.pistache_container)}>
                <Link className={css(conceptStyles.pistache_upper_hover)} ref={deliconoRef} to='/brand-identity-delicono'/>
                <Link className={css(conceptStyles.pistache_middle_hover)} ref={moonyRef} to='/brand-identity-moony'/>
                <Link className={css(conceptStyles.pistache_lower_hover)} ref={joesRef} to='/brand-identity-trader-joes'/>
                <div className={css(conceptStyles.pistache_button_container)}>
                  <div className={css(conceptStyles.pistache_wrapper)}>
                    <Img className={css(conceptStyles.button)} fluid={props.data.delicono.childImageSharp.fluid}/>
                  </div>
                  <div className={css(conceptStyles.pistache_wrapper)}>
                    <Img className={css(conceptStyles.button, conceptStyles.desaturated)} fluid={props.data.moony.childImageSharp.fluid}/>
                  </div>
                  <div className={css(conceptStyles.pistache_wrapper)}>
                    <Img className={css(conceptStyles.button, conceptStyles.desaturated)} fluid={props.data.joes.childImageSharp.fluid}/>
                  </div>
                </div>
                <Img className={css(conceptStyles.pistache_image, conceptStyles.desaturated)} fluid={props.data.pistache.childImageSharp.fluid}/>
              </div>
            :
              (moonyIsHovered ?
                <div className={css(conceptStyles.pistache_container)}>
                  <Link className={css(conceptStyles.pistache_upper_hover)} ref={deliconoRef} to='/brand-identity-delicono'/>
                  <Link className={css(conceptStyles.pistache_middle_hover)} ref={moonyRef} to='/brand-identity-moony'/>
                  <Link className={css(conceptStyles.pistache_lower_hover)} ref={joesRef} to='/brand-identity-trader-joes'/>
                  <div className={css(conceptStyles.pistache_button_container)}>
                    <div className={css(conceptStyles.pistache_wrapper)}>
                      <Img className={css(conceptStyles.button, conceptStyles.desaturated)} fluid={props.data.delicono.childImageSharp.fluid}/>
                    </div>
                    <div className={css(conceptStyles.pistache_wrapper)}>
                      <Img className={css(conceptStyles.button)} fluid={props.data.moony.childImageSharp.fluid}/>
                    </div>
                    <div className={css(conceptStyles.pistache_wrapper)}>
                      <Img className={css(conceptStyles.button, conceptStyles.desaturated)} fluid={props.data.joes.childImageSharp.fluid}/>
                    </div>
                  </div>
                  <Img className={css(conceptStyles.pistache_image, conceptStyles.desaturated)} fluid={props.data.pistache.childImageSharp.fluid}/>
                </div>
              :
                (joesIsHovered ?
                  <div className={css(conceptStyles.pistache_container)}>
                    <Link className={css(conceptStyles.pistache_upper_hover)} ref={deliconoRef} to='/brand-identity-delicono'/>
                    <Link className={css(conceptStyles.pistache_middle_hover)} ref={moonyRef} to='/brand-identity-moony'/>
                    <Link className={css(conceptStyles.pistache_lower_hover)} ref={joesRef} to='/brand-identity-trader-joes'/>
                    <div className={css(conceptStyles.pistache_button_container)}>
                      <div className={css(conceptStyles.pistache_wrapper)}>
                        <Img className={css(conceptStyles.button, conceptStyles.desaturated)} fluid={props.data.delicono.childImageSharp.fluid}/>
                      </div>
                      <div className={css(conceptStyles.pistache_wrapper)}>
                        <Img className={css(conceptStyles.button, conceptStyles.desaturated)} fluid={props.data.moony.childImageSharp.fluid}/>
                      </div>
                      <div className={css(conceptStyles.pistache_wrapper)}>
                        <Img className={css(conceptStyles.button)} fluid={props.data.joes.childImageSharp.fluid}/>
                      </div>
                    </div>
                    <Img className={css(conceptStyles.pistache_image, conceptStyles.desaturated)} fluid={props.data.pistache.childImageSharp.fluid}/>
                  </div>
                :
                <div className={css(conceptStyles.pistache_container)}>
                  <Link className={css(conceptStyles.pistache_upper_hover)} ref={deliconoRef} to='/brand-identity-delicono'/>
                  <Link className={css(conceptStyles.pistache_middle_hover)} ref={moonyRef} to='/brand-identity-moony'/>
                  <Link className={css(conceptStyles.pistache_lower_hover)} ref={joesRef} to='/brand-identity-trader-joes'/>
                  <div className={css(conceptStyles.pistache_button_container)}/>
                  <Img className={css(conceptStyles.pistache_image)} fluid={props.data.pistache.childImageSharp.fluid}/>
                </div>
              ))
            }
              <p>Brand Identity</p>
            </div>
            <div className={css(conceptStyles.category_selector)}>
              <div className={css(conceptStyles.category_container)}>
                <Img className={css(conceptStyles.image)} fluid={props.data.superfood.childImageSharp.fluid}/>
              </div>
              <p>Packaging Design</p>
            </div>
            <div className={css(conceptStyles.category_selector)}>
              {bioIsHovered ?
                <div className={css(conceptStyles.category_container)}>
                  <Link className={css(conceptStyles.image_upper_hover)} ref={bioRef} to='/style-guides-bio'/>
                  <Link className={css(conceptStyles.image_lower_hover)} ref={pasenRef} to='/style-guides-pasen'/>
                  <div className={css(conceptStyles.button_container)}>
                    <div className={css(conceptStyles.button_wrapper)}>
                      <Img className={css(conceptStyles.button)} fluid={props.data.bio.childImageSharp.fluid}/>
                    </div>
                    <div className={css(conceptStyles.button_wrapper)}>
                      <Img className={css(conceptStyles.button, conceptStyles.desaturated)} fluid={props.data.pasen.childImageSharp.fluid}/>
                    </div>
                  </div>
                  <Img className={css(conceptStyles.image, conceptStyles.desaturated)} fluid={props.data.nougat.childImageSharp.fluid}/>
                </div>
              :
                (pasenIsHovered ?
                  <div className={css(conceptStyles.category_container)}>
                    <Link className={css(conceptStyles.image_upper_hover)} ref={bioRef} to='/style-guides-bio'/>
                    <Link className={css(conceptStyles.image_lower_hover)} ref={pasenRef} to='/style-guides-pasen'/>
                    <div className={css(conceptStyles.button_container)}>
                      <div className={css(conceptStyles.button_wrapper)}>
                        <Img className={css(conceptStyles.button, conceptStyles.desaturated)} fluid={props.data.bio.childImageSharp.fluid}/>
                      </div>
                      <div className={css(conceptStyles.button_wrapper)}>
                        <Img className={css(conceptStyles.button)} fluid={props.data.pasen.childImageSharp.fluid}/>
                      </div>
                    </div>
                    <Img className={css(conceptStyles.image, conceptStyles.desaturated)} fluid={props.data.nougat.childImageSharp.fluid}/>
                  </div>
                :
                  <div className={css(conceptStyles.category_container)}>
                    <div className={css(conceptStyles.image_upper_hover)} ref={bioRef}/>
                    <div className={css(conceptStyles.image_lower_hover)} ref={pasenRef}/>
                    <div className={css(conceptStyles.button_container)}/>
                    <Img className={css(conceptStyles.image)} fluid={props.data.nougat.childImageSharp.fluid}/>
                  </div>
                )
              }
            <p>Style Guides</p>
          </div>
        </div>
          <h1>OUR TEAM</h1>
          <p>Als enthousiaste creatievelingen met de nodige skills, zijn we flexibel en gedreven om elke opdracht</p>
          <p>- klein of groot - met evenveel passie uit te werken. Geen uitdaging is ons te groot!</p>
        </div>
        <svg className={css(conceptStyles.arrow_down)} width="47" height="12" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Link to="/work">
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
    gridRowStart: '2',
    gridRowEnd: '3',
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
  },

  images_container: {
    width: '50vw',
    margin: 'auto',
    display: 'flex'
  },

  category_selector: {
    width: '15vw',
    flexGrow: '1',
    margin: '10px'
  },

  category_container: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '50% 50%',
    placeItems: 'center',
    height: '15vw'
  },

  pistache_container: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '1fr 1fr 1fr',
    placeItems: 'center',
    height: '15vw'
  },

  image_upper_hover: {
    opacity: '0',
    zIndex: '4000',
    width: '15vw',
    height: '7.5vw',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
    ':hover': {
      cursor: 'pointer'
    }
  },

  image_lower_hover: {
    cursor: 'pointer',
    opacity: '0',
    zIndex: '4000',
    width: '15vw',
    height: '7.5vw',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '2',
    gridRowEnd: '3'
  },

  pistache_upper_hover: {
    cursor: 'pointer',
    opacity: '0',
    zIndex: '4000',
    width: '15vw',
    height: '5vw',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2'
  },

  pistache_middle_hover: {
    cursor: 'pointer',
    opacity: '0',
    zIndex: '4000',
    width: '15vw',
    height: '5vw',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '2',
    gridRowEnd: '3'
  },

  pistache_lower_hover: {
    cursor: 'pointer',
    opacity: '0',
    zIndex: '4000',
    width: '15vw',
    height: '5vw',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '3',
    gridRowEnd: '4'
  },

  image: {
    transition: 'filter 1s ease',
    width: '15vw',
    height: '15vw',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '3'
  },

  pistache_image: {
    transition: 'filter 1s ease',
    width: '15vw',
    height: '15vw',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '4'
  },

  desaturated: {
    transition: 'filter 1s ease',
    filter: 'saturate(5%) contrast(1.5) brightness(85%) blur(1px)'
  },

  button_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: '1',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '3'
  },

  pistache_button_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: '1',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '4'
  },

  button_wrapper: {
    height: '6vw',
    marginTop: '0.5vw',
    marginBottom: '0.5vw',
    width: '15vw',
    clipPath: 'inset(0vw 1vw 0vw 1vw)'
  },

  pistache_wrapper: {
    height: '4vw',
    marginTop: '0.25vw',
    marginBottom: '0.25vw',
    width: '15vw',
    clipPath: 'inset(0vw 1vw 0vw 1vw)'
  },

  invisible: {
    opacity: '0'
  }

})
