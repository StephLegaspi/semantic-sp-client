import React from 'react'
import './index.css'
import logo from './logo.jpg'
import sample_header from './header2.jpg'
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


const HomePage = () => (
  <div>    
    <Menu fixed='top' id='menu-div'>
      <Container>
    
        <Menu.Item className='logo-div'>
          <Image circular src={logo} className='logo-style' />
        </Menu.Item>

        <Menu.Item as='a' active id='menu-font'>Home</Menu.Item>
        <Menu.Item as='a' id='menu-font'>Shop</Menu.Item>
        <Dropdown item simple text='Catering Services' id='menu-font'>
          <Dropdown.Menu>
            <Dropdown.Item>Packages</Dropdown.Item>
            <Dropdown.Item>Motifs</Dropdown.Item>
            <Dropdown.Item>Food Menus</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as='a' id='menu-font'>Request Package</Menu.Item>
      </Container>
         
      <Container>
        <Menu.Item as='a' id='menu-font' style={{marginLeft: '44%'}} >Portfolio</Menu.Item>
        <Menu.Item as='a' id='menu-font'>Contact Us</Menu.Item>
        <Menu.Item as='a' id='menu-font'>Sign Up</Menu.Item>
        <Menu.Item as='a' id='menu-font'>Login</Menu.Item>
      </Container>
    </Menu>
    
    <Segment id='container'>
      <Image size='large' src={sample_header} style={{marginTop: '3%', minWidth:'100%'}}/>
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

export default HomePage