import React, { Component } from 'react';
import { Image, Segment, Icon, Button, Grid } from 'semantic-ui-react'

import ShopButton from '../button/ShopButton.js'
import CircularButton from '../button/CircularButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/homepage.css'
import '../../styles/font.css'

import sample_header from '../../images/header.jpg'
import logo from '../../images/logo.jpg'
import hat_img from '../../images/hat.jpg'
import wedding_img from '../../images/wedding/wedding6.jpg'
import debut_img from '../../images/debut/debut6.jpg'
import bday_img from '../../images/birthday/bday6.jpg'

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      packages_data: [],
      motifs_data: [],
      menus_data: [],
      package_id: '',
      motifs_images: []
    }

    this.toMotifsPortfolio = this.toMotifsPortfolio.bind(this);
    this.toRequestPackage = this.toRequestPackage.bind(this);
    this.toPackages = this.toPackages.bind(this);
    this.toMotifs = this.toMotifs.bind(this);
    this.toMenus = this.toMenus.bind(this);
    this.toMenuPortfolio = this.toMenuPortfolio.bind(this);
    this.toPackageInclusion = this.toPackageInclusion.bind(this);
  }

  toMotifsPortfolio(id) {
    window.location.href='/motif-portfolio/' +id;
  }

  toRequestPackage(e) {
    window.location.href='/request-package';
  }

  toPackages(e) {
    window.location.href='/packages';
  }

  toMotifs(e) {
    window.location.href='/motifs';
  }

  toMenus(e) {
    window.location.href='/menus';
  }

  toMenuPortfolio(id) {
    window.location.href='/menu-portfolio/'+id;
  }

  toPackageInclusion(id) {
    window.location.href='/package-inclusion/'+id;
  }

  componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/packages/three', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({packages_data: result.data});
        }).catch(err => {
          console.log(err);
        })

        fetch('http://localhost:3001/v1/event_motifs/four', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({motifs_data: result.data});
        }).catch(err => {
          console.log(err);
        })

        fetch('http://localhost:3001/v1/food_menus/three', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({menus_data: result.data});
        }).catch(err => {
          console.log(err);
        })
  }

  render() {
    return (
      <div>    
        <Segment id='container'>
          <HeaderBar headerTiltle={''}/>
          <Image size='large' src={sample_header} id='header-img'/>
          <div id='div-header'>
            <p className='header-font' style={{marginTop: '24%'}}> Let us help you plan and organize your dream event. </p>
          </div>
          <Button size='large' id='btn' onClick={this.toRequestPackage}>
            <Icon name='file text' size='medium'/>
                Request Package
          </Button>
        </Segment>

        <Segment vertical id='div-homepage'>
              <p className='title-header'> OUR SERVICES</p>
              <p className='body-font'> We offer party needs and supplies, and catering services for events, such as weddings, debuts and birthday parties.  </p>
             
                <div>
                  <Image.Group>
                    <div className="container-img2">
                      <Image src={wedding_img} id="style-img"/>
                      <div className="middle-img2" style={{left: '10%'}}>
                        <div className="text-middle">Weddings</div>
                      </div>
                    </div>
                  </Image.Group>
                  <Image.Group>
                    <div className="container-img2">
                      <Image src={debut_img} id="style-img"/>
                      <div className="middle-img2" style={{left: '13%'}}>
                        <div className="text-middle">Debuts</div>
                      </div>
                    </div>
                  </Image.Group>
                  <Image.Group>
                    <div className="container-img2">
                      <Image src={bday_img} id="style-img"/>
                      <div className="middle-img2" style={{left: '9%'}}>
                        <div className="text-middle">Birthdays</div>
                      </div>
                    </div>
                  </Image.Group>
                  <Image.Group>
                    <div className="container-img2">
                      <Image src={hat_img} id="style-img"/>
                     <div className="middle-img2" style={{left: '14%'}}>
                        <div className="text-middle">Party Needs</div>
                      </div>
                    </div>
                  </Image.Group>
                </div>
        </Segment>

        <Segment vertical id='div-homepage'>
              <p className='title-header'> CATERING PACKAGES</p>
              <p className='body-font'> Our catering packages are inclusive of everything you will need for any kind of event, so you get exactly what you want while staying within your budget. </p>


              <Grid inverted divided stackable style={{marginLeft: '4%'}}>
                <Grid.Row>
                {this.state.packages_data.map(pkg =>
                <Grid.Column width={4} style={{marginLeft: '4%'}}>
                  <CircularButton handleClick={this.toPackageInclusion} data={pkg} category={'package'}/>
                </Grid.Column>
                )}
                </Grid.Row>
              </Grid>
              <Button id='homepage-button' onClick={this.toPackages}> View More </Button>
        </Segment>

        <Segment vertical id='div-homepage'>
              <p className='title-header'> EVENT MOTIFS</p>
              <p className='body-font'>  May it be a wedding, debut, or kid’s birthday party, let us create the perfect theme for your event. You can choose from one of our pre-created event motifs that will surely make your dream event come true.  </p>
             
                <div>
                  {this.state.motifs_data.map(motif =>
                  <Image.Group>
                    <div className="container-img">
                      <Image src={`http://localhost:3001/${motif.img}`} id="style-img"/>
                      <div className="middle-img">
                        <ShopButton handleView={this.toMotifsPortfolio} data_id={motif.id}/>
                      </div>
                    </div>
                  </Image.Group>
                  )}
                </div>
                <Button id='homepage-button' onClick={this.toMotifs}> View More </Button>
        </Segment>

        <Segment vertical id='div-homepage'>
              <p className='title-header'> FOOD MENUS</p>
              <p className='body-font'> We understand that selecting the right caterer is one of the most essential parts of your event. That's why we offer you a wide variety of food choices that will suit your taste. </p>

              <Grid inverted divided stackable style={{marginLeft: '4%'}}>
                <Grid.Row>
                {this.state.menus_data.map(menu =>
                <Grid.Column width={4} style={{marginLeft: '4%'}}>
                  <CircularButton handleClick={this.toMenuPortfolio} data={menu} category={'menu'}/>
                </Grid.Column>
                )}
                </Grid.Row>
              </Grid>
              <Button id='homepage-button' onClick={this.toMenus}> View More </Button>
        </Segment>

        <Segment vertical id='div-homepage-whole'>
        <p className='title-header-larger'> ABOUT US</p>

        <div class="ui fluid segment" id='img-homepage-holder'>
          <Image circular src={logo} className='logo-pic'/>
        </div>

        <div class="ui fluid segment" id='about-div'>
          <br/> <br/> 
          <p className='paragraph-font'> 
             For more than a decade, we have been part of numerous weddings, debuts and kiddie parties, and been in the business of providing party needs and supplies for any event. Through years, we have gained loyal customers because we always make sure that we render quality services and products to them. It is of our mission to not only be just your caterer, but also your partner in conceptualizing, planning, budgeting and executing your event. Above all, we value with utmost importance our relationship with our dear customers because we want to help them make their dream event come true.
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