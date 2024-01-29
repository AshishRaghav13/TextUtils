import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alerts from './components/Alerts';
import About from './components/About'; 

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has  been enabled','success')
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been Enabled','success')
    }
  }
  return (
    <>
      <Navbar  title ="TextUtils2" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title ="TextUtils2" AboutSite ="AboutTextUtils"/> */}
      {/* <Navbar/>       for DefaultProps  */}
      <Alerts alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below"mode={mode} /> 
        {/* <About mode={mode}/> */}
      </div>
    </>
  );
}

export default App;
