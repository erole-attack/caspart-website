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
        <Img className={css(contactStyles.logo)} fluid={props.data.logo.childImageSharp.fluid}/>

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
        gridTemplateRows: 'auto auto auto auto'
    },

    logo: {
        width: '9.5vw',
        gridRow: '1/2',
        lineHeight: '0.5 px'
    },

    contact_information: {
       width: '100%',
       textAlign: 'center',
       gridRow: '2/3',
    },

    contact_form: {
        width: '70vw',
        height: '100%',
        gridRow: '3/4',
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr 7fr',
        gridTemplateColumn: '1f 7fr 1fr',
        placeItems: 'center',
    },

    form_input: {
        width: '30vw',
        height: '1.5vw',
        MozBorderRadius: '0px',
        WebkitBorderRadius: '0px',
        borderRadius: '0px',
        backgroundColor: '#DCDDDE',
        color: '#636466'
    },

   name_input: {
        height: '100%',
        gridRow: '1/2',
        gridColumn: '2/3',
        padding: '0.3vw'
   },

   email_input: {
        height: '100%',
        gridRow: '2/3',
        gridColumn: '2/3',
        padding: '0.3vw'
    },

    phone_input: {
        height: '100%',
        gridRow: '3/4',
        gridColumn: '2/3',
        padding: '0.3vw'
    },

    message_input: {
        height: '100%',
        gridRow: '4/5',
        gridColumn: '2/3',
        padding: '0.3vw'
    },

    message_area: {
        resize: 'none',
        height: '100px',
        width: '30vw',
        height: '100%',
        padding: '0',
        backgroundColor: '#DCDDDE'
    },

    form_button_area: {
        gridRow: '4/5',
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
        margin: '0',
        border: '0',
        gridRow: '4/5',
        gridcolumn: '1/2',
    },

    end_text: {
        gridRow: '4/5',
    }

})