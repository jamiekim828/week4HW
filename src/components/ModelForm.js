import React, { Component } from 'react'

export default function ModelForm (props) {
    
        console.log('this',props)
        return (
            <div>
                <ul>
                    <li>name: {}</li>
                    <li>manufacturer: {}</li>
                    <li>year: {}</li>
                    <li>origin: {}</li>
                </ul>
            </div>
        )
}

