import React from 'react'
import { Container, Header, Image, Segment, Icon, Button, Grid } from 'semantic-ui-react'

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

    <Segment vertical id='div-homepage'>
          <p className='title-header'> Catering Packages</p>
          <p className='body-font'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis nibh. Maecenas eu congue nisl. Nunc suscipit vehicula odio in condimentum. </p>
          <Grid inverted divided stackable>
            <Grid.Row>
            <Grid.Column width={5} style={{marginLeft: '3%'}}>
              <Button animated circular id='circle-homepage'>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
            </Grid.Column>

            <Grid.Column width={5}>
              <Button animated circular id='circle-homepage'>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
            </Grid.Column>

            <Grid.Column width={5}>
              <Button animated circular id='circle-homepage'>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
            </Grid.Column>

            </Grid.Row>
          </Grid>
    </Segment>

  </div>
)

export default HomePage