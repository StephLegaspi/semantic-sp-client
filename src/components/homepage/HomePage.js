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
    this.props.history.push('/motif-portfolio/' +id);
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

  toMenuPortfolio(id) {
    this.props.history.push('/menu-portfolio/' + id);
  }

  toPackageInclusion(id) {
    this.props.history.push('/package-inclusion/' + id);
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

        <Segment vertical id='div-homepage-smaller'>
              <p className='title-header'> Catering Packages</p>
              <p className='body-font'> Our catering packages are inclusive of everything you will need for any kind of event, so you get exactly what you want while staying within your budget. </p>


              <Grid inverted divided stackable style={{marginLeft: '5%'}}>
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
              <p className='title-header'> Event Motifs</p>
              <p className='body-font'>  May it be a wedding, debut, or kid’s birthday party, let us create the perfect theme for your event. You can choose from one of our pre-created event motifs that will surely make your dream event come true.  </p>
             
                <div>
                  {this.state.motifs_data.map(motif =>
                  <Image.Group>
                    <div class="container-img">
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

        <Segment vertical id='div-homepage-smaller'>
              <p className='title-header'> Food Menus</p>
              <p className='body-font'> We understand that selecting the right caterer is one of the most essential parts of your event. That's why we offer you a wide variety of food choices that will suit your taste. </p>

              <Grid inverted divided stackable style={{marginLeft: '5%'}}>
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
        <p className='title-header-larger'> About Us</p>

        <div class="ui fluid segment" id='img-homepage-holder'>
          <Image circular src={logo} className='logo-pic'/>
        </div>

        <div class="ui fluid segment" id='about-div'>
          <br/> <br/> 
          <p className='paragraph-font'> 
             For more than 10 years , we have been blessed to be a part of numerous weddings, debuts, and kid parties. In all these events, we make sure we are not only your caterer but more importantly your partner in every step from conceptualizing, budgeting and planning up to final execution. These events have given us valuable insights and ideas that inspire our continuous effort to provide better and improved services to wider set of clients. But what really matters to us is our relationship with our customers. We consider ourselves not only a caterer, but also a partner that will assist you during the process of conceptualizing, budgeting, planning, and on the day of your event.We are here to help you make your dream event possible.
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