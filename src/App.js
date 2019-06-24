import React, { Component } from "react";
import './App.css'
import { connect } from 'react-redux'
import { addModel } from './actions/actions'

const data = [
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

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }

        this.updateSelection = this.updateSelection.bind(this)
        this.handleAddModel = this.handleAddModel.bind(this)
    }

    updateSelection(event) {
        this.setState({ value: event.target.value })
    }

    handleAddModel = event => {
        this.props.addModel(this.state.input)
        this.setState({ input: { ...data, ...this.props.model } })
        event.preventDefault()
    }

    render() {
        return (
            <div className="App">
                <h1>Home Computer Model</h1>
                <form onSubmit={this.handleAddModel}>
                    <label>Select your favorite model</label>
                    <select onChange={this.updateSelection}>
                        {
                            data.map(obj =>
                                <option key={obj.name} data={obj}> {obj.name}({obj.year}) </option>)
                        }
                    </select>
                    <button type="submit" value="Submit" onClick={this.handleAddModel}>Add</button>
                </form>
                <form onSubmit={this.handleAddModel}>
                    {data.map(obj =>
                        <ul key={obj.name} onSubmit={this.handleAddModel}>
                            <li>name: {obj.name}</li>
                            <li>manufacturer: {obj.manufacturer}</li>
                            <li>year: {obj.year}</li>
                            <li>origin: {obj.origin}</li>
                        </ul>)}
                </form>

            </div>
        )
    }
}

const mapStateToProps = data => {
    return {
        models: data
    }
}

const mapDispatchToProps = { addModel }


export default connect(
    mapStateToProps,
    mapDispatchToProps)(App)