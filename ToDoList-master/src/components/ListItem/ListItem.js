import React from 'react'


export default function ListItem(props) {
    return (
        <div className='form-group'>
            
            <input className='formcontrol' onBlur={(e)=>{
                e.preventDefault()
                props.handleChange(e.target.value,props.id)
                }}
                type="text"
                defaultValue={props.content}
            >
            </input>
            <button className='btn-secondary'  onClick={
                ()=>{
                    props.handleDelete(props.id)
                }
            }>Delete</button>
        </div>
    )
}
