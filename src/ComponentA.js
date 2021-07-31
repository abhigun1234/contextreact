import React, { Component } from 'react';
import ComponentB from './ComponentB';
import ComponentF from './ComponentF';

class ComponentA extends Component {
    render() {
        return (
            <div>
               <ComponentB></ComponentB> 
               <ComponentF/>
            </div>
        );
    }
}

export default ComponentA;