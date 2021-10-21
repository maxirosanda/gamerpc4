import {URL_API} from "@env"

export const SELECTEDORDER = 'SELECTEDORDER';
export const GET_ORDERS = 'GET_ORDERS'

export const CONFIRM_ORDER = 'CONFIRM_ORDER'
export const GET_ORDERSUSER = 'GET_ORDERSUSER'
export const DELETE_ORDER = 'DELETE_ORDER'

export const selectedOrder = (_id) => ({
  type: SELECTEDORDER,
  _id,
});

export const getOrders = () => {
  return async dispatch =>{
    try {
      const response = await fetch( `${URL_API}/orders.json`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json'
        }
      } )
      const result = await response.json()
      dispatch({type:GET_ORDERS,list:result})

    }catch(error){
      console.log(error.message)
    }
  }
}

export const getOrdersUser = (userId) => {
  return async dispatch =>{
    try {
      const response = await fetch( `${URL_API}/orders.json`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json'
        }
      } )
      const result = await response.json()
      const orders = Object.keys(result).map(key => ({ ...result[key], _id: key }))
      const ordersUser =orders.filter(item => item.user ===userId);
      dispatch({type:GET_ORDERSUSER,list:ordersUser})

    }catch(error){
      console.log(error.message)
    }
  }
}
 



export const confirOrder = (payload, userId) => {
    return async dispatch => {
      try {
        dispatch({
          type: CONFIRM_ORDER,
          status: 'loading',
        });
  
        const response = await fetch(`${URL_API}/orders.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: Date.now(),
            user:userId,
            item:payload,
          }),
        });
  
        const result = await response.json();
  
        console.log(result)
  
        dispatch({
          type: CONFIRM_ORDER,
          status: 'success',
        });
      } catch (error) {
        console.log(error.message);
        dispatch({
          type: CONFIRM_ORDER,
          status: 'error',
        });
      }
    }
  }

  

  export const deleteOrder = (_id) => {
    return async dispatch => {
      try {
        dispatch({
          type: DELETE_ORDER,
          status: 'loading',
        });
        const response = await fetch(`${URL_API}/orders/${_id}.json`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const result = await response.json();
  
        dispatch({
          type: DELETE_ORDER,
          status: 'success',
        });
      } catch (error) {
        console.log(error.message);
        dispatch({
          type: DELETE_ORDER,
          status: 'error',
        });
      }
    }
  }
