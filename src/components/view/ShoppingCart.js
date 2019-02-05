import React, { Component } from 'react';
import { Table, Image, Header, Dropdown, Card } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import img_tree from '../../images/tree.jpg'

class ViewShoppingCart extends Component {
  constructor(props){
    super(props);

    this.state = {}
    this.toShoppingCart = this. toShoppingCart.bind(this);
    this.stateOptions = [ { key: '1', value: '1', text: 'One' }, { key: '2', value: '2', text: 'Two' }, { key: '3', value: '3', text: 'Three' } ]
  }

  toShoppingCart(e) {
    this.props.history.push('/shopping-cart');
  }

  render() {
    return (
      <div>
        <HeaderBar headerTitle={'Shopping Cart'}/>
        <div className='table-div-longer'>
        <Table singleLine>
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell id='header-color'>Product Image</Table.HeaderCell>
              <Table.HeaderCell id='header-color'>Name</Table.HeaderCell>
              <Table.HeaderCell id='header-color'>Color</Table.HeaderCell>
              <Table.HeaderCell id='header-color'>Quantity</Table.HeaderCell>
              <Table.HeaderCell id='header-color'>Price</Table.HeaderCell>
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
              <Table.Cell>
                <Dropdown placeholder='Color' search selection options={this.stateOptions} />
              </Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={img_tree} rounded size='massive' />
                </Header>
              </Table.Cell>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>
                <Dropdown placeholder='Color' search selection options={this.stateOptions} />
              </Table.Cell>
              <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={img_tree} rounded size='massive' />
                </Header>
              </Table.Cell>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>
                <Dropdown placeholder='Color' search selection options={this.stateOptions} />
              </Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Card id='order-summary'>
          <Card.Content>
            <Card.Header>ORDER SUMMARY</Card.Header>
            <Card.Description>Total number of items: </Card.Description>
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

export default ViewShoppingCart;