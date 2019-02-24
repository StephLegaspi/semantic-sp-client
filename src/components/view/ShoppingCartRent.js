import React, { Component } from 'react';
import { Table, Image, Header, Dropdown, Card } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import img_tree from '../../images/tree.jpg'

class ShoppingCartRent extends Component {
  constructor(props){
    super(props);

    this.state = {
        date: ''

    };
    this.stateOptions = [ { key: '1', value: '1', text: 'One' }, { key: '2', value: '2', text: 'Two' }, { key: '3', value: '3', text: 'Three' } ]
  }

  handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
      }
  }


  render() {
    return (
      <div>
        <HeaderBar headerTitle={'Shopping Cart'}/>
        <div className='table-div-longer'>
        <Table singleLine>
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell id='header-color'style={{width: '10%'}}>Product Image</Table.HeaderCell>
              <Table.HeaderCell id='header-color'style={{width: '15%'}}>Name</Table.HeaderCell>
              <Table.HeaderCell id='header-color' style={{width: '10%'}}>No. of items available</Table.HeaderCell>
              <Table.HeaderCell id='header-color'style={{width: '5%'}}>Color</Table.HeaderCell>
              <Table.HeaderCell id='header-color' style={{width: '10%'}}>Quantity</Table.HeaderCell>
              <Table.HeaderCell id='header-color' style={{width: '5%'}}>Date of Return</Table.HeaderCell>
              <Table.HeaderCell id='header-color'style={{width: '10%'}}>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={img_tree} rounded size='massive' />
                </Header>
              </Table.Cell>
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>
                <Dropdown placeholder='Color' search selection options={this.stateOptions} />
              </Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>
                <DateInput
                        name="date"
                        placeholder="Event Date"
                        value={this.state.date}
                        iconPosition="left"
                        onChange={this.handleChange}
                />
              </Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            
          </Table.Body>
        </Table>

        <Card id='order-summary'>
          <Card.Content>
            <Card.Header>ORDER SUMMARY</Card.Header>
            <Card.Description>Total number of items: </Card.Description>
            <Card.Description>Date of Return: </Card.Description>
            <Card.Description>Total price: </Card.Description>

            <button class="ui labeled icon button" id='checkout-button2'>
              <i class="cart icon"></i>
              Checkout
            </button>
          </Card.Content>
        </Card>
        </div>

        <Footer/>
      </div>
    );
  }

}

export default ShoppingCartRent;