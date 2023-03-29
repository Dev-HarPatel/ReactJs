
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react' 
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Switch>
          <Route path="/about">
            <div className="container my-3">
                <About mode={mode}/>
            </div>
          </Route>
          <Route path="/Home">
            <TextForm heading='Enter the text to analyze below' showAlert={showAlert}  mode={mode}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
