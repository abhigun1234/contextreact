import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import {UserProvider} from './UserContext'
import Product from './Product';

function App() {
  return (
    <div className="App">
      <UserProvider value="hi now also we are able to send data via context api but we can access through context hooks">
     <ComponentA></ComponentA>
     {/* <Product></Product> */}
     </UserProvider>
     
    </div>
  );
}

export default App;
