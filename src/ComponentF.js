import React from 'react';
import ComponentE from './ComponentE';
import {UserConsumer} from './UserContext'
function ComponentF(props) {
    return (
        <div>
            <UserConsumer>

            {
                    (username)=>{
                        return<div><h1>Component F</h1>Hello {username}</div>
                    }
                }
            </UserConsumer>
            <ComponentE></ComponentE>
        </div>
    );
}

export default ComponentF;