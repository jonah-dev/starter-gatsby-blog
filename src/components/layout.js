import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Ticker from './Ticker/Ticker'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        {children}
        <Ticker />
      </Container>
    )
  }
}

export default Template
