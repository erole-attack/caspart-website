import { StyleSheet, css } from 'aphrodite'
import { graphql, useStaticQuery } from "gatsby"

import ImageGridMobile from '../components/imageGridMobile'
import Img from 'gatsby-image'
import JSONData from "../content/clientlist.json"
import React from "react"
import engeltje from '../images/engel-fly-mobile.gif'

function Mobile (props) {

  const data = useStaticQuery(graphql`
    query {
      engel: file(relativePath: {eq: "grote-engel.png"}) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      olijfolie: file(relativePath: { eq: "al-oud-olijfolie.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blauweEngel: file(relativePath: { eq: "blauwe-engel.png" }) {
        childImageSharp {
          fluid(maxWidth: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      delicono2: file(relativePath: { eq: "delicono2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      delicono3: file(relativePath: { eq: "delicono3.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      delicono4: file(relativePath: { eq: "delicono4.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      moony2: file(relativePath: { eq: "moony2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      moony1: file(relativePath: { eq: "moony1.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      moony3: file(relativePath: { eq: "moony3.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      moony4: file(relativePath: { eq: "moony4.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      joes: file(relativePath: { eq: "trader-joes-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruit1: file(relativePath: { eq: "soft-fruit1.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruit2: file(relativePath: { eq: "soft-fruit2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pistache1: file(relativePath: { eq: "pistache1.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bio1: file(relativePath: { eq: "bio1.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bio2: file(relativePath: { eq: "bio2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bio3: file(relativePath: { eq: "bio3.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bio4: file(relativePath: { eq: "bio4.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bio5: file(relativePath: { eq: "bio5.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bio6: file(relativePath: { eq: "bio6.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bio7: file(relativePath: { eq: "bio7.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasen1: file(relativePath: { eq: "pasen1.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasen2: file(relativePath: { eq: "pasen2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasen3: file(relativePath: { eq: "pasen3.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasen4: file(relativePath: { eq: "pasen4.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasen5: file(relativePath: { eq: "pasen5.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasen6: file(relativePath: { eq: "pasen6.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasen7: file(relativePath: { eq: "pasen7.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasen8: file(relativePath: { eq: "pasen8.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "caspart-logo.png" }) {
        childImageSharp {
            fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    }
  `)

   const welcomeMessage = 
    <div className={css(mobileStyles.engel_tekst)}>
        <div className={css(mobileStyles.text_container)}>
          <h3 className={css(mobileStyles.titles, mobileStyles.text_part1)}>CASP'ART IS</h3>
          <div className={css(mobileStyles.text_part2)}><h1 className={css(mobileStyles.titles)}>A FULL-SERVICE BRAND EXPIERENCE</h1></div>
          <div className={css(mobileStyles.text_part3)}><h1 className={css(mobileStyles.titles)}>& PACKAGING DESIGN AGENCY</h1></div>
        </div>
    </div>

  const engel = 
    <div className={css(mobileStyles.engel_container)}>
      <Img className={css(mobileStyles.engel)} fluid={data.engel.childImageSharp.fluid}/>
    </div>
  
  const whoWeAre =
    <div id="about">
      <h1 className={css(mobileStyles.title)}>WHAT WE DO</h1>
      <p className={css(mobileStyles.paragrhaph)}>Casp’art is een inspirerend Antwerps</p> 
      <p className={css(mobileStyles.paragrhaph)}>ontwerpbureau boordevol frisse </p>
      <p className={css(mobileStyles.paragrhaph)}>ideeën met de drive deze doelgericht te</p> 
      <p className={css(mobileStyles.paragrhaph)}>vertalen naar de wensen </p>
      <p className={css(mobileStyles.paragrhaph)}>van uw product.</p>
      <p className={css(mobileStyles.paragrhaph)}>Of het nu gaat om uw </p>
      <p className={css(mobileStyles.paragrhaph)}><b>brand identity</b>, <b>packaging design</b>,</p>
      <p className={css(mobileStyles.paragrhaph)}><b>style guides</b> of <b>food styling</b>,</p>
      <p className={css(mobileStyles.paragrhaph)}>we're a match!</p>
      <br className={css(mobileStyles.break)}/>
      <p className={css(mobileStyles.paragrhaph)}>In een markt met steeds wisselende</p> 
      <p className={css(mobileStyles.paragrhaph)}>trends, verstaan wij de kunst om</p> 
      <p className={css(mobileStyles.paragrhaph)}>creativiteit te vertalen</p>
      <p className={css(mobileStyles.paragrhaph)}>naar de noden van uw product.</p>
    </div>

  const theTeam =
    <div>
      <h1 className={css(mobileStyles.title)}>OUR TEAM</h1>
      <p className={css(mobileStyles.paragrhaph)}>Als enthousiaste creatievelingen met de</p>
      <p className={css(mobileStyles.paragrhaph)}>nodige skills, zijn we flexibel en gedreven</p>
      <p className={css(mobileStyles.paragrhaph)}>om elke opdracht- klein of groot -</p>
      <p className={css(mobileStyles.paragrhaph)}>met evenveel passie uit te werken.</p> 
      <p className={css(mobileStyles.paragrhaph)}>Geen uitdaging is ons te groot!</p>
    </div>

  const brandIdentity =
    <>
      <div>
        <h1 className={css(mobileStyles.title)}>BRAND <br/>IDENTITY</h1>
      </div>
      <Img className={css(mobileStyles.large_image)} fluid={data.delicono2.childImageSharp.fluid}/>
      <div className={css(mobileStyles.text_block)}>
        <p className={css(mobileStyles.caption)}>Delicono voor <b>Jacques Ice</b></p>
        <p className={css(mobileStyles.paragrhaph, mobileStyles.justify)}>
          De ontwikkeling van een verfijnd logo
          voor een luxe product, welke de kwaliteit
          van het product benadrukt en een 
          afspiegeling is van de rijke chocolade-leefwereld.</p>
      </div>
      <Img className={css(mobileStyles.large_image)} fluid={data.delicono3.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.delicono4.childImageSharp.fluid}/>
      <div className={css(mobileStyles.space_between)}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.moony2.childImageSharp.fluid}/>
      <div className={css(mobileStyles.text_block)}>
      <p className={css(mobileStyles.caption)}>Moony cakes voor <b>Chatar</b></p>
        <p className={css(mobileStyles.paragrhaph, mobileStyles.justify)}>
          Een sterk en herkenbaar logo voor
          producten met een jong en eigentijds
          imago, doch met een betrouwbare
          authenticiteit. Een duurzaam ontwerp
          behoudt zijn waarde en zorgt voor een
          grote naambekendheid.
        </p>
      </div>
      <Img className={css(mobileStyles.large_image)} fluid={data.moony1.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.moony3.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.moony4.childImageSharp.fluid}/>
      <div className={css(mobileStyles.space_between)}/>
      <Img className={css(mobileStyles.large_image, mobileStyles.less_margin)} fluid={data.joes.childImageSharp.fluid}/>
      <div className={css(mobileStyles.text_block)}>
        <p className={css(mobileStyles.caption)}>Trader Joe’s voor <b>Aldi</b></p>
        <p className={css(mobileStyles.paragrhaph, mobileStyles.justify)}>
          Logo ‘American Style’, passend bij de
          merknaam en het product; de stijl werd
          verder doorgevoerd op de verpakkingen.</p>
      </div>
      <Img className={css(mobileStyles.large_image)} fluid={data.fruit1.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.fruit2.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.pistache1.childImageSharp.fluid}/>
    </>

  const styleGuides =
    <>
      <div>
        <h1 className={css(mobileStyles.title)}>STYLE GUIDES</h1>
      </div>
      <Img className={css(mobileStyles.large_image)} fluid={data.bio1.childImageSharp.fluid}/>
      <div>
        <p className={css(mobileStyles.caption)}>gamma Bio voor <b>Aldi</b></p>
      </div>
      <Img className={css(mobileStyles.large_image, mobileStyles.less_margin)} fluid={data.bio2.childImageSharp.fluid}/>
      <div className={css(mobileStyles.text_block)}>
        <p className={css(mobileStyles.paragrhaph, mobileStyles.justify)}>
          Ontwikkelen van jonge en frisse basis-
          stijl voor de BIO-range van Aldi. Elk product
          behoudt zijn eigen merknaam onder de
          noemer BIO. Door de ontwikkeling van
          een basiscompositie met een herkenbare
          band bovenaan in combinatie met de
          BIO-stempel, ontstaat er een uniformiteit
          ongeacht het soort product.
        </p>
      </div>
      <Img className={css(mobileStyles.small_image)} fluid={data.bio3.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.bio4.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.bio5.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.bio6.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.bio7.childImageSharp.fluid}/>
      <div className={css(mobileStyles.space_between)}/>
      <div className={css(mobileStyles.space_between)}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.pasen1.childImageSharp.fluid}/>
      <div>
        <p className={css(mobileStyles.caption)}>Pasen voor <b>Aldi</b></p>
      </div>
      <Img className={css(mobileStyles.large_image)} fluid={data.pasen2.childImageSharp.fluid}/>
      <div className={css(mobileStyles.text_block)}>
        <p className={css(mobileStyles.paragrhaph, mobileStyles.justify_pasen)}>
          Ontwikkeling van een tijdloos paasgamma
          voor Aldi. Gedurfd afwijken van het klassieke
          geel / groen en opteren voor een eigentijdse
          look. Eenvoudig te vertalen naar de
          verschillende producten en verpakkingen.</p>
      </div>
      <Img className={css(mobileStyles.large_image)} fluid={data.pasen3.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.pasen4.childImageSharp.fluid}/>
      <Img className={css(mobileStyles.large_image)} fluid={data.pasen5.childImageSharp.fluid}/>
      <div className={css(mobileStyles.image_duo)}>
        <Img className={css(mobileStyles.medium_image)} fluid={data.pasen6.childImageSharp.fluid}/>
        <Img className={css(mobileStyles.small_image)} fluid={data.pasen7.childImageSharp.fluid}/>
      </div>
      <Img className={css(mobileStyles.large_image)} fluid={data.pasen8.childImageSharp.fluid}/>
    </>

  const JSONclientlist = () => (
    <>
      <h1 id="clients" className={css(mobileStyles.title)}>CLIENTS</h1>
      <div className={css(mobileStyles.list)}>
        <hr className={css(mobileStyles.hr)}/>
        {JSONData.content.map((data, index) => {
            return (
                <>
                    <p key={`content_client_${index}`} className={css(mobileStyles.clients)}>{data.client.toUpperCase()}</p>
                    <hr className={css(mobileStyles.hr)}/>
                </>
            )    
        })}
      </div>
    </>
  )

  const contact = 
    <>
      <h1 id="contact" className={css(mobileStyles.title)}>CONTACT</h1>
      <Img className={css(mobileStyles.logo)} fluid={data.logo.childImageSharp.fluid}/>
      <div className={css(mobileStyles.contact_information)}>
        <div>
            <p className={css(mobileStyles.paragrhaph_small)}>CASP’ART B.V.</p>
            <p className={css(mobileStyles.paragrhaph_small)}>Venneborglaan 98</p>
            <p className={css(mobileStyles.paragrhaph_small)}>2100 Antwerpen</p>
            <p className={css(mobileStyles.paragrhaph_small)}>0032/(0)3 326 01 96</p>
            <p className={css(mobileStyles.paragrhaph_small)}>Contactpersoon: Claire Bauwens</p>
            <p className={css(mobileStyles.paragrhaph_small)}>claire@caspart.be</p>
        </div>
      </div>
      <form className={css(mobileStyles.contact_form)} method="post" action="https://formspree.io/f/xleoazpz">
        <label className={css(mobileStyles.name_input)}>
          <input className={css(mobileStyles.form_input)} type="text" name="name" id="name" placeholder="NAME"/>
        </label>
        <label className={css(mobileStyles.email_input)}>
          <input className={css(mobileStyles.form_input)} type="email" name="e-mail" id="email" placeholder="E-MAIL"/>
        </label>
        <label className={css(mobileStyles.phone_input)}>
          <input className={css(mobileStyles.form_input)} type="tel" name="phone" id="subject" placeholder="PHONE"/>
        </label>
        <label className={css(mobileStyles.message_input)}>
          <textarea className={css(mobileStyles.message_area)}  name="message" id="message" placeholder="MESSAGE"/>
        </label>
        <div className={css(mobileStyles.form_button_area)}>
          <button className={css(mobileStyles.form_button)} type="submit">SEND</button>
        </div>
      </form>
    </>

  return(
    <>
    <div className={css(mobileStyles.page_container)}>
      <img className={css(mobileStyles.engel_fly)} src={engeltje} alt='flying angel'/>
      <div className={css(mobileStyles.engel_elements)}>
          {welcomeMessage}
          {engel}
      </div>
      <Img className={css(mobileStyles.large_image, mobileStyles.image)} fluid={data.olijfolie.childImageSharp.fluid}/>
      {whoWeAre}
      {theTeam}
      <Img className={css(mobileStyles.blauwe_engel)} fluid={data.blauweEngel.childImageSharp.fluid}/>
      {brandIdentity}
      <Img className={css(mobileStyles.blauwe_engel)} fluid={data.blauweEngel.childImageSharp.fluid}/>
      {styleGuides}
      <Img className={css(mobileStyles.blauwe_engel)} fluid={data.blauweEngel.childImageSharp.fluid}/>
      <h1 id="work" className={css(mobileStyles.title)}>PACKAGING</h1>
    </div>
    <div className={css(mobileStyles.grid_structure)}>
      <ImageGridMobile className={css(mobileStyles.grid)}/>
    </div>
    <div className={css(mobileStyles.page_container)}>
      <Img className={css(mobileStyles.blauwe_engel)} fluid={data.blauweEngel.childImageSharp.fluid}/>
      {JSONclientlist()}
      <Img className={css(mobileStyles.blauwe_engel)} fluid={data.blauweEngel.childImageSharp.fluid}/>
      {contact}
      <p className={css(mobileStyles.paragrhaph)}><b>Follow us on <a href="https://www.instagram.com/caspartpackaging/">Instagram!</a></b></p>
      <div className={css(mobileStyles.space_between)}/>
      <div className={css(mobileStyles.space_between)}/>
    </div>
  </>
  )
}

export default Mobile

const fly = {
  '0%': {
      transform: 'translate(100vw, 75px)',
  },

  '100%': {
      transform: 'translate(-200vw, 75px)',
  },
}

const mobileStyles = StyleSheet.create({

  page_container: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    alignItems: 'center'
  },

  engel_elements: {
    position: 'relative',
    display: 'grid',
    placeContent: 'center',
    height: '60vw',
    marginTop: '4em',
    marginBottom: '2em',
  },
 
   engel_tekst: {
     width: '100%',
     height: '100%',
     zIndex: '10',
     display: 'grid',
     placeContent: 'center',
     textAlign: 'right',
      position: 'absolute',
   },

   engel_container: {
    display: 'grid',
    placeItems: 'center',
    width: '85vw',
  },
 
   engel: {
    filter: 'grayscale(100%)',
     width: '85vw',
   },

   image: {
    marginBottom: '1.4em',
   },

   image_duo: {
    display: 'flex',
    flexWrap: 'wrap',
   },

   large_image: {
    width: '85vw',
    marginBottom: '5vw'
  },

  medium_image: {
    flexGrow: '2'
 },

  small_image: {
    flexGrow: '1'
 },

  blauwe_engel: {
    width: '20vw',
    margin: '0',
    padding: '0'
 },
 
   text_container: {
     flexDirection: 'column',
     justifyContent: 'flex-end',
     display: 'flex',
     flexWrap: 'wrap',
     textAlign: 'right'
   },
 
   text_part1: {
     flexGrow: '1',
     fontSize: '3.2vw',
     fontWeight: '400',
   },
   text_part2: {
     flexGrow: '1'
   },
   text_part3: {
     flexGrow: '1',
   },
 
   titles: {
     lineHeight: '0',
     fontSize: '4.2vw',
     fontWeight: '400'
   },
   
   engel_fly: {
    width: '30vw',
    zIndex: '9999',
    animationName: fly,
    animationDuration: '16s',
    animationFillMode: 'forwards'
  },

  title: {
    lineHeight: '1em',
    textAlign: 'center',
    fontWeight: '900',
    color: '#A6A7AA',
    fontSize: '8vw',
    marginTop: '0.4em',
    marginBottom: '0.8em'
  },

  text_block: {
    width: '85vw'
  },

  paragrhaph: {
    textAlign: 'center',
    fontSize: '5.2vw',
    lineHeight: '1vw'
  },

  paragrhaph_small: {
    textAlign: 'center',
    fontSize: '3.8vw',
    lineHeight: '1vw'
  },

  justify: {
    lineHeight: '6vw',
    textAlign: 'justify'
  },

  justify_pasen: {
    lineHeight: '6vw',
    textAlign: 'justify',
    fontSize: '5vw',
  },
  
  caption: {
    textAlign: 'center',
    fontSize: '5.5vw',
    margin: '9vw',
    marginTop: '0vw',
    marginBottom: '7vw'
  },

  break: {
    display: 'block',
    fontSize: '-50%',
  },

  grid_structure: {
    width: '85vw',
    marginTop: '-10vw'
  },

  list: { 
    width: '85vw',
    zIndex: '300',
    margin: '0 auto',
    alignSelf: 'center',
    display: 'grid',
    gridTemplateColumns: '100%'
  },

  clients: {
      color: '#404040',
      lineHeight: "9vw",
      gridColumn: "1 / 2",
      marginTop: '0.25vw',
      marginBottom: '0.25vw',
      fontSize: '4.8vw',
      fontWeight: '500'
  },

  hr: {
      display: 'block',
      height: '1px',
      border: '0',
      borderTop: '2px solid #ccc',
      margin: '0',
      padding: '0',
      gridColumn: "1 / 3"
  },

  logo_container: {
      height: '100%',
      gridRow: '1/2',
      display: 'grid',
      placeItems: 'center'
  },

  logo: {
      width: '35vw',
      lineHeight: '0.5 px'
  },

  contact_information: {
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      gridRow: '2/3',
      marginTop: '4vw',
      marginBottom: '4vw'
  },

  contact_form: {
      width: '85vw',
      height: '100vw',
      gridRow: '3/4',
      display: 'grid',
      gridTemplateRows: '0.2fr 0.8fr 0.4fr 0.8fr 0.4fr 0.8fr 0.4fr 7fr 0.5fr 1fr',
      placeItems: 'center',
  },

  form_input: {
      width: '100%',
      fontSize: '4.8vw',
      textIndent: '0.5vw',
      height: '100%',
      MozBorderRadius: '0px',
      WebkitBorderRadius: '0px',
      borderRadius: '0px',
      backgroundColor: '#DCDDDE',
      color: '#636466'
    },

  name_input: {
    width: '100%',
      height: '100%',
      gridRow: '2/3',
  },

  email_input: {
    width: '100%',
      height: '100%',
      gridRow: '4/5',
  },

  phone_input: { 
    width: '100%',
      height: '100%',
      gridRow: '6/7',
  },

  message_input: {
      width: '85vw',
      height: '100%',
      gridRow: '8/9',
      display: 'grid',
      placeItems: 'center'
  },

  message_area: {
    textIndent: '1vw',
      height: '95%',
      width: '100%',
      color: '#636466',
      fontSize: '4.8vw',
      resize: 'none',
      padding: '0',
      paddingTop: '1.5%',
      margin: '0',
      backgroundColor: '#DCDDDE'
  },

  form_button_area: {
      display: 'grid',
      placeItems: 'center',
      gridRow: '10/11',
  },

  form_button: {
      height: '24px',
      width: '50px',
      border: '0',
      backgroundColor: '#0079c1',
      color: 'white',
  },

  blank_div: {
      height: '2vw',
      width: '7vw',  
      gridRow: '8/9',
      gridcolumn: '1/2',
      marginLeft: '10vw',
      justifySelf: 'end',
      alignSelf: 'end'
  },

  end_text: {
      height: '30%',
      width: '100%',
      textAlign: 'center',
      gridRow: '4/5',
  },

  space_between: {
    height: '2em'
  },

  less_margin: {
    margin: '0',
    marginBottom: '-3vw'
  }
 
})
