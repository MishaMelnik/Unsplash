import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';
import Home from "./Components/Home/Home";
import ModalCase from "./Components/ModalCase/ModalCase";
import FeaturedCollections from "./Components/ FeaturedCollections/ FeaturedCollections";
import MyProfile from "./Components/MyProfile/MyProfile";
import User from "./Components/User/User";



function App() {

    return (
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/modal" component={ModalCase}/>
                <Route path="/modal/user" component={User}/>
                <Route path="/featured_collections" component={FeaturedCollections}/>
                <Route path="/my_profile" component={MyProfile}/>
            </Router>
  );
}

export default App;
