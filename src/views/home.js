import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Button from '../components/button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Vague Whimsical Newt</title>
        <meta property="og:title" content="Vague Whimsical Newt" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-text">Magnificent things are very simple-thisComes from git-</h1>
          <span className="home-text1">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="home-btn-group">
            <Button
              button="POST"
              rootClassName="button-root-class-name"
            ></Button>
            <Button
              button="GET"
              rootClassName="button-root-class-name"
            ></Button>
            <Button
              button="PUT"
              rootClassName="button-root-class-name"
            ></Button>
            <Button
              button="DELETE"
              rootClassName="button-root-class-name"
            ></Button>
          </div>
        </div>
        <div className="home-container2">
          <div className="home-container3">
            <span className="home-text8">Text</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
