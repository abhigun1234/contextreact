import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import {UserProvider} from './UserContext'

function App() {
  return (
    <div className="App">
      <UserProvider value="raj">
     <ComponentA></ComponentA>
     </UserProvider>
    </div>
  );
}

export default App;
