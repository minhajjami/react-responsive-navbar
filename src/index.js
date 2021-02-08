import React from 'react'
import ReactDom from 'react-dom'
import Navbar from './Navbar'
import './App.css'

const App = ()=>{
    return <Navbar/>
}

ReactDom.render(<App/>,document.getElementById('root'));