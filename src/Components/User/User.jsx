import React from 'react';
import Header from "../Home/Header/Header";
import UserAvatar from "./UserAvatar/UserAvatar";
import Cards from "./Cards/Cards";


const User = (props) => {

    const {state} = props.location

    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <UserAvatar state={state}/>
                <Cards state={state}/>
            </main>
        </div>
    );
};

export default User;
