import React, { Component } from 'react'
import Input from '../Input/Input'
import Lists from '../Lists/Lists'
import axios from 'axios'
const getAPI = 'https://todolistapiproject.azurewebsites.net/api/ToDo'
const postAPI = 'https://todolistapiproject.azurewebsites.net/api/ToDo'
const deleteAPI = 'https://todolistapiproject.azurewebsites.net/api/ToDo/'
const updateAPI = 'https://todolistapiproject.azurewebsites.net/api/ToDo/'


export class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            list: []
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    addListItem = (listItem) => {
        
        const _this=this
        axios.post(postAPI,{
            content:listItem
        }).then(function (response) {          
                if(response.status === 201){
                     _this.setState(prevState => ({
                        list: [...prevState.list,response.data]
                    })) 
                }          
            })
            .catch(function (error) {
            console.log(error);
            });
    }
    
    handleDelete=(id)=>{
        const _this=this
        axios.delete(deleteAPI+id)
            .then(function (response) {
                if(response.status === 200){
                    _this.setState(prevState => ({
                        list: prevState.list.filter( (element) => {
                            return element.id !== id
                        }) 
                    }))
                }
                //_this.setState({ list: response.data})
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    handleChange(data,id){
        
        axios.put(updateAPI+id,{
            content:data,
            id: id
        }).then(response=>{
            console.log(response)
            if(response.status===200){
                this.setState(prevState => ({
                    list: prevState.list.map( (element) => {
                        if(id==element.id)
                            element.content=data
                        return element 
                    }) 
                }))
            }
        }).catch (error  => {
            console.log(error)
        })
    }
    componentDidMount() {
        const _this=this
        axios.get(getAPI)
            .then(function (response) {
                _this.setState({ list: response.data})
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    render() {
        return (
            <div className='todomiddle'>
            
            <Input addListItem={this.addListItem}/>
            <Lists  handleChange={this.handleChange} renderList={this.state.list} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default Main
