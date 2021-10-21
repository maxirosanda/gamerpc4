import {URL_API} from "@env"
export const SELECTEDPROGRAM= 'SELECTEDPROGRAM';
export const GET_PROGRAMS = 'GET_PROGRAMS'

export const selectedProgram = (id) => ({
  type: SELECTEDPROGRAM,
  id,
});

export const getPrograms = () => {
  return async dispatch =>{
    try {
      const response = await fetch( `${URL_API}/programs.json`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json'
        }
      } )
      const result = await response.json()
      dispatch({type:GET_PROGRAMS,list:result})

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
          userId,
          items: { ...payload },
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