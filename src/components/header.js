import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'

export default () => {

  const [menu, setMenu] = useState("")

  const goToMenu = () => {
    setMenu(
      <div className={css(headerStyles.menu)}>
        <div className={css(headerStyles.menu_items_container)}>
          <ul className={css(headerStyles.menu_items)}>
            <li><AniLink onClick={goBack} to="/concept" className={css(headerStyles.blue_text, headerStyles.topic, headerStyles.bold)}>concept</AniLink></li>
            <div className={css(headerStyles.work_items)}>
              <li className={css(headerStyles.topic, headerStyles.bold)}>work</li>
                <ul>
                  <li className={css(headerStyles.topic)}>brand identity</li>
                  <li><AniLink onClick={goBack} to="/brand-identity-delicono" className={css(headerStyles.blue_text, headerStyles.work_item)}>Delicono</AniLink></li>
                  <li><AniLink onClick={goBack} to="/brand-identity-moony" className={css(headerStyles.blue_text, headerStyles.work_item)}>Moony Cakes</AniLink></li>
                  <li className={css(headerStyles.last_item)}><AniLink onClick={goBack} to="/brand-identity-trader-joes" className={css(headerStyles.blue_text, headerStyles.work_item)}>Trader Joe's</AniLink></li>
                  <li className={css(headerStyles.topic)}>style guides</li>
                  <li><AniLink onClick={goBack} to="/style-guides-bio" className={css(headerStyles.blue_text, headerStyles.work_item)}>Bio</AniLink></li>
                  <li className={css(headerStyles.last_item)}><AniLink onClick={goBack} to="/style-guides-pasen" className={css(headerStyles.blue_text, headerStyles.work_item)}>Pasen</AniLink></li>
                  <li className={css(headerStyles.topic)}>projects</li>
                  <li className={css(headerStyles.last_item)}><AniLink onClick={goBack} to="/work" className={css(headerStyles.blue_text, headerStyles.work_item)}>Packaging</AniLink></li>
                </ul>
            </div>
            <li><AniLink onClick={goBack} to="/clients" className={css(headerStyles.blue_text, headerStyles.topic, headerStyles.bold)}>clients</AniLink></li>
            <li><AniLink onClick={goBack} to="/contact" className={css(headerStyles.blue_text, headerStyles.topic, headerStyles.bold)}>contact</AniLink></li>
          </ul>
        </div>
      </div>
    )
  }

  const goBack = () => {
    setMenu("")
  }

  const homeButton = () => {
    return(
      menu === "" ?
        <div className={css(headerStyles.home_button)}>
          <svg className={css(headerStyles.caspart_icon)} viewBox="0 0 126 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Link className={css(headerStyles.caspart_icon_path)} to="/concept">
              <path d="M24.6474 23.1773C24.6474 23.1773 25.6421 11.4783 36.5842 11.9197C37.1369 11.8094 45.4263 9.05016 48.6316 16.4448C49.0737 17.6589 49.6263 17.99 50.6211 18.8729C51.6158 19.7559 55.8158 22.4047 51.7263 26.1572C50.8421 26.709 50.5106 28.1438 50.5106 28.6957C50.9527 29.1371 52.279 28.806 52.9421 28.9164C53.7158 28.6957 56.1474 27.7023 55.2632 21.5217C54.379 15.3411 54.2685 15.6722 55.7053 14.6789C56.2579 13.1338 61.2316 0.772573 65.6527 0.772573C66.3158 0.331102 69.079 -2.20736 68.0842 5.29766C68.7474 5.51839 72.2842 5.95986 67.7527 15.893C69.079 14.6789 74.7158 12.6923 71.9527 18.6522C72.3948 18.6522 73.279 18.5418 70.5158 23.1773C70.8474 23.2876 72.2842 23.6187 68.4158 27.1505C68.6369 27.3712 69.6316 30.0201 63.1106 31.1237C65.3211 31.786 67.9737 33.1104 70.1842 30.4615C72.3948 27.8127 82.8948 23.9498 96.9316 33.9933C98.1474 34.8763 99.3632 35.7592 99.3632 35.7592C99.3632 35.7592 102.458 33.1104 111.742 33.4415C113.289 32.8896 114.063 32.0067 116.826 33.2207C119.7 33.6622 120.584 34.1037 121.689 34.8763C122.684 34.7659 124.784 35.5385 124.895 37.3043C125.558 38.0769 125.779 38.1873 125.337 39.0702C125.779 39.6221 126.111 39.8428 125.447 40.6154C125.889 41.2776 126.332 42.1605 125.558 42.4916C125.779 42.8227 126.221 43.9264 124.563 44.2575C124.453 44.699 124.121 46.796 121.8 44.0368C120.805 43.2642 120.805 43.2642 120.805 43.2642C120.805 43.2642 119.147 42.8227 118.374 42.0502C118.042 42.1605 116.826 41.9398 114.837 41.388C114.726 41.388 113.732 41.0569 113.289 41.4983C112.847 41.9398 111.521 42.1605 109.532 42.7124C110.968 42.8227 113.068 42.2709 113.068 44.3679C113.732 45.0301 115.168 46.0234 113.511 46.9064C113.953 47.6789 113.732 48.2308 112.958 48.2308C112.847 48.6722 112.847 48.893 111.189 48.893C111.079 49.5552 110.858 49.5552 109.753 49.3344C109.2 49.6656 109.974 50.3278 105.553 49.1137C104.668 49.4448 99.0316 54.1906 93.6158 56.7291C88.2 59.2676 84.6632 59.0468 80.4632 57.3913C79.3579 57.0602 76.7053 56.2876 75.0474 60.2609C74.7158 62.3579 75.6 66.2207 70.0737 66.2207C67.5316 66.6622 65.7632 66.3311 64.9895 65.6689C64.2158 65.0067 62.3369 65.3378 61.2316 64.1237C60.1263 62.9097 58.1369 56.9498 47.1948 53.8595C36.2527 50.7692 33.6 49.3344 31.6106 47.4582C30.1737 46.5753 28.0737 46.4649 26.4158 47.1271C24.7579 47.7893 21.9948 48.01 21 47.7893C20.1158 48.01 16.8 49.1137 14.1474 48.893C13.1527 49.1137 11.7158 49.5552 10.279 50.4381C9.39476 50.6589 8.17897 50.8796 6.85266 50.6589C5.85792 50.8796 2.65266 50.8796 6.85266 48.5619C5.08424 47.7893 4.42108 47.4582 4.20003 47.5686C3.97897 47.6789 2.43161 48.01 1.76845 47.4582C1.10529 47.6789 -1.43681 47.5686 1.32634 46.0234C1.43687 45.4716 1.76845 45.1405 2.10003 44.9197C2.43161 44.5886 2.10003 44.699 2.87371 43.9264C3.31582 43.3746 3.09476 43.0435 3.97897 42.4916C4.86319 41.9398 5.30529 40.6154 7.18424 40.505C7.95792 40.2843 8.40003 40.3946 12.2684 41.388C13.2632 40.8361 20.2263 37.4147 21.3316 37.5251C20.5579 36.6421 20.8895 36.0903 20.8895 36.0903C20.8895 36.0903 17.7948 35.6488 17.7948 32.3378C16.6895 31.2341 16.0263 30.903 16.579 30.3512C15.0316 30.2408 7.29476 27.4816 10.0579 24.8328C8.51055 24.5017 3.31582 21.4114 12.8211 20.3077C14.2579 20.4181 18.9 19.3144 24.6474 23.1773Z" fill="#0079c1"/>
            </Link>
          </svg>
        </div>
      :
        <div/>
    )
  }

  const menuButton = () => {
    return(
      menu === "" ?
        <svg className={css(headerStyles.menu_button)} mode="multiply" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={goToMenu}>
          <path d="M1 1H27.3415" stroke="#636466" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1 10.5H28" stroke="#636466" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1.65854 20H28" stroke="#636466" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      :
      <svg className={css(headerStyles.exit_button)} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
        <g clip-path="url(#clip0)">
          <path d="M8.1 9L0.6 0H4.5L8.3 4.8C9 5.6 9.6 6.4 10.4 7.5H10.6C11.3 6.4 11.9 5.6 12.6 4.8L16.3 0H20L12.4 9.1L20.5 18.6H16.6L12.5 13.6C11.8 12.7 11 11.7 10.1 10.6H10C9.2 11.7 8.5 12.7 7.8 13.6L3.8 18.6H0L8.1 9Z" fill="#636466"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20.6" height="18.7" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )
  }

  const instButton =
    <a className={css(headerStyles.social_icons)} href="https://www.instagram.com/caspartpackaging/">
      <svg className={css(headerStyles.facebook_button)} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M16.1 0H6.1C2.7 0 0 2.7 0 6.1V16C0 19.4 2.7 22.1 6.1 22.1H16C19.4 22.1 22.1 19.4 22.1 16V6.1C22.2 2.7 19.4 0 16.1 0ZM20.2 16.1C20.2 18.4 18.3 20.3 16 20.3H6.1C3.8 20.3 1.9 18.4 1.9 16.1V6.1C2 3.8 3.8 2 6.1 2H16C18.3 2 20.2 3.9 20.2 6.2V16.1Z" fill="#636466"/>
            <path d="M11.1 5.4C7.89999 5.4 5.39999 8 5.39999 11.1C5.39999 14.3 7.99999 16.8 11.1 16.8C14.3 16.8 16.8 14.2 16.8 11.1C16.8 7.9 14.2 5.4 11.1 5.4ZM11.1 14.8C8.99999 14.8 7.39999 13.1 7.39999 11.1C7.29999 9 8.99999 7.3 11.1 7.3C13.2 7.3 14.8 9 14.8 11C14.8 13.2 13.2 14.8 11.1 14.8Z" fill="#636466"/>
            <path d="M17 3.7C16.6 3.7 16.2 3.9 16 4.1C15.7 4.4 15.6 4.7 15.6 5.1C15.6 5.5 15.8 5.9 16 6.1C16.3 6.4 16.6 6.5 17 6.5C17.4 6.5 17.8 6.3 18 6.1C18.3 5.8 18.4 5.5 18.4 5.1C18.4 4.7 18.2 4.3 18 4.1C17.8 3.9 17.4 3.7 17 3.7Z" fill="#636466"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="22.2" height="22.2" fill="white"/>
            </clipPath>
          </defs>
      </svg>
    </a>

  const liButton =
    <a className={css(headerStyles.social_icons)} href="https://be.linkedin.com/in/claire-bauwens-8a67b63">
      <svg className={css(headerStyles.instagram_button)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#636466"/>
      </svg>
    </a>




  return(
    <div>
      {menu}
      <header className={css(headerStyles.area)}>
        {homeButton()}
        <div className={css(headerStyles.right_side)}>
          <div className={css(headerStyles.social_icons)}>
            {instButton}
            {liButton}
          </div>
          {menuButton()}
        </div>
      </header>
    </div>
  )
}

const headerStyles = StyleSheet.create({

  area: {
    position: 'absolute',
    margin: '0 auto',
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: '2fr 10fr 2fr',
    gridTemplateRows: '3fr 10fr 3fr',
    overflow: 'hidden',
    placeItems: 'center',
  },

  right_side: {
    height: '100%',
    zIndex: '9999',
    display: 'flex',
    marginRight: '10vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    gridRowStart: '1',
    gridRowEnd: '2',
    gridColumnStart: '3',
    gridColumnEnd: '4',
  },

  social_icons: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    height: '100%'
  },

  instagram_button: {
    width: '1.7vw',
    margin: '0 auto',
    marginRight: '0.2vw',
  },

  facebook_button: {
    width: '1.7vw',
    margin: '0 auto',
    marginRight: '0.2vw',
  },

  home_button: {
    zIndex: '9999',
    height: '100%',
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    marginLeft: '8vw',
    gridRowStart: '1',
    gridRowEnd: '2',
    gridColumnStart: '1',
    gridColumnEnd: '2',
  },

  caspart_icon: {
    zIndex: '9999',
    width: '8vw'
  },

  caspart_icon_path: {
    cursor: 'pointer'
  },

  menu_button: {
    width: '1.8vw',
    padding: '0.3vw',
    margin: '0 auto',
    marginLeft: '1vw',
    cursor: 'pointer',
  },

  exit_button: {
    width: '1.8vw',
    padding: '0.3vw',
    margin: '0 auto',
    marginLeft: '1vw',
    cursor: 'pointer',
  },

  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: '9999',
    position: 'absolute',
    background: 'white',
    width: '100vw',
    height: '100vh',
    margin: '0'
  },

  menu_items_container: {
    margin: '0 auto',
    width: '90vw',
    height: '80vh',
    display: 'grid',
    placeItems: 'center'
  },

  menu_items: {
    fontSize: '1.4vw',
    lineHeight: '1.4vw',
    color: '#636466',
    fontWeight: '200'
  },

  work_items: {
    display: 'flex',
  },

  bold: {
    fontSize: '1.4vw',
    fontWeight: '800'
  },

  blue_text: {
    color: '#0079c1',
    textDecoration: 'none'
  },

  work_item: {
    fontSize: '1.4vw',
    marginLeft: '10vw',
    fontWeight: '400'
  },

  topic: {
    fontSize: '1.4vw',
    lineHeight: '1.6vw',
    fontWeight: '400'
  },

  last_item: {
    marginBottom: '0.6vw'
  }

})
