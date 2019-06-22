import React from 'react'

export default function Data(props) {
    console.log('props',props)
    console.log('props.models', props.models)

    return (
        <div>
            <h3>Select what you want and click the button to add on.</h3>
            
            <select>
                {
                    props.models
                    .map(obj => 
                    <option key={obj.name}>{obj.name}{obj.year}
                    </option>)
                }   
            </select>
        </div>
    )
}

