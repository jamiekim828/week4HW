import React from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends React.Component {
    
    static propTypes = {
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        origin: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <div>
                { 
                <ul>
                    <li>name: {}</li>
                    <li>manufacturer: {}</li>
                    <li>year: {}</li>
                    <li>origin: {}</li>
                </ul>
                }
            </div>
        )
    }
      
}