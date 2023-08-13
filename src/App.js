import logo from './logo.svg';
import './Appaa.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState} from 'react'
{/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
*/}


function App() {

const [mode,addmode]=useState('light');
const [textt,addtext]=useState('Enable Dark Mode');
const [alert,setalert]=useState(null);

const [chg,addchg]=useState("purple");

/*color changer circles*/ 
const makefun1=(blue)=>{
  if ( blue === blue ) {
    
    document.body.style.backgroundColor="rgb(36, 173, 167)";
    addchg('rgb(36, 173, 167)')
  } 
  }
const makefun2=(green)=>{
  
  if ( green === green ) {
    document.body.style.backgroundColor="green";
    addchg('green')
  } 
}
const makefun3=(brown)=>{
  if ( brown === brown ) {
    document.body.style.backgroundColor="brown";
    addchg('gray')
  } 
}
/*end*/

const showAlert=(message,type)=> {
  setalert({
      msg: message,
    type:type,
    })
   
      setTimeout(() => {
        setalert(null);
      }, 1500);
    
}
const togglefun=()=> {
  if ( mode === 'light') {
    addmode('dark')
    document.body.style.backgroundColor="gray";
    showAlert("Dark Mode Is Enabled","secondary");
    document.title='SubhanDEV2---Dark Mode';
   // setInterval(() => {
     // document.title='You have virus download cleanMe'; 
    //}, 2000);
    //setInterval(() => {
      //document.title='Download cleanMe ';
    //}, 1500);
  }
  else {
    addmode('light')
    document.body.style.backgroundColor="white";
    showAlert("Light Mode Is Enabled","success");
    document.title='SubhanDEV2---Light Mode';
  }
}

const textfun=()=> {
  if ( textt === 'Enable Dark Mode') {
    addtext('Disable Dark Mode')
  
  }
  else {
    addtext('Enable Dark Mode')
  }
}
  return (
  <>


{/*<Router>*/}
   <Navbar  title="subhdev2" about="ABOUTUS" mode={mode} makefun1={makefun1}makefun2={makefun2}makefun3={makefun3} togglefun={togglefun} textt={textt} textfun={textfun}/>
    <Alert alert={alert} />


 <div className="container my-3">
 <TextForm showAlert={showAlert} heading="Enter Text to analyze "mode={mode} />
   {/*<Routes>
          <Route exact path="/aboutttt" element={<About />}/>
          <Route exact path="/"   element={<TextForm showAlert={showAlert} heading="Enter Text to analyze "mode={mode} />}/>
  </Routes>*/}       
 </div> 
{/*</Router>*/}
  </>  
  );
}

export default App;
