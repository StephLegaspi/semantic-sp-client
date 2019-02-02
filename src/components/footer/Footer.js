import React from 'react'
import '../../styles/footer.css'

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  Button
} from 'semantic-ui-react'


const Footer = () => (
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
                <Button circular icon='big envelope outline' size='big' id='footer-button1'/>
              </div>
            </Grid.Column>

            <Grid.Column width={5} className='footer-div'>
              <Header inverted as='h4' content='Request for Catering Package' />
              <div>
                <label> Fill up the request form and we will get back to you as soon as we can.</label>
              </div>
              <div>
                <Button circular icon='big file text' size='big' id='footer-button2'/>
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
)

export default Footer