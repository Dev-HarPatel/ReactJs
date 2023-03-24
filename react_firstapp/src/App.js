
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react' 

function App() {
  const [mode, setMode] = useState('light')  // Whether dark mode is enable or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#202124d4';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading='Enter the text to analyze below'  mode={mode}/>
    <About  mode={mode}/>
    </div>
    </>
  );
}

export default App;
