import {URL_API} from "@env"
export const SELECTEDGAME = 'SELECTEDGAME';
export const GET_GAMES = 'GET_GAMES'


export const selectedGame = (id) => ({
  type: SELECTEDGAME,
  id,
});

export const getGames = () => {
  return async dispatch =>{
    try {
      const response = await fetch( `${URL_API}/games.json`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json'
        }
      } )
      const result = await response.json()
      dispatch({type:GET_GAMES,list:result})

    }catch(error){
      console.log(error.message)
    }
  }
}


