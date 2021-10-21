import {URL_API} from "@env"
export const SELECTEDPRODUCT = 'SELECTEDPRODUCT';
export const GET_PRODUCTS ="GET_PRODUCTS"
export const CONFIRM_ORDER = 'CONFIRM_ORDER'

export const selectedProduct = (id) => ({
  type: SELECTEDPRODUCT,
  id,
});

export const getProducts = () => {
  return async dispatch =>{
    try {
      const response = await fetch( `${URL_API}/products.json`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json'
        }
      } )
      const result = await response.json()
      dispatch({type:GET_PRODUCTS,list:result})

    }catch(error){
      console.log(error.message)
    }
  }
}

