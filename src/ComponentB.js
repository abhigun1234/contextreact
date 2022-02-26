import React, { Component } from 'react';
import ComponentF from './ComponentF';
import {UserConsumer} from './UserContext'
class ComponentB extends Component {
    render() {
        return (
            <UserConsumer>

                {
                    (res)=>{
                        return<div><h1>Component B</h1>Hello {res}</div>
                    }
                }
            </UserConsumer>
          
            
        );
    }
}

export default ComponentB;