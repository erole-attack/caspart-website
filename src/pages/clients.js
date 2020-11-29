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
                return (
                    <>
                        <p key={`content_client_${index}`} className={css(clientsStyles.clients)}>{data.client}</p>
                        <p key={`content_brands_${index}`} className={css(clientsStyles.brands)}>{data.brands}</p>
                        <hr className={css(clientsStyles.hr)}/>
                    </>
                )    
            })}
        </div>
      )
    
    return(
        <Structure title="Clients" up="/work" down="/work">
            {JSONclientlist()}
        </Structure>
    )
}

export default Clients

const clientsStyles = StyleSheet.create({

    list: { 
        marginLeft: '5vw',
        marginRight: '5vw',
        alignSelf: 'center',
        display: 'grid',
        gridTemplateColumns: '35% auto'
    },

    clients: {
        lineHeight: "1vw",
        gridColumn: "1 / 2",
        marginTop: '0.35vw',
        marginBottom: '0.35vw'
    },

    brands: {
        lineHeight: "1vw",
        gridColumn: "2 / 3",
        fontWeight: '400',
        marginTop: '0.35vw',
        marginBottom: '0.35vw'
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
        fontWeight: '600',
        marginBottom: '1vw'
    }

})