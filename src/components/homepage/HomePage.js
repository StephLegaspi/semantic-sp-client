import React from 'react'
import { Container, Header, Image, Segment, Icon, Button } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/homepage.css'
import sample_header from '../../images/header2.jpg'

const HomePage = () => (
  <div>    
    <Segment id='container'>
      <HeaderBar headerTiltle={''}/>
      <Image size='large' src={sample_header} style={{ minWidth:'100%'}}/>
      <Button primary size='huge' id='btn'>
          Get Started
          <Icon name='right arrow' />
      </Button>
    </Segment>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for single column layouts.
      </p>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>This is a basic fixed menu template using fixed size containers.</p> 
      <p>This is a basic fixed menu template using fixed size containers.</p> 
      <p>This is a basic fixed menu template using fixed size containers.</p> 
      <p>This is a basic fixed menu template using fixed size containers.</p> 
    </Container>


    <Footer/>
  </div>
)

export default HomePage