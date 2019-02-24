import React, { Component } from 'react';
import { Image, Segment, Icon, Button, Grid } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/homepage.css'
import '../../styles/font.css'
import sample_header from '../../images/header2.jpg'
import logo from '../../images/logo.jpg'

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {}

    this.toMotifsPortfolio = this.toMotifsPortfolio.bind(this);
    this.toRequestPackage = this.toRequestPackage.bind(this);
    this.toPackages = this.toPackages.bind(this);
    this.toMotifs = this.toMotifs.bind(this);
    this.toMenus = this.toMenus.bind(this);
    this.toMenuPortfolio = this.toMenuPortfolio.bind(this);
    this.toPackageInclusion = this.toPackageInclusion.bind(this);
  }

  toMotifsPortfolio(e) {
    this.props.history.push('/motif-portfolio');
  }

  toRequestPackage(e) {
    this.props.history.push('/request-package');
  }

  toPackages(e) {
    this.props.history.push('/packages');
  }

  toMotifs(e) {
    this.props.history.push('/motifs');
  }

  toMenus(e) {
    this.props.history.push('/menus');
  }

  toMenuPortfolio(e) {
    this.props.history.push('/menu-portfolio');
  }

  toPackageInclusion(e) {
    this.props.history.push('/package-inclusion');
  }

  render() {
    return (
      <div>    
        <Segment id='container'>
          <HeaderBar headerTiltle={''}/>
          <Image size='large' src={sample_header} id='header-img'/>
          <div id='div-header'>
            <p className='header-font' style={{marginTop: '22%'}}> Let us help you plan and organize your dream event. </p>
          </div>
          <Button size='large' id='btn' onClick={this.toRequestPackage}>
              <Icon name='file text' size='medium'/>
              Request Package
          </Button>
        </Segment>

        <Segment vertical id='div-homepage-smaller'>
              <p className='title-header'> Catering Packages</p>
              <p className='body-font'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis nibh. Maecenas eu congue nisl. Nunc suscipit vehicula odio in condimentum. </p>
              <Grid inverted divided stackable>
                <Grid.Row>
                <Grid.Column width={4} style={{marginLeft: '10%'}}>
                  <Button animated circular id='circle-homepage' onClick={this.toPackageInclusion} >
                    <Button.Content visible>Package 1</Button.Content>
                    <Button.Content visible className='label-font2'>P 1,750</Button.Content>
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
                  </Button>
                </Grid.Column>

                <Grid.Column width={4} >
                  <Button animated circular id='circle-homepage' onClick={this.toPackageInclusion} style={{marginLeft: '5%'}}>
                    <Button.Content visible>Package 1</Button.Content>
                    <Button.Content visible className='label-font2'>P 1,750</Button.Content>
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
                  </Button>
                </Grid.Column>

                 <Grid.Column width={4} >
                  <Button animated circular id='circle-homepage' onClick={this.toPackageInclusion} style={{marginLeft: '10%'}}>
                    <Button.Content visible>Package 1</Button.Content>
                    <Button.Content visible className='label-font2'>P 1,750</Button.Content>
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
                  </Button>
                </Grid.Column>

                </Grid.Row>
              </Grid>
              <Button id='homepage-button' onClick={this.toPackages}> View More </Button>
        </Segment>

        <Segment vertical id='div-homepage'>
              <p className='title-header'> Event Motifs</p>
              <p className='body-font'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis nibh. Maecenas eu congue nisl. Nunc suscipit vehicula odio in condimentum. </p>
             
                <div>
                  <Image.Group >
                    <div class="container-img">
                      <Image src={sample_header} id="style-img"/>
                      <div class="middle-img">
                        <Button id='homepage-button2' onClick={this.toMotifsPortfolio}> View </Button>
                      </div>
                    </div>

                     <div class="container-img">
                      <Image src={sample_header} id="style-img"/>
                      <div class="middle-img">
                        <Button id='homepage-button2' onClick={this.toMotifsPortfolio}> View </Button>
                      </div>
                    </div>
                  </Image.Group>

                  <Image.Group size='big'>
                    <div class="container-img">
                      <Image src={sample_header} id="style-img"/>
                      <div class="middle-img">
                        <Button id='homepage-button2' onClick={this.toMotifsPortfolio}> View </Button>
                      </div>
                    </div>

                     <div class="container-img">
                      <Image src={sample_header} id="style-img"/>
                      <div class="middle-img">
                        <Button id='homepage-button2' onClick={this.toMotifsPortfolio}> View </Button>
                      </div>
                    </div>
                  </Image.Group>
                </div>
                <Button id='homepage-button' onClick={this.toMotifs}> View More </Button>
        </Segment>

        <Segment vertical id='div-homepage'>
              <p className='title-header'> Food Menus </p>
              <p className='body-font'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis nibh. Maecenas eu congue nisl. Nunc suscipit vehicula odio in condimentum. </p>
             
                <div style={{paddingLeft: '30px'}}>
                  <Image.Group size='big'>
                    <div class="container-img">
                      <Image src={sample_header} id="style-img"/>
                      <div class="middle-img">
                        <Button id='homepage-button2' onClick={this.toMenuPortfolio}> View </Button>
                      </div>
                    </div>

                     <div class="container-img">
                      <Image src={sample_header} id="style-img"/>
                      <div class="middle-img">
                        <Button id='homepage-button2' onClick={this.toMenuPortfolio}> View </Button>
                      </div>
                    </div>
                  </Image.Group>

                  <Image.Group size='big'>
                    <div class="container-img">
                      <Image src={sample_header} id="style-img"/>
                      <div class="middle-img">
                        <Button id='homepage-button2' onClick={this.toMenuPortfolio}> View </Button>
                      </div>
                    </div>

                     <div class="container-img">
                      <Image src={sample_header} id="style-img"/>
                      <div class="middle-img">
                        <Button id='homepage-button2' onClick={this.toMenuPortfolio}> View </Button>
                      </div>
                    </div>
                  </Image.Group>
                </div>
                <Button id='homepage-button' onClick={this.toMenus}> View More </Button>
        </Segment>

        <Segment vertical id='div-homepage-whole'>
        <p className='title-header-larger'> About Us</p>

        <div class="ui fluid segment" id='img-homepage-holder'>
          <Image circular src={logo} className='logo-pic'/>
        </div>

        <div class="ui fluid segment" id='about-div'>
          <br/> <br/> 
          <p className='paragraph-font'> 
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nulla nunc. Aenean luctus neque et mauris congue lobortis. Sed vel finibus nibh. Sed feugiat nibh tristique, euismod lectus in, ullamcorper turpis. Aliquam odio eros, sollicitudin quis molestie nec, faucibus non sem. Morbi varius tortor nec orci tristique tempor. Etiam neque quam, mattis at tincidunt convallis, accumsan et dolor. Proin odio purus, placerat eget leo quis, facilisis ornare ipsum. Morbi varius tortor nec orci tristique tempor. Etiam neque quam, mattis at tincidunt convallis, accumsan et dolor. Proin odio purus, placerat eget leo quis, facilisis ornare ipsum.
          </p>
        </div>
        </Segment>

        <div style={{clear: 'both'}}>
          <Footer/>
        </div>

      </div>
    );
  }
}

export default HomePage