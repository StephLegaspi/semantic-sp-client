import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Container, Grid, Header, Segment, Icon, Button } from 'semantic-ui-react'

import ContactButton from '../button/ContactButton.js'
import RequestButton from '../button/RequestButton.js'
import FAQButton from '../button/FAQButton.js'

import '../../styles/footer.css'

class Footer extends Component {
  constructor(props){
    super(props);

    this.state = {
      telephone_number: '',
      mobile_number: '',
      email_address: '',
      business_address: ''
    }

    this.toContactUs = this.toContactUs.bind(this);
    this.toRequest = this.toRequest.bind(this);
    this.toFAQs = this.toFAQs.bind(this);
  }

  toContactUs(e) {
    this.props.history.push('/contact-us');
  }
  toRequest(e) {
    this.props.history.push('/request-package');
  }
  toFAQs(e) {
    this.props.history.push('/FAQs');
  }

  componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/contact_details', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({telephone_number: result.data[0].telephone_number});
            self.setState({mobile_number: result.data[0].mobile_number});
            self.setState({email_address: result.data[0].email_address});
            self.setState({business_address: result.data[0].business_address});
        }).catch(err => {
          console.log(err);
        })
    }

  render() {
    return (
      <div>    
        <Segment vertical id='segment-div'>
          <Container>
            <Grid inverted divided stackable>
              <Grid.Row>
                <Grid.Column width={4} >
                  <Header inverted as='h4' content='Contact Us' style={{marginLeft: '15%'}} />
                  <div>
                    <Icon name='phone' size='big'/>
                    <label> {this.state.telephone_number} </label>
                  </div>
                  <div>
                    <Icon name='mobile alternate' size='big'/>
                    <label> {this.state.mobile_number} </label>
                  </div>
                  <div>
                    <Icon name='envelope' size='large' style={{marginLeft: '2%'}}/>
                    <label> {this.state.email_address} </label>
                  </div>
                  <div>
                    <Icon name='location arrow' size='big'/>
                    <label> {this.state.business_address} </label>
                  </div>
                </Grid.Column>

                <Grid.Column width={4} className='footer-div'>
                  <Header inverted as='h4' content='How can we help you?' />
                  <div>
                    <label> For inquiries, feel free to send us a message.</label>
                  </div>
                  <div>
                    <ContactButton handleClicked={this.toContactUs}/>
                  </div>
                </Grid.Column>

                <Grid.Column width={4} className='footer-div'>
                  <Header inverted as='h4' content='Request for Catering Package' />
                  <div>
                    <label> Fill up the request form and we will get back to you as soon as we can.</label>
                  </div>
                  <br/>
                  <div>
                    <RequestButton handleClicked={this.toRequest}/>
                  </div>
                </Grid.Column>

                 <Grid.Column width={4} className='footer-div'>
                  <Header inverted as='h4' content='Frequently Asked Questions' />
                  <div>
                    <label> Got any questions? We might have answers for that. </label>
                  </div>
                  <br/>
                  <div>
                    <FAQButton handleClicked={this.toFAQs}/>
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