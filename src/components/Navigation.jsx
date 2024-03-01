import React from "react";

function Navigation() {
    return (
        <nav style={{color: 'aqua'}}>
            <ul >
                <li><a href="/" style={{color: 'orange'}}>Главная</a></li>
                <li><a href="/two" style={{color: 'orange'}}>Другая несуществующая страница</a></li>
            </ul>
        </nav> 
    )
};

export default Navigation;