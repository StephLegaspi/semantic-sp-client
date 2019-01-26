import React from 'react'
import './index.css'
import logo from './pic.png'
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

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' id='menu-div'>
      <Container>
        <Menu.Item as='a' header style={{color: 'white'}}>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as='a' style={{color: 'white'}}>Home</Menu.Item>

        <Dropdown item simple text='Dropdown' style={{color: 'white'}}>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

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
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Contact Us' />
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
        <Image centered size='mini' src={logo} />
        <List horizontal inverted divided link size='small' >
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout