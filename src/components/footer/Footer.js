import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Container, Grid, Header, Image, Segment, Icon, Button } from 'semantic-ui-react'

import ContactButton from '../button/ContactButton.js'
import RequestButton from '../button/RequestButton.js'

import '../../styles/footer.css'

class Footer extends Component {
  constructor(props){
    super(props);

    this.state = {}

    this.toContactUs = this.toContactUs.bind(this);
    this.toRequest = this.toRequest.bind(this);
  }

  toContactUs(e) {
    this.props.history.push('/contact-us');
  }
  toRequest(e) {
    this.props.history.push('/request-package');
  }

  render() {
    return (
      <div>    
        <Segment vertical id='segment-div'>
          <Container>
            <Grid inverted divided stackable>
              <Grid.Row>
                <Grid.Column width={5} style={{marginLeft: '6%'}}>
                  <Header inverted as='h4' content='Contact Us' style={{marginLeft: '15%'}} />
                  <div>
                    <Icon name='phone' size='big'/>
                    <label> +63 949 881 2448 </label>
                  </div>
                  <div>
                    <Icon name='mobile alternate' size='big'/>
                    <label> +63 949 881 2448 </label>
                  </div>
                  <div>
                    <Icon name='envelope' size='large' style={{marginLeft: '2%'}}/>
                    <label> leirajane@gmail.com </label>
                  </div>
                  <div>
                    <Icon name='location arrow' size='big'/>
                    <label> Pembo, Makati </label>
                  </div>
                </Grid.Column>

                <Grid.Column width={5} className='footer-div'>
                  <Header inverted as='h4' content='How can we help you?' />
                  <div>
                    <label> For inquiries, feel free to send us a message.</label>
                  </div>
                  <div>
                    <ContactButton handleClicked={this.toContactUs}/>
                  </div>
                </Grid.Column>

                <Grid.Column width={5} className='footer-div'>
                  <Header inverted as='h4' content='Request for Catering Package' />
                  <div>
                    <label> Fill up the request form and we will get back to you as soon as we can.</label>
                  </div>
                  <div>
                    <RequestButton handleClicked={this.toRequest}/>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

        <Segment inverted vertical id='footer2'>
          <Container style={{textAlign:'center'}}>
            <Button circular color='facebook' icon='large facebook' />
            <Button circular color='twitter' icon='large twitter' />
            <br/>
            <label>© Leira Jane's Party Needs and Catering Services 2019</label>
          </Container>
        </Segment>
      </div>
    );
  }

}

export default withRouter(Footer);