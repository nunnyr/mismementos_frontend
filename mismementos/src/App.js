import React from 'react';
import Map from './ProfileComponents/Map'
import MemoryForm from './ProfileComponents/MemoryForm'

import ProfileContainer from './ProfileComponents/ProfileContainer'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'

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
      this.props.history.push("/profile")
    }
  }

  
  renderLoginForm = (routerProps) => {
    console.log("this is the login router props",  routerProps)
      return <LoginForm handleSubmit={this.props.handleLoginSubmit}/>
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
    console.log("we are inside of the handle login submit")

  }

  handleRegisterSubmit = (userInfo) => {
    console.log("we are inside of the handle register submit")

  }



//addMemory to state helper function
addMemory = (newMemory) => {
  console.log("in add memory", newMemory)
}

 
  render(){
    return (
     
      
      <div >
        <NavBar/>
        <Map/>
        <MemoryForm/>
        <Switch>
          {/* <Route path="/" exact component={Home}></Route> */}
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