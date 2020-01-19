import React from 'react'

class SimpleClasses extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Cesar',
            age: 26
        }
    }

    componentDidMount = () => {
        this.setState ({
            name: 'Unknown',
            age: 0
        })
    }
    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
            </div>
        )
    }
}


export default SimpleClasses