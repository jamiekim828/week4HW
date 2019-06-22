import React from 'react';
import './App.css'
const redux = require('redux')


function App() {
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
    
    console.log('app',data)

    const initialState = []

    const reducer = (state = initialState, action = {}) => {
        switch (action.type) {
        case 'ADD_MODEL':
          return [
            ...state,
            { ...action.payload }
          ]
        default:
            return state
        }
    }

    const store = redux.createStore(reducer)
    store.subscribe(()=>console.log('Next state:', store.getState()))

    const action = {
        type: "ADD_MODEL",
        payload: data
    }
    store.dispatch(action)

    

    return (
    <div className="App">
          <h1>Home Computer Model</h1>
          <select>
          {
            data.map(obj => 
            <option key={obj.name} data={obj}>{obj.name}({obj.year})</option>)
          }
          </select>
          <button>Add</button>
    </div>
    )
  }
  
// class ModelForm extends React.Component {
//     constructor(props) {
//        super(props);
//        this.updateSelection = this.updateSelection.bind(this);
//     }

//     updateSelection = e => {
//         this.setState({ value: e.target.value });
//     }
// }

export default App;

 
{/* <AddButton dispatch={this.props.dispatch}/> */}
        