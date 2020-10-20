import React, {useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'


class LoginForm extends React.Component{

    state={
      username:"",
      password: ""
    }

  handleSubmit=(evt)=>{
      evt.preventDefault()
      this.props.handleLoginSubmit(this.state)
  }

  handleChange=(evt)=>{
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }
  
    render(){
      return(
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Username'
                value={this.state.username} 
                name="username"
                placeholder='Username'
                onChange={this.handleChange}/>
              <Form.Input fluid label='Password' 
                value={this.state.password} 
                name="password"
                placeholder='Password' 
                onChange={this.handleChange}/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
      )
    }
}

export default LoginForm