
import './App.css';
import Navbar from "./components/Navbar"
import Meme from './components/Meme';
import Counter from './components/Counter';
import Form from './components/Form';
import Signup from './components/Signup';
import Ternary from './components/Ternary';
import UseEffect from './components/UseEffect';
import MUI from './components/MUI';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      {/**
      
        <Form/>
    
    <Signup/>
        <Ternary/>
   <UseEffect />
      <Counter/>
      <Navbar />
      <main className='main'>
        
      </main>
      <MUI/>
            <Input type="password" label="Password label"/>

      **/}

      <Navbar />
        <Meme />


    </div>
  );
}

export default App;
