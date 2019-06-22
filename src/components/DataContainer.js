import React from 'react'
import Data from './Data'
import { connect } from 'react-redux'
import { add } from '../actions/actions'

class DataContainer extends React.Component {
    
    render() {
        return (
        <Data models={this.props.models} selectModel={this.selectModel}/>
        )
    }
}

const mapStateToProps = state => {
    console.log('state',state)
    return {
      models: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        add: () => dispatch(add())
    }
}

export default connect
    (mapStateToProps, mapDispatchToProps)(DataContainer)



    