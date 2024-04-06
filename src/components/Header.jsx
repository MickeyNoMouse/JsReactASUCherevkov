import React from "react";

function Header() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center', 
            textAlign: 'center'
        }}>
            <h1 style={{
                fontSize: '25px',
                color: 'Aqua',
                margin: '0 auto', 
                maxWidth: '80%' 
            }}>
                Header. Тут заголовок. Автор: Черевков Михаил aka M1ck3y, гр.4.105-2
            </h1>
        </div>
    );
}

export default Header;
