import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [switchText, setSwitchText] = useState("Enable Dark Mode");

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  };

  const toggleSwitchText = (changeSwitchText) => {
    setSwitchText({
      changeSwitchText: changeSwitchText
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      ShowAlert("Dark mode has been enabled", "success");
      toggleSwitchText("Enable Light Mode");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light mode has been enabled", "danger");
      toggleSwitchText("Enable Dark Mode");
    }
  }

  return (
    <>
      <Navbar switchText={switchText} title="Notes Editor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm ShowAlert={ShowAlert} heading="Enter your text below" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
