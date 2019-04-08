import React, { Component } from 'react';
import { Segment, Image } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";

import WeddingImages from "./WeddingImages";
import DebutImages from "./DebutImages";
import BirthdayImages from "./BirthdayImages";
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/homepage.css';
import '../../styles/font.css';

import sample_header from '../../images/header1.jpg'

export default class Portfolio extends Component {
  render() {
    return (
      <div>

        <Segment id='container'>
          <HeaderBar headerTitle={'Portfolio'}/>
            <Image size='large' src={sample_header} style={{ minWidth:'100%'}}/>
            <div id='div-header'>
              <p className='header-font2' style={{marginTop: '29%'}}> For more than 10 years, we are committed in making our customers' dream events come true.  </p>
            </div>
        </Segment>

        
          <Segment vertical id='div-homepage'>
            <p className='title-header'> Weddings</p>
            <p className='body-font'>
              This prototype features how to create a carousel with images, take a
              look into <code>examples/ImageCarousel</code> to get more details.
            </p>
            <WeddingImages />
          </Segment>

          <Segment vertical id='div-homepage'>
            <p className='title-header'> Debuts</p>
            <p className='body-font'>
              This prototype features how to create a carousel with images, take a
              look into <code>examples/ImageCarousel</code> to get more details.
            </p>
            <DebutImages />
          </Segment>
        
          <Segment vertical id='div-homepage' style={{marginBottom: '10%'}}>
            <p className='title-header'> Birthdays</p>
            <p className='body-font'>
              This prototype features how to create a carousel with images, take a
              look into <code>examples/ImageCarousel</code> to get more details.
            </p>
            <BirthdayImages />
          </Segment>

        <div style={{clear: 'both'}}>
          <Footer/>
        </div>
      </div>
    );
  }
}

