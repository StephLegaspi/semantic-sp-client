import React, { Component } from 'react';
import { Table, Image, Header, Card, Input } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditCartProductRental from '../edit/EditCartProductRental.js'
import AddOrder from '../add/AddOrder.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/font.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class ShoppingCartRent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cust_id: "",
      cart_id: "",
      data: [],

      total_bill: '',
      total_items: '',

      rental_duration: 1,

      empty_cart: ''
    };
  }

  handleDurationChange = (e, { value }) => {
        this.setState({rental_duration: value});
  }

  toShop() {
    this.props.history.push('/shop/rent');
  }

  componentDidMount() {
    const user = JSON.parse(local_storage.getItem("user_data"));

    if(user === null){
          this.toShop();
    }else{
      const id_session = user.id;
      let self = this;

          fetch('http://localhost:3001/v1/customers/users/' + id_session,{
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
  }

  editRentalDuration = () => {
        const cart = JSON.stringify({rental_duration: this.state.rental_duration})
       
        fetch(`http://localhost:3001/v1/shopping_carts/rental-duration/` + this.state.cart_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: cart
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
            console.log("Edited cart - rental duration");
          }
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
          if(result.status===200){
            self.setState({cart_id: result.data[0].id});
            self.setState({total_bill: result.data[0].total_bill});
            self.setState({total_items: result.data[0].total_items});
            self.getCartProducts();
            self.setState({empty_cart: false}); 
          }else if(result.status===404){
            self.setState({empty_cart: true});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }


  render() {
    return (
      <div>
        <HeaderBar headerTitle={'Shopping Cart'}/>
        <div className='table-div-longer2'>
        <Table singleLine>
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell style={{width: '20%'}}>Product Image</Table.HeaderCell>
              <Table.HeaderCell style={{width: '15%'}}>Name</Table.HeaderCell>
              <Table.HeaderCell style={{width: '15%'}}>Color</Table.HeaderCell>
              <Table.HeaderCell  style={{width: '10%'}}>Quantity</Table.HeaderCell>
              <Table.HeaderCell style={{width: '10%'}}>Price</Table.HeaderCell>
              <Table.HeaderCell  style={{width: '8%'}}></Table.HeaderCell>
              <Table.HeaderCell  style={{width: '8%'}}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {this.state.data.map(prod =>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={`http://localhost:3001/${prod.image}`} size='massive' />
                </Header>
              </Table.Cell>
              <Table.Cell>{prod.name}</Table.Cell>
              <Table.Cell> {prod.product_color_name} </Table.Cell>
              <Table.Cell>{prod.product_quantity}</Table.Cell>
              <Table.Cell>{(prod.price).toFixed(2)} pesos</Table.Cell>
              <Table.Cell textAlign='center'>
                <EditCartProductRental data={prod} handleUpdate={this.getCart} remaining_items={prod.remaining}/>
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
            
            <Card.Description style={{marginLeft: '23%'}}>Rental Duration: 
              <Input type='number' defaultValue={this.state.rental_duration} min={1} onChange={this.handleDurationChange} style={{marginLeft: '17%', width: '30%'}}/>
            </Card.Description>

            <Card.Description style={{marginLeft: '23%'}}>Total number of items: 
              <label className='label-font' style={{marginLeft: '10%'}}>{this.state.total_items} </label> 
            </Card.Description>

            <Card.Description style={{marginLeft: '23%'}}>Total price: 
              <label className='label-font' style={{marginLeft: '32%'}}> {this.state.total_bill} </label>
            </Card.Description>

            <AddOrder id_cart={this.state.cart_id} duration_rental={this.state.rental_duration} updateCart={this.editRentalDuration} table_name={'rental'} button_status={this.state.total_items===0? true : this.state.empty_cart} route={'rent'}/>

          </Card.Content>
        </Card>
        </div>

        <Footer/>
      </div>
    );
  }

}

export default ShoppingCartRent;