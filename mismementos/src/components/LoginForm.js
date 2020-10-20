import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Username' placeholder='Username' />
        <Form.Input fluid label='Password' placeholder='Password' />
      </Form.Group>
     
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
export default LoginForm