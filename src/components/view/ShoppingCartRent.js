import React, { Component } from 'react';
import { Table, Image, Header, Card } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditCartProductRental from '../edit/EditCartProductRental.js'
import AddOrder from '../add/AddOrder.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/font.css';
import '../../styles/button.css';
import img_tree from '../../images/tree.jpg'

class ShoppingCartRent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cust_id: "",
      session_id: "",
      cart_id: "",
      data: [],

      total_bill: '',
      total_items: ''
    };
  }

  componentDidMount() {
        let self = this;
        fetch(`http://localhost:3001/v1/session`,{
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          self.setState({session_id: result.session_id});
          this.getCustomer();
        })
        .catch((e) => {
          console.log(e)
        })
  }

  getCart = () => {
        let self = this;

        fetch(`http://localhost:3001/v1/shopping_carts/shopping_carts/rental/` + this.state.cust_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          self.setState({cart_id: result.data[0].id});
          self.setState({total_bill: result.data[0].total_bill});
          self.setState({total_items: result.data[0].total_items});
          self.getCartProducts();
        })
        .catch((e) => {
          console.log(e)
        })
  }

  getCartProducts = () => {
        let self = this;

        fetch(`http://localhost:3001/v1/shopping_cart/products/` + this.state.cart_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          self.setState({data: result.data});
        })
        .catch((e) => {
          console.log(e)
        })
  }

  getCart = () => {
        let self = this;

        fetch(`http://localhost:3001/v1/shopping_carts/rental/` + this.state.cust_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          self.setState({cart_id: result.data[0].id});
          self.setState({total_bill: result.data[0].total_bill});
          self.setState({total_items: result.data[0].total_items});
          self.getCartProducts();
        })
        .catch((e) => {
          console.log(e)
        })
  }

  getCustomer = () => {
        let self = this;

        fetch('http://localhost:3001/v1/customers/users/' + self.state.session_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          self.setState({cust_id: result.data[0].id});
          self.getCart();
        })
        .catch((e) => {
          console.log(e)
        })
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
              <Table.HeaderCell id='header-color' style={{width: '5%'}}>Rental Duration</Table.HeaderCell>
              <Table.HeaderCell id='header-color'style={{width: '10%'}}>Price</Table.HeaderCell>
              <Table.HeaderCell id='header-color' style={{width: '8%'}}></Table.HeaderCell>
              <Table.HeaderCell id='header-color' style={{width: '8%'}}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {this.state.data.map(prod =>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={img_tree} rounded size='massive' />
                </Header>
              </Table.Cell>
              <Table.Cell>{prod.name}</Table.Cell>
              <Table.Cell>yes</Table.Cell>
              <Table.Cell> {prod.product_color_name} </Table.Cell>
              <Table.Cell>{prod.product_quantity}</Table.Cell>
              <Table.Cell>{prod.rental_duration}</Table.Cell>
              <Table.Cell>{prod.price}</Table.Cell>
              <Table.Cell textAlign='center'>
                <EditCartProductRental data={prod} handleUpdate={this.getCart}/>
              </Table.Cell>
              <Table.Cell textAlign='center'>
                <DeleteModal data_id={prod.sc_id} table_name={'shopping_cart/products'} handleUpdate={this.getCart}/>
              </Table.Cell>
            </Table.Row>
          )} 
          </Table.Body>
        </Table>

        <Card id='order-summary'>
          <Card.Content>
            <Card.Header style={{textAlign: 'center'}}>ORDER SUMMARY</Card.Header>
            <Card.Description style={{marginLeft: '23%'}}>Total number of items: 
              <label className='label-font' style={{marginLeft: '10%'}}>{this.state.total_items} </label> 
            </Card.Description>

            <Card.Description style={{marginLeft: '23%'}}>Total price: 
              <label className='label-font' style={{marginLeft: '32%'}}> {this.state.total_bill} </label>
            </Card.Description>

            <AddOrder id_cart={this.state.cart_id} table_name={'rental'}/>

          </Card.Content>
        </Card>
        </div>

        <Footer/>
      </div>
    );
  }

}

export default ShoppingCartRent;