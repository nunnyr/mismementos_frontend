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
        console.log('Handle submit')
    }

    render(){
    
        let {username, password, avatar, bio, city, state, zipcode}= this.state
        return(
            <Form>
             <Form.Group unstackable widths={2}>
                 <Form.Input label='Username' placeholder='Username' value={username} onChange={this.handleChange}/>
                 <Form.Input label='Password' placeholder='Password' value={password} onChange={this.handleChange}/>
             </Form.Group>
             <Form.Group widths={2}>
                 <Form.Input label='Avatar' placeholder='Avatar' value={avatar} onChange={this.handleChange}/>
                 <Form.Input label='Bio' placeholder='Bio' value={bio} onChange={this.handleChange}/>
                 <Form.Input label='City' placeholder='City' value={city} onChange={this.handleChange}/>
                 <Form.Input label='State' placeholder='State' value={state} onChange={this.handleChange}/>
                 <Form.Input label='zipcode' placeholder='Zipcode' value={zipcode} onChange={this.handleChange}/>
             </Form.Group>
             <Button type='submit'>Register</Button>
            </Form>

        )
    }
  
}

export default RegisterForm