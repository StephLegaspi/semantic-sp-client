import React, { Component } from 'react';
import { Icon, Menu, Table, Input, Select, Button, Image, Header } from 'semantic-ui-react'

import img_tree from './tree.jpg'

import './assets/index.css';

class ViewShoppingCart extends Component {
  constructor(props){
    super(props);
    
    this.options = [
      { key: 'user_ID', text: 'User ID', value: 'user_ID' },
      { key: 'timestamp', text: 'Timestamp', value: 'timestamp' },
    ]
  }


  render() {
    return (
      <div>
        <div className='table_div'>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Color</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
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
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={img_tree} rounded size='massive' />
                </Header>
              </Table.Cell>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>January 11, 2014</Table.Cell>
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
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        </div>
      </div>
    );
  }

}

export default ViewShoppingCart;