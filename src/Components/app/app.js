import { Component } from 'react';
import nextId from "react-id-generator";
import { useTransition, animated } from 'react-spring';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'

import Header from '../../Header/header'; 

import HomePage from '../pages/home-page';
import CoffeePage from '../pages/coffe-page';
import CoffeeItemPage from '../pages/coffe-item-page';

import './app.css';

function App () {

        return (
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />}>
                        {/* <Route path='/CoffeePage'>
                            <CoffeePage />
                        </Route> 
                        <Route path='/CoffeeItemPage'>
                            <CoffeeItemPage />
                        </Route> */}
                    </Route>
                </Routes>
            </Router>
        );
    }

export default App;