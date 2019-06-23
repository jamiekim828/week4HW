import React from 'react';
import './App.css'
import { connect } from 'react-redux'
import ModelDetails from './components/ModelDetails'
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

    

    // updateSelection = event => {
    //     this.setState({value: event.target.value})
    // }

    // this.updateSelection = this.updateSelection.bind(this)

    

    function addModel(data) {
        return {
            type: 'ADD_MODEL',
            payload: data
        }
    }
    // dispatch(addModel(data))
    
    const reducer = (state = initialState, action = {}) => {
        switch (action.type) {
        case 'ADD_MODEL':
          return [
            ...state,
             ...action.payload 
          ]
        default:
            return state
        }
    }


    const store = redux.createStore(reducer)
    store.subscribe(()=>console.log('Next state:', store.getState()))
    store.dispatch(addModel(data))


    
    return (
    <div className="App">
          <h1>Home Computer Model</h1>
          
          <select>
          {
            data.map(obj => 
            <option key={obj.name} data={obj}>{obj.name}({obj.year})</option>)
          }
          </select>
          
          {
            data.map(
                model => 
                <ModelDetails key={data.name}/>
            )
          }
    </div>
    )
}


const mapStateToProps = state => {
    return {
      models: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addModel: () => dispatch()
    }
  }

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(
    App)


{/* <AddButton dispatch={this.props.dispatch}/> */}
        