import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { WatchPage } from './pages/WatchPage'


function App() {


  const[toggleSideBar, setToggleSideBar] = useState<boolean>(false);
  

  return (    
    <BrowserRouter>
 
      <Header setToggleSideBar = {setToggleSideBar}/>
      <Routes>
        
        <Route path = '/'  element = { <HomePage toggleSideBar = {toggleSideBar} />} />
        
        <Route path = '/watch/:videoId'  element = { <WatchPage />} />

      </Routes>

    </BrowserRouter>    
   
  )
}

export default App
