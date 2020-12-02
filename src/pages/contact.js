import { StyleSheet, css } from 'aphrodite'

import Img from 'gatsby-image'
import React from 'react'
import Structure from '../components/structure'
import { graphql } from 'gatsby'

export const contactImageQuery = graphql`
    query {
        logo: file(relativePath: { eq: "caspart-logo.png" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        engel: file(relativePath: { eq: "kleine-engel.png" }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

function Contact (props) {

    const logo =
        <div className={css(contactStyles.logo_container)}>
            <Img className={css(contactStyles.logo)} fluid={props.data.logo.childImageSharp.fluid}/>
        </div>
    const contactInformation =
        <div className={css(contactStyles.contact_information)}>
            <p>CASP’ART B.V.</p>
            <p>Venneborglaan 98</p>
            <p>2100 Antwerpen</p>
            <p>0032/(0)3 326 01 96</p>
            <p>Contactpersoon: Claire Bauwens</p>
            <p>claire@caspart.be</p>
        </div>

    const contactForm =
    <form className={css(contactStyles.contact_form)} method="post" action="#">
        <label className={css(contactStyles.name_input)}>
            <input className={css(contactStyles.form_input)} type="text" name="name" id="name" placeholder="NAME"/>
        </label>
        <label className={css(contactStyles.email_input)}>
            <input className={css(contactStyles.form_input)} type="email" name="email" id="email" placeholder="E-MAIL"/>
        </label>
        <label className={css(contactStyles.phone_input)}>
            <input className={css(contactStyles.form_input)} type="tel" name="subject" id="subject" placeholder="PHONE"/>
        </label>
        <label className={css(contactStyles.message_input)}>
            <textarea className={css(contactStyles.message_area)}  name="message" id="message" placeholder="MESSAGE" />
        </label>
        <div className={css(contactStyles.blank_div)} type="submit"/>
        <div className={css(contactStyles.form_button_area)}>
            <Img className={css(contactStyles.engel)} fluid={props.data.engel.childImageSharp.fluid}/>
            <button className={css(contactStyles.form_button)} type="submit">SEND</button>
        </div>
    </form>
    
    return(
        <Structure title="Clients" up="/clients">
            <div className={css(contactStyles.contact_container)}>
                {logo}
                {contactInformation}
                {contactForm}
                <p className={css(contactStyles.end_text)}>We make your packaging dreams come true!</p>
            </div>
        </Structure>
    )
}

export default Contact

const contactStyles = StyleSheet.create({

    contact_container: {
        height: '80%',
        alignSelf: 'center',
        margin: '0 auto',
        zIndex: '300',
        display: 'grid',
        placeItems: 'center',
        gridTemplateRows: 'auto auto 25vw auto'
    },

    logo_container: {
        height: '100%',
        width: '100%',
        gridRow: '1/2',
        display: 'grid',
        placeItems: 'center'
    },

    logo: {
        width: '8vw',
        gridRow: '1/2',
        lineHeight: '0.5 px'
    },

    contact_information: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        gridRow: '2/3',
    },

    contact_form: {
        width: '70vw',
        height: '100%',
        gridRow: '3/4',
        display: 'grid',
        gridTemplateRows: '0.5fr 1fr 0.4fr 1fr 0.4fr 1fr 0.4fr 7fr 0.5fr',
        gridTemplateColumn: '1f 7fr 1fr',
        placeItems: 'center',
    },

    form_input: {
        textIndent: '0.5vw',
        width: '30vw',
        height: '100%',
        MozBorderRadius: '0px',
        WebkitBorderRadius: '0px',
        borderRadius: '0px',
        backgroundColor: '#DCDDDE',
        color: '#636466'
    },

   name_input: {
        height: '100%',
        gridRow: '2/3',
        gridColumn: '2/3',
        padding: '0',
        margin: '0',
   },

   email_input: {
        height: '100%',
        gridRow: '4/5',
        gridColumn: '2/3',
        padding: '0',
        margin: '0',
    },

    phone_input: {
        height: '100%',
        gridRow: '6/7',
        gridColumn: '2/3',
        padding: '0',
        margin: '0',
    },

    message_input: {
        width: '30.1vw',
        height: '100%',
        gridRow: '8/9',
        gridColumn: '2/3',
        padding: '0',
        margin: '0',
        display: 'grid',
        placeItems: 'center'
    },

    message_area: {
        height: '95%',
        width: '95%',
        color: '#636466',
        fontSize: '0.8vw',
        resize: 'none',
        padding: '0',
        paddingTop: '2.5%',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        margin: '0',
        backgroundColor: '#DCDDDE'
    },

    form_button_area: {
        gridRow: '8/9',
        gridcolumn: '3/4',
        justifySelf: 'start',
        alignSelf: 'end'
    },

    form_button: {
        height: '2vw',
        width: '6vw',
        border: '0',
        backgroundColor: '#0079c1',
        color: 'white',
    },

    blank_div: {
        height: '2vw',
        width: '6vw',
        padding: '0',
        border: '0',
        gridRow: '8/9',
    },

    end_text: {
        height: '30%',
        width: '100%',
        textAlign: 'center',
        gridRow: '4/5',
    },

    engel: {
        
    }

})