import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { addProd } from '../actions/index'
import Product from './Product'
import {Button, Table} from 'react-bootstrap'
import CreateProd from './CreateProd'
import '../App.css'

const url = '/api/products'
const dispatch = store.dispatch;
const getState = store.getState;


class products extends Component {
  constructor() {
    super();
    this.state = {products: []}
  }
  componentDidMount(){
    fetch(url)
      .then( products => products.json() )
      .then(products => {
        this.setState({
          products
        })
        dispatch(addProd()) 
     })
  }
  render() {
    return (
      <div className="tablePage">
        <h1> Product List </h1> 
        <CreateProd/>
        <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
                {this.state.products.map(product => (
                <Product key={product.id} {...product} />
              ))}
            </tbody>
        </Table>
      </div>

    )
  }
}

//MAP MAP MAP MAP

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: id => {
      dispatch(deleteTodo(id));
    }
  }
}


const productsTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(products)

export default productsTable
