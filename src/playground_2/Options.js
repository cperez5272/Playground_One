import React from 'react'

class Options extends React.Component {
    render() {
        return (
            <div>
                <h2>The current amount of options we have now are...{this.props.options.length}</h2>
            </div>
        )
    }
}

export default Options