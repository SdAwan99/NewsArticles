// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [mode, setmode] = useState('light');     


  
const togglemode = ()=>{                     
if(mode === 'light'){
 setmode('dark');
 document.body.style.backgroundColor='#000f51';
}
else{
 setmode('light');
 document.body.style.backgroundColor='white';
}
}





  return (
    
    <div>

<BrowserRouter>
      <main>
           <Navbar mode={mode} togglemode={togglemode}/>
           
           <Routes>
           <Route index element={<News mode={mode} country="us" category="sport"/> }/>
          
          <Route exect path='/sport' element={<News mode={mode} key="sport" country="us" category="sport"/> }/>
          <Route exect path='/Business' element={<News mode={mode} key="business" country="us" category="business"/> }/>
          <Route exect path='/entertainment' element={<News mode={mode} key="entertainment" country="us" category="entertainment"/> }/>
          <Route exect path='/Science' element={<News mode={mode} key="Science" country="us" category="Science"/> }/>
          <Route exect path='/general' element={<News mode={mode} key="general" country="us" category="general"/> }/>
          <Route exect path='/health' element={<News mode={mode} key="health" country="us" category="health"/> }/>
          <Route exect path='/technology' element={<News mode={mode} key="technology" country="us" category="technology"/> }/>
           
           </Routes>

           </main>    
</BrowserRouter>



    </div>
  );
}

export default App;
