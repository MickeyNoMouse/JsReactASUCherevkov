import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav style={{ color: 'aqua', fontSize: '18px' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', marginTop: 0, alignItems: 'flex-start' }}>
                <li><Link to="./HomePage" style={{ color: 'orange' }}>Главная</Link></li>
                <li><Link to="./AboutPage" style={{ color: 'orange' }}>Другая несуществующая страница</Link></li>
            </ul>
        </nav>
    )
};

export default Navigation;
