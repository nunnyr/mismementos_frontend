import React from 'react';
import Map from '../ProfileComponents/Map'
import {NavLink} from 'react-router-dom'
import { Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'


const NavBar = (props) => {
    // console.log("😰", props)
  
    return(
        <div>
            <Segment basic inverted>
            <Header className="title" size='huge'>Mis Mementos</Header>
            </Segment>
             <Sidebar.Pushable as={Segment}>
                <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
                >
                <Menu.Item>
                    <Icon name='home' />
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Icon name='key' />
                    <NavLink to="/login">Login</NavLink>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='camera' />
                    <NavLink to="/register">Register</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Icon name='user' />
                    <NavLink to="/profile">Profile</NavLink>
                </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                <Segment basic>
                    {props.token ? <Map/> : <Image src='https://miro.medium.com/max/2600/0*xTG-uAPqeKqDrPw4.png' />}
                </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
              
        </div>
    )
}

export default NavBar;