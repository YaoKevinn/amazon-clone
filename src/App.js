import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login.js'
import './App.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

    const [{ user }, dispatch] = useStateValue();

    // userEffect <<<<<<<<< conditional 
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is logged in...
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            }else{
                // User is logged out...
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });

        return () => {
            //Any cleanup opeartions go in here...
            unsubscribe();
        }
    }, []);  
    // [] because it should runs only one time

    console.log("User is >>>>>>", user)

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <Header />  
                        <Checkout />
                    </Route>
                    <Route path="/login">
                          <Login />
                    </Route>
                    <Route path="/">
                         <Header />
                         <Home />
                    </Route>
                </Switch>
            </div>
       </Router>
    );
}

export default App;
