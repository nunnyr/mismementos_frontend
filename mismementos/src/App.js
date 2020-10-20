import React from 'react';
import Map from './Map'
import MemoryForm from './MemoryForm'
import './App.css';

class App extends React.Component {

  state = {
    id: 0,
    username: "",
    password: "",
    avatar: "",
    bio: "",
    city: "",
    state: "",
    zipcode: 10021,
    memories: [],
    token: ""
  }



  componentDidMount(){
    //when a user needs to sign in/out their token has to go 
    //to the backend

    if(localStorage.token){
      fetch("http://localhost:3000/users/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(this.handleResponse) 

    }
  }



  //create handleResponse
  handleResponse = (res) => {
    if(Response.error){
      console.error(res.error)
    } else {
      localStorage.token = res.token 
      this.setState({
        id: res.user.id,
        username: res.user.username,
        password: res.user.password,
        avatar: res.user.avatar,
        bio: res.user.bio,
        city: res.user.city,
        state: res.user.state,
        zipcode: res.user.zipcode,
        memories: res.user.memories,
        token: res.user.token
      })
    }
  }

 
  render(){
    return (
      <div>
         <MemoryForm/>
         <Map/>
      </div>
    ) 
  }


}

export default App;
