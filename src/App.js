import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import {UserProvider} from './UserContext'
import Product from './Product';

function App() {
  return (
    <div className="App">
      <UserProvider value="hkbhkbhkjbhikikhj">
     <ComponentA></ComponentA>
     {/* <Product></Product> */}
     </UserProvider>
     
    </div>
  );
}

export default App;
