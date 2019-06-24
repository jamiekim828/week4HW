import  { ADD_MODEL }  from '../actions/actions'

const initialState = {
   models: []
}

function reducer(state = initialState, action={}) {
   
   switch (action.type) {
        case ADD_MODEL :
            return Object.assign({}, state, {
                models: state.models.concat(action.payload)
            })
    default:
      return state
   }
}

export default reducer