import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
       const content = event.target.elements.content.value
       this.props.addListItem(content)
       event.target.elements.content.value = ''
    }
    
    render() {
        return (
            <form className='form-group' onSubmit={this.handleSubmit}>
            <input className='formcontrol' type='text' name="content" placeholder='add a new todo'></input>
            <button className='btn-primary' type='submit' >Add</button>
            </form>
        )
    }
}

export default Input