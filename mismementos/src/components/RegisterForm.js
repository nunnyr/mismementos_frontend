import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class RegisterForm extends React.Component{
 
// state is being used to control input 
    state={
        username:"",
        password: "",
        avatar: "",
        bio: "",
        city: "",
        state:"",
        zipcode: 10027
    }

    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit=(evt)=>{
        evt.preventdefault()
       this.props.handleRegisterSubmit(this.state)
    }

    render(){
    
        let {username, password, avatar, bio, city, state, zipcode}= this.state
        return(
            <Form onSubmit={this.handleSubmit}>
             <Form.Group unstackable widths={2}>
                 <Form.Input label='Username' placeholder='Username' name="username" value={username} onChange={this.handleChange}/>
                 <Form.Input label='Password' placeholder='Password' name="password" value={password} onChange={this.handleChange}/>
             </Form.Group>
             <Form.Group widths={2}>
                 <Form.Input label='Avatar' placeholder='Avatar' name="avatar" value={avatar} onChange={this.handleChange}/>
                 <Form.Input label='Bio' placeholder='Bio' name="bio" value={bio} onChange={this.handleChange}/>
                 <Form.Input label='City' placeholder='City' name="city" value={city} onChange={this.handleChange}/>
                 <Form.Input label='State' placeholder='State' name="state" value={state} onChange={this.handleChange}/>
                 <Form.Input label='Zipcode' placeholder='Zipcode' name="zipcode" value={zipcode} onChange={this.handleChange}/>
             </Form.Group>
             <Button type='submit'>Register</Button>
            </Form>

        )
    }
  
}

export default RegisterForm