const initialState = {
    users : [{name: 'defaultName' ,prenom:'defaultPrenom' ,age: 'defaultAge'}]
    // counter : 0
} ;
const reducer = (state = initialState ,action) => {
    switch (action.type) {
        case 'SEE' : 
            return {
                ...state
            }
        case 'ADD' : 
            return {
                ...state,users:[...state.users ,action.payload]
            }
        // case 'INC':
        //     return {counter:state.counter + 1}
        // case 'DEC':
        //     return {counter:state.counter - 1}
        // case 'RES':
        //     return {counter: 0}
        default:
            return {...state}
    }
}
export default reducer ;