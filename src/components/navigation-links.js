import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.SecondPage}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  SecondPage: 'Second Page',
  text: 'About',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  SecondPage: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
