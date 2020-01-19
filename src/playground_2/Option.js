import React from 'react'

class Option extends React.Component {

    handleAddOption = (event) => {
       event.preventDefault()
       const option = event.target.elements.option.value

       if(option) {
           alert('you typed an option')
       }
    }

    render() {

        console.log()
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type= 'text' name='option' />
                    <button>Just click here for the form</button>
                </form>
            </div>
        )
    }
}

export default Option