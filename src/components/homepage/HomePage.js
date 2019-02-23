import React, { Component } from 'react';
import { Container, Header, Image, Segment, Icon, Button, Grid } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/homepage.css'
import sample_header from '../../images/header2.jpg'

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {}

    this.toMotifsPortfolio = this.toMotifsPortfolio.bind(this);
  }

  toMotifsPortfolio(e) {
    this.props.history.push('/motif-portfolio');
  }

  render() {
    return (
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
                <Grid.Column width={4} style={{marginLeft: '6%'}}>
                  <Button animated circular id='circle-homepage'>
                    <Button.Content visible>Package 1</Button.Content>
                    <Button.Content visible className='label-font2'>P 1,750</Button.Content>
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
                  </Button>
                </Grid.Column>

                <Grid.Column width={4} style={{marginLeft: '3%'}}>
                  <Button animated circular id='circle-homepage'>
                    <Button.Content visible>Package 1</Button.Content>
                    <Button.Content visible className='label-font2'>P 1,750</Button.Content>
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
                  </Button>
                </Grid.Column>

                <Grid.Column width={4} style={{marginLeft: '3%'}}>
                  <Button animated circular id='circle-homepage'>
                    <Button.Content visible>Package 1</Button.Content>
                    <Button.Content visible className='label-font2'>P 1,750</Button.Content>
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
                  </Button>
                </Grid.Column>

                </Grid.Row>
              </Grid>
              <Button id='homepage-button' > View More </Button>
        </Segment>

        <Segment vertical id='div-homepage'>
              <p className='title-header'> Event Motifs</p>
              <p className='body-font'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis nibh. Maecenas eu congue nisl. Nunc suscipit vehicula odio in condimentum. </p>
             
                <div style={{paddingLeft: '30px'}}>

                  <Image.Group size='large'>
                    <Image src={sample_header} onClick={this.toMotifsPortfolio}/>
                    <Image src={sample_header} />
                  </Image.Group>

                   <Image.Group size='large'>
                    <Image src={sample_header} />
                    <Image src={sample_header} />
                  </Image.Group>

                </div>
                <Button id='homepage-button' > View More </Button>
        </Segment>

      </div>
    );
  }
}

export default HomePage