
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react' 
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')  // Whether dark mode is enable or not

const [alert, setAlert] = useState(null)

const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#202124d4';
      showAlert("Dark mode is enable","success")
      document.title = 'TextUtils - Dark Mode'
      // setInterval(function(){
      //   document.title = 'TextUtils - Dark Mode'
      // },2000)
      // setInterval(function(){
      //   document.title = 'Install TextUtils Now'
      // },1200)
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enable','success') 
    }
  }

  return (
    <>
    <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading='Enter the text to analyze below' showAlert={showAlert}  mode={mode}/>
    <About  mode={mode}/>
    </div>
    </>
  );
}

export default App;
