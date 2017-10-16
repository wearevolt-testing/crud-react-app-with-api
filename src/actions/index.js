export const addCust = (id, name, address, phone) => {
	return {
		type: 'ADD_CUST',
		id: id++,
		name,
		address,
		phone
	}
}

export const addProd = (id, name, price) => {
	return {
		type: 'ADD_PROD',
		id: id++,
		name,
		price	
	}
}

export const addInv = (id, customer, discount, total) => {
	return {
		type: 'ADD_INV',
		id: id++,
		customer,
		discount,
		total
	}
}


