import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { addInv } from '../actions/index'
import Invoice from './Invoice'
import {Button, Table} from 'react-bootstrap'
import CreateInv from './CreateInv'
import '../App.css'

const url = '/api/invoices'
const dispatch = store.dispatch;
const getState = store.getState;


class invoices extends Component {
  constructor() {
    super();
    this.state = {invoices: []}
  }
  componentDidMount(){
      fetch(url)
        .then( invoices => invoices.json() )
        .then(invoices => {
          this.setState({
            invoices
          })
          dispatch(addInv()) 
       })

  }
  render() {
    return (
      <div className="tablePage">
        <h1> Invoice List </h1> 
        <CreateInv/>
        <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Discount</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
                {this.state.invoices.map(invoice => (
                <Invoice key={invoice.id} {...invoice} />
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
    invoices: state.invoices
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: id => {
      dispatch(deleteTodo(id));
    }
  }
}


const invoicesTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(invoices)

export default invoicesTable
