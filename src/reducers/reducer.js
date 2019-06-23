import { ADD_MODEL }  from '../actions/actions'

const data= [
   {
       name: "Ivel Z3",
       manufacturer: "Ivasim",
       year: 1969,
       origin: "Croatia"
   },
   {
       name: "Bally Astrocade",
       manufacturer: "Bally Consumer Products",
       year: 1977,
       origin: "USA"
   },
   {
       name: "Sord M200 Smart Home Computer",
       manufacturer: "Sord Computer Corporation",
       year: 1971,
       origin: "Japan"
   },
   {
       name: "Commodore 64",
       manufacturer: "Commodore",
       year: 1982,
       origin: "USA"
   }
]


const reducer = (state = data, action={}) => {
   console.log('data', data) 
   switch (action.type) {
        case 'ADD_MODEL':
            return [
               ...state, ...action.payload
            ]
    default:
      return state
   }
}

export default reducer