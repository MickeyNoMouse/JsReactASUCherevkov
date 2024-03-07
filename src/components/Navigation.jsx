import React from "react";

function Navigation() {
    return (
        <nav style={{color: 'aqua', fontSize: '18px'}}>
            <ul >
                <li><a href="/" style={{color: 'orange'}}>Главная</a></li>
                <li><a href="/two" style={{color: 'orange', lineHeight: '1.5'}}>Другая несуществующая <br />страница</a></li>
            </ul>
        </nav> 
    )
};

export default Navigation;