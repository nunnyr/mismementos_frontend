import React from 'react';
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import { Button} from 'semantic-ui-react'

import './App.css';

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'


class App extends React.Component {

  state = {
    id: 0,
    username: "",
    password: "",
    avatar: "",
    bio: "",
    city: "",
    state: "",
    zipcode: 10028,
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
    console.log("first res", res)
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
      console.log("zipcode", this.state.zipcode)
      this.props.history.push("/profile")
    }
  }

  
  renderLoginForm = (routerProps) => {
    // console.log("this is the login router props",  routerProps)
    console.log("This is token 👀", this.state.token)
    // if(this.state.token){
    //   return <Button onClick={this.handleLogout}>Log Out</Button> 
    // }
    // else if(!this.state.token){
      console.log("in the else if 🙃")
      return <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
    // }
  }

   
  // renderRegisterForm = (routerProps) => {
  //   console.log("this is the register router props",  routerProps)
  //     return <RegisterForm handleSubmit={this.props.handleRegisterSubmit}/>
  // }

  renderProfile = (routerProps) => {
    // console.log("these are routerProps", routerProps)
    if(this.state.token) {
      return <ProfileContainer
        id={this.state.id}
        username={this.state.username}
        avatar={this.state.avatar}
        bio={this.state.bio}
        city={this.state.city}
        state={this.state.state}
        zipcode={this.state.zipcode}
        addMemory={this.addMemory}
      />
    } else {
      return <Redirect to="/login" />
    }
  }

  handleLoginSubmit = (userInfo) => {
    // console.log("we are inside of the handle login submit", userInfo)
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res => res.json())
    .then(this.responseHandler)

  }

  handleLogout = () => {
    this.setState({
      id: 0,
      username: "",
      password: "",
      avatar: "",
      bio: "",
      city: "",
      state: "",
      zipcode: 10028,
      memories: [],
      token: ""
    })
    localStorage.clear()
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("we are inside of the handle register submit")

  }

  responseHandler = (res) => {
    console.log("this be an answer 😎", res)

    let {id, username, password, avatar, bio, city, state, zipcode, memories} = res.user
    if(res.error){

      console.error(res.error)
    }
    else {
       
      localStorage.token = res.token
      this.setState({
        id,
        username,
        password,
        avatar,
        bio,
        city,
        state,
        zipcode,
        memories,
        token: res.token
      })
      // console.log("after setState 😯", password)
      this.props.history.push("/profile")
    }

  } 


//addMemory to state helper function
addMemory = (newMemory) => {
  console.log("in add memory", newMemory)
}

 
  render(){
    return (
     
      
      <div >
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" render={this.renderLoginForm}></Route>
          <Route path="/register" render={this.renderRegisterForm}></Route>
          <Route path="/profile" render={this.renderProfile}></Route>
         
          {/* <Route render={ () => <p>Page not Found</p>}></Route> */}
        </Switch>

      </div>
    ) 
  }


}

let magicalComponent = withRouter(App)
export default magicalComponent