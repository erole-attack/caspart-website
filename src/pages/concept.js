import { Link, graphql } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import React from 'react'
import Structure from '../components/structure'
import useHover from '../components/hooks'

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
function BrandIdentityHover (props) {

  const deliconoStyle = () => { return(props.target === "delicono" ? conceptStyles.button : conceptStyles.desaturated) }
  const moonyStyle = () => { return(props.target === "moony" ? conceptStyles.button : conceptStyles.desaturated) }
  const joesStyle = () => { return(props.target === "joes" ? conceptStyles.button : conceptStyles.desaturated) }

  return(
    <div className={css(conceptStyles.pistache_container)}>
      <Link className={css(conceptStyles.pistache_upper_hover)} ref={props.deliconoref} to='/brand-identity-delicono'/>
      <Link className={css(conceptStyles.pistache_middle_hover)} ref={props.moonyref} to='/brand-identity-moony'/>
      <Link className={css(conceptStyles.pistache_lower_hover)} ref={props.joesref} to='/brand-identity-trader-joes'/>
      <div className={css(conceptStyles.pistache_button_container)}>
        <div className={css(conceptStyles.pistache_wrapper)}>
          <Img className={css(deliconoStyle())} fluid={props.deliconoimg}/>
        </div>
        <div className={css(conceptStyles.pistache_wrapper)}>
          <Img className={css(moonyStyle())} fluid={props.moonyimg}/>
        </div>
        <div className={css(conceptStyles.pistache_wrapper)}>
          <Img className={css(joesStyle())} fluid={props.joesimg}/>
        </div>
      </div>
      <Img className={css(conceptStyles.pistache_image)} fluid={props.pistacheimg}/>
    </div>
  )
}

function StyleGuidesHover (props) {

  const bioStyle = () => { return(props.target === "bio" ? conceptStyles.button : conceptStyles.desaturated) }
  const pasenStyle = () => { return(props.target === "pasen" ? conceptStyles.button : conceptStyles.desaturated) }

  return(
    <div className={css(conceptStyles.category_container)}>
      <Link className={css(conceptStyles.image_upper_hover)} ref={props.bioref} to='/style-guides-bio'/>
      <Link className={css(conceptStyles.image_lower_hover)} ref={props.pasenref} to='/style-guides-pasen'/>
      <div className={css(conceptStyles.button_container)}>
        <div className={css(conceptStyles.button_wrapper)}>
          <Img className={css(bioStyle())} fluid={props.bioimg}/>
        </div>
        <div className={css(conceptStyles.button_wrapper)}>
          <Img className={css(pasenStyle())} fluid={props.pasenimg}/>
        </div>
      </div>
      <Img className={css(conceptStyles.image)} fluid={props.nougatimg}/>
    </div>
  )
}

function Concept (props) {

  const [bioRef, bioIsHovered] = useHover()
  const [pasenRef, pasenIsHovered] = useHover()
  const [deliconoRef, deliconoIsHovered] = useHover()
  const [moonyRef, moonyIsHovered] = useHover()
  const [joesRef, joesIsHovered] = useHover()

  const brandIdentity =
    <div className={css(conceptStyles.category_selector)}>
      {deliconoIsHovered ?
        <BrandIdentityHover target="delicono" deliconoref={deliconoRef} moonyref={moonyRef} joesref={joesRef} deliconoimg={props.data.delicono.childImageSharp.fluid} moonyimg={props.data.moony.childImageSharp.fluid} joesimg={props.data.joes.childImageSharp.fluid} pistacheimg={props.data.pistache.childImageSharp.fluid}/>
      :
        (moonyIsHovered ?
          <BrandIdentityHover target="moony" deliconoref={deliconoRef} moonyref={moonyRef} joesref={joesRef} deliconoimg={props.data.delicono.childImageSharp.fluid} moonyimg={props.data.moony.childImageSharp.fluid} joesimg={props.data.joes.childImageSharp.fluid} pistacheimg={props.data.pistache.childImageSharp.fluid}/>
        :
          (joesIsHovered ?
            <BrandIdentityHover target="joes" deliconoref={deliconoRef} moonyref={moonyRef} joesref={joesRef} deliconoimg={props.data.delicono.childImageSharp.fluid} moonyimg={props.data.moony.childImageSharp.fluid} joesimg={props.data.joes.childImageSharp.fluid} pistacheimg={props.data.pistache.childImageSharp.fluid}/>
          :
          <div className={css(conceptStyles.pistache_container)}>
            <Link className={css(conceptStyles.pistache_upper_hover)} ref={deliconoRef} to='/brand-identity-delicono'/>
            <Link className={css(conceptStyles.pistache_middle_hover)} ref={moonyRef} to='/brand-identity-moony'/>
            <Link className={css(conceptStyles.pistache_lower_hover)} ref={joesRef} to='/brand-identity-trader-joes'/>
            <div className={css(conceptStyles.pistache_button_container)}/>
            <Img className={css(conceptStyles.pistache_image)} fluid={props.data.pistache.childImageSharp.fluid}/>
          </div>
          ) 
        )
      }
      <p>Brand Identity</p>
    </div>

  const packagingDesign =
    <div className={css(conceptStyles.category_selector)}>
      <Link to='/work' className={css(conceptStyles.category_container)}>
        <Img className={css(conceptStyles.image)} fluid={props.data.superfood.childImageSharp.fluid}/>
      </Link>
      <p>Packaging Design</p>
    </div>

  const styleGuides =
    <div className={css(conceptStyles.category_selector)}>
    {bioIsHovered ?
      <StyleGuidesHover target="bio" bioref={bioRef} pasenref={pasenRef} bioimg={props.data.bio.childImageSharp.fluid} pasenimg={props.data.pasen.childImageSharp.fluid} nougatimg={props.data.nougat.childImageSharp.fluid}/>
    :
      (pasenIsHovered ?
        <StyleGuidesHover target="pasen" bioref={bioRef} pasenref={pasenRef} bioimg={props.data.bio.childImageSharp.fluid} pasenimg={props.data.pasen.childImageSharp.fluid} nougatimg={props.data.nougat.childImageSharp.fluid}/>
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

  const whoWeAre =
    <div className={css(conceptStyles.who_we_are)}>
      <h1 className={css(conceptStyles.titles)}>WHAT WE DO</h1>
      <p>Casp’art is een inspirerend Antwerps ontwerpbureau boordevol frisse ideeën met de drive deze doelgericht</p>
      <p>te vertalen naar de wensen van uw product.</p>
      <p>Of het nu gaat om uw <b>brand identity</b>, <b>packaging design</b>, <b>style guides</b> of <b>food styling</b>,</p>
      <p>wir shaffen das!</p>
      <p>In een markt met steeds wisselende trends, verstaan wij de kunst om creativiteit te vertalen</p>
      <p>naar de noden van uw product.</p>
    </div>

  const conceptItems = 
    <div className={css(conceptStyles.concept_items)}>
      {brandIdentity}
      {packagingDesign}
      {styleGuides}
    </div>

  const theTeam =
    <div className={css(conceptStyles.the_team)}>
      <h1 className={css(conceptStyles.titles)}>OUR TEAM</h1>
      <p>Als enthousiaste creatievelingen met de nodige skills, zijn we flexibel en gedreven om elke opdracht</p>
      <p>- klein of groot - met evenveel passie uit te werken. Geen uitdaging is ons te groot!</p>
    </div>

  return(
    <Structure title="Concept" up="/" down="/work">
      <div className={css(conceptStyles.center_items)}>
        {whoWeAre}
        {conceptItems}
        {theTeam}
      </div>
    </Structure>
  )
}

export default Concept

const conceptStyles = StyleSheet.create({

  center_items: {
    width: '100%',
    height: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
    placeItems: 'center',
    overflow: 'hidden',
    zIndex: '900'
  },

  who_we_are: {
    gridRow: '1 / 2',
    marginBottom: '0',
    alignSelf: 'end',
    marginBottom: '0',
  },

  concept_items: {
    gridRow: '2 / 3',
    width: '50vw',
    display: 'flex'
  },

  the_team: {
    marginTop: '2vw',
    alignSelf: 'start',
    gridRow: '3 / 4',
  },

  titles: {
    marginTop: '0',
    fontWeight: '700',
    color: '#A6A7AA',
    letterSpacing: '0.5vw'
  },

  category_selector: {
    width: '14.9vw',
    height: '14.9vw',
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
    filter: 'saturate(5%) contrast(0.75) brightness(130%)'
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
    height: '7.5vw',
    width: '15vw'
  },

  pistache_wrapper: {
    height: '5vw',
    width: '15vw'
  },

  invisible: {
    opacity: '0'
  }

})
