import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';


function App() {
    return ( 
    <div className = "App">
        <Navbar> </Navbar>
       <Routes>
            <Route exact path="/" element={<Home/>}>
            
            </Route>
            <Route  path="/add" element={<Add/>}>
            
            </Route>
            <Route  path="/edit/:id" element={<Edit/>}>
            
            </Route>
        </Routes>
        
         </div>
    );
}

export default App;