import React from 'react'
import ListItem from '../ListItem/ListItem' 

export default function Lists(props) {

    return (
        <div className='name-list'>
        {props.renderList.map(listItem => {
            return <ListItem handleChange={props.handleChange} handleDelete={props.handleDelete} key={listItem.id} id={listItem.id} content={listItem.content}/>
            })
        }
        </div>
    )
}