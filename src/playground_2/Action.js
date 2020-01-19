import React from 'react'

class Action extends React.Component {

    handleClick = () => {
        alert('handleClick is working')
    }

    handleRemoveAll = () => {
        // alert('handleRemove is working now.')
    }
    render() {
        return (
            <div>
                <button onClick= {this.handleClick}>What should I do?</button>
                <button onClick={this.handleRemoveAll}>Should I remove?</button>
            </div>
        )
    }
}

export default Action