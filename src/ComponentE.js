import React, { useContext } from 'react';

import {UserConsumer} from './UserContext'
function ComponentE(props) {
    const user =useContext(UserConsumer)
    return (
        <div>
            <h1>Recived data in Component E</h1>
            {user}
        </div>
    );
}

export default ComponentE;