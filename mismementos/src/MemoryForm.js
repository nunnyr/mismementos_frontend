import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class MemoryForm extends React.Component{
 
// state is being used to control input 
    state={
        title:"",
        about:"",
        address:"",
        city:"",
        state:"",
        zipcode: 10027
    }

    handleChange=(evt)=>{
      
        console.log("Handle Change",evt.target.value)
    }

    handleSubmit=(evt)=>{
        console.log('Handle submit')
    }

    render(){
    
        let {title, about, address, city, state, zipcode}= this.state
        return(
            <Form>
             <Form.Group unstackable widths={2}>
                 <Form.Input label='Title' placeholder='Title' value={title} onChange={this.handleChange}/>
                 <Form.Input label='about' placeholder='About' value={about} onChange={this.handleChange}/>
             </Form.Group>
             <Form.Group widths={2}>
                 <Form.Input label='Address' placeholder='Address' value={address} onChange={this.handleChange}/>
                 <Form.Input label='city' placeholder='City' value={city} onChange={this.handleChange}/>
                 <Form.Input label='state' placeholder='State' value={state} onChange={this.handleChange}/>
                 <Form.Input label='zipcode' placeholder='Zipcode' value={zipcode} onChange={this.handleChange}/>
             </Form.Group>
             <Button type='submit'>Submit</Button>
            </Form>

        )
    }
  
}

export default MemoryForm