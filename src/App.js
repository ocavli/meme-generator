
import './App.css';
import Navbar from "./components/Navbar"
import Meme from './components/Meme';
import Counter from './components/Counter';
import Form from './components/Form';
import Signup from './components/Signup';
import Ternary from './components/Ternary';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <div className="App">
      {/**
      
        <Form/>
    
    <Signup/>
        <Ternary/>
   <UseEffect />
      <Counter/>**/}
<Navbar/>
<Meme/>

    </div>
  );
}

export default App;
