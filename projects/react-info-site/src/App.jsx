import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { Contact } from './components/Contact';

function App() {

  return (
    <div className="container">
      <Navbar></Navbar>
      <Contact name= "pepe" number = "1234" email= "gmail" image= "../../public/grid.jpeg"></Contact>
      <Main></Main>
    </div>
  )
}

export default App
