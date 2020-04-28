// this reducer is responsible for translating
// from on state to another
// you can have multiple reducers
// this is where the actions are carried out

let initialState = [] //initial state
const savedItems = JSON.parse (localStorage.getItem("todos"))
if(initialState.length === 0){
initialState = [...savedItems]

}
//reducer function
export function itemReducer (state = initialState, action){
  switch(action.type ){
    case "ADD_ITEM":
      return [...state, action.payload]
    case "DELETE":
    return state.filter( each => each.id !== action.payload )
    case "RESOLVED":
      return state.map(item => {
        if( item.id === action.payload){
item.isResolved = !item.isResolved;
        }
        return item
      })
    default:
      return state
  }
}