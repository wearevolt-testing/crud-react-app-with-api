import { createStore } from 'redux'

const customers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CUST':
      return [
      		...state, 
		    {
		    	id: action.id,
				name: action.name,
				address: action.address,
				phone: action.phone
		    }
		]
	case 'ADD_PROD':
      return [
      		...state, 
		    {
		    	id: action.id,
				name: action.name,
				price: action.price
		    }
		]
  	case 'ADD_INV':
      return [
      		...state, 
		    {
		    	id: action.id,
				customer: action.customer,
				discount: action.discount,
				total: action.total,
		    }
		]

    default:
      return state
  }

}



let store = createStore(customers)

export default store