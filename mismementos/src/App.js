import React from 'react';
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { Container, Button} from 'semantic-ui-react'
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
      .then(this.helpHandleResponse) 

    }
  }


  //create handleResponse for login information for user
  helpHandleResponse = (res) => {
    // console.log("first res", res)
    if(res.error){
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
       
        token: res.token
      })
      this.props.history.push("/profile")
    }
  }

  // login form for existing user
  renderLoginForm = (routerProps) => {
    // console.log("this is the login router props",  routerProps)
    // console.log("This is token 👀", this.state.token)
    if(this.state.token){
      return <Container><Button floated="right" onClick={this.handleLogout}>Log Out</Button></Container>
    } else if(!this.state.token){
      // console.log("in the else if 🙃")
      return <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
    }
  }

  
 
  // rendering registration form
  renderRegisterForm = (routerProps) => {
    // console.log("this is the register router props",  routerProps)
      return <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>
  }

  renderProfile = (routerProps) => {
    // console.log("these are routerProps", routerProps)
    // console.log("this is token in renderProfile", this.state.token) 
    if(this.state.token){
      return <ProfileContainer
        key={this.state.id}
        id={this.state.id}
        username={this.state.username}
        avatar={this.state.avatar}
        bio={this.state.bio}
        city={this.state.city}
        state={this.state.state}
        zipcode={this.state.zipcode}
        token={this.state.token}
        memories={this.state.memories}
        addNewNote={this.addNewNoteToMemory}
        addMemory={this.addMemory}
        deleteMemory={this.deleteMemory}
        updateMemory={this.updateMemory}
        deleteNote= {this.deleteNoteFromMemory}
      />
    } 
    // console.log("this is state in render profile", this.state.token)
    else {
      return <Redirect to="/login" />
    }
  }

  // takes in information from Login Form

  handleLoginSubmit = (userInfo) => {
    // console.log("we are inside of the handle login submit", userInfo)
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    // console.log("we are inside of the handle register submit", userInfo)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password,
        avatar: userInfo.avatar,
        bio:userInfo.bio,
        city:userInfo.city,
        state:userInfo.state,
        zipcode:userInfo.zipcode
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)
  
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


addMemory = (newMemory) => {
  let copyOfMemories= [...this.state.memories, newMemory]
  this.setState({
    memories:copyOfMemories
  })
  //console.log("in add memory", newMemory)
}

deleteMemory=(deletedMemory)=>{
  // console.log("in app js")
    let copyOfMemories= this.state.memories.filter(memory => {
      return memory.id !== deletedMemory
    })
    this.setState({
      memories: copyOfMemories
    })
}

updateMemory = (updatedMemory) => {
  let copyOfMemories = this.state.memories.map((memory) => {
    if(memory.id === updatedMemory.id){
      return updatedMemory
    } else {
      return memory
    }
  })

  this.setState({
    memories: copyOfMemories
  })

}

  addNewNoteToMemory = (newNote, memoryId) => {
    let memory = this.state.memories.find(singleMemory=> singleMemory.id === memoryId)
    let copyOfNotes = [...memory.notes, newNote]
    let copyOfMemories = {
      ...memory, 
      notes: copyOfNotes
    }
    this.updateMemory(copyOfMemories)
  }

  deleteNoteFromMemory=(deletedNote, memoryId) => {
    let memory=this.state.memories.find(singleMemory=>singleMemory.id === memoryId)
    let returnedNotes= memory.notes.filter(singleNote=>{
      return singleNote.id !== deletedNote.id
    }) 
    let copyOfMemories= {
      ...memory,
      notes: returnedNotes
    }
    this.updateMemory(copyOfMemories)
  }



  render(){
    // console.log(this.state)
    return (
      <div >
        <NavBar token={this.state.token} handleLogout={this.handleLogout}/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" render={this.renderLoginForm}></Route>
          <Route path="/register" render={this.renderRegisterForm}></Route>
          <Route path="/profile" render={this.renderProfile}></Route>
         
          <Route render={ () => <p>Page not Found</p>}></Route>
        </Switch>

      </div>
    ) 
  }


}


export default withRouter(App)










