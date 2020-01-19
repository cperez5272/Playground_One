import React from 'react'

class Addoptions extends React.Component {

    optionList = () => {
        return this.props.options.map(optionList => {
            return <p key={optionList}>{optionList}</p>
            })
        }

    render() {
        console.log(this.optionList())
        return (
            <div>
               {this.optionList()} 
            </div>
        )
    }
}

export default Addoptions