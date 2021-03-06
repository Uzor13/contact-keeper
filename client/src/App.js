import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Layout/Navbar";
import Home from './components/Pages/Home';
import About from "./components/Pages/About";
import ContactState from "./Context/Contact/ContactState";
import './App.css';


const App = () => {
    return (
        <ContactState>
            <Router>
                <Fragment className="App">
                    <Navbar/>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </ContactState>
    );
}

export default App;
