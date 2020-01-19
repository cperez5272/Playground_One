import React from 'react'
import Options from './Options'
import AddOptions from './AddOptions'
import Action from './Action'
import Option from './Option'

class SimpleComponents extends React.Component {
    render(){
        const options = ['thing one', 'thing two', 'thing four']
        return (
            <div>
                <Options options={options}/>
                <Action />
                <AddOptions options={options}/>
                <Option />
            </div>
        )
    }
}

export default SimpleComponents



