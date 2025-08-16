export const initialStore=()=>{
  return{
    message: null,
    characters: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    
      case 'tomar_personajes':
        return {
            ...store,
            characters: action.payload

        }
    default:
      throw Error('Unknown action.');
  }    
}
