import React from 'react'

class Visable extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'Visable Toggle',
            message: '',
            visability: false,
        }
    }

    toggleVisability = () => {
        this.setState ({
            visability: !this.state.visability
        })
    }

    hiddenMessage = () => {
        return <p>Cesar sucks at react</p>
    }

    surpise = () => {
        if(this.state.visability) {
            return this.hiddenMessage()
        } 
    }

    content = () => {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleVisability}>
                    {this.state.visability ? 'Hide Details' : 'Show Details'}
                </button>
                <p>{this.surpise()}</p>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.content()}
            </div>
        )
    }
}

export default Visable