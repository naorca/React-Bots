import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import TopBar from './TopBar'; 
import Welcome from './Welcome'; 
import Browse from './Browse'; 


const Links = () => (
    <ul className="link-bar">
        <li ><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/browse" className="nav-link">Browse</Link></li>
       
    </ul>
)
const App = ()=> (
        <HashRouter>   
            <div className="main-app">
                <TopBar><Links /></TopBar>
                <Route exact path="/" component={Welcome} />
                <Route path="/browse" component={Browse}></Route>
		      
            </div>
        </HashRouter>
)
export default App