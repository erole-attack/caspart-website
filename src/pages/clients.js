import { StyleSheet, css } from 'aphrodite'

import JSONData from "../content/clientlist.json"
import React from 'react'
import Structure from '../components/structure'

function Clients (props) {

    const JSONclientlist = () => (
        <div className={css(clientsStyles.list)}>
            <h3 className={css(clientsStyles.clients, clientsStyles.blue)}>clients</h3>
            <h3 className={css(clientsStyles.brands, clientsStyles.blue)}>brands</h3>
            <hr className={css(clientsStyles.hr)}/>
            {JSONData.content.map((data, index) => {
                const regex = /voor/gi
                return (
                    <>
                        <p key={`content_client_${index}`} className={css(clientsStyles.clients)}>{data.client.toUpperCase()}</p>
                        <p key={`content_brands_${index}`} className={css(clientsStyles.brands)}>{data.brands.toUpperCase().replace(regex, 'voor')}</p>
                        <hr className={css(clientsStyles.hr)}/>
                    </>
                )    
            })}
        </div>
      )
    
    return(
        <Structure title="Clients" up="/work" down="/contact">
            {JSONclientlist()}
            <div className={css(clientsStyles.white_space)}/>
        </Structure>
    )
}

export default Clients

const clientsStyles = StyleSheet.create({

    list: { 
        width: '100vw',
        paddingLeft: '20vw',
        paddingRight: '20vw',
        zIndex: '300',
        margin: '0 auto',
        marginTop: 'calc(100px + 3vw)',
        alignSelf: 'center',
        display: 'grid',
        gridTemplateColumns: '35% auto'
    },

    clients: {
        color: '#404040',
        lineHeight: "calc(8px + 0.6vw)",
        gridColumn: "1 / 2",
        marginTop: '0.35vw',
        marginBottom: '0.35vw',
        fontWeight: '500'
    },

    brands: {
        lineHeight: "calc(8px + 0.6vw)",
        gridColumn: "2 / 3",
        marginTop: '0.35vw',
        marginBottom: '0.35vw',
        fontWeight: '300'
    },

    hr: {
        display: 'block',
        height: '1px',
        border: '0',
        borderTop: '1px solid #ccc',
        margin: '0',
        padding: '0',
        gridColumn: "1 / 3"
    },

    blue: {
        color: '#0079c1',
        fontWeight: '800',
        marginBottom: '1vw'
    },

    white_space: {
        width: '100%',
        height: '10%'
    }

})