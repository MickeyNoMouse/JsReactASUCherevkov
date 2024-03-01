import React from "react";
import Navigation from "./Navigation";

function Layuot( ) {
    return (
        <>
        <h1 style={{fontSize: '25px', textAlign: 'center',  color: 'Aqua', marginTop: '25px'}}>Header. Тут заголовок. Автор: Черевков Михаил aka M1ck3y, гр.4.105-2</h1>

        <div className="menu" style ={{ display: 'flex', flexDirection: 'column', height: '50%', border: '5px solid aqua', padding: '5px', width: '13%', position: 'fixed', borderRadius: '40px'}}>
            <Navigation />
            <p style={{color: 'aqua'}}>Тут содержимое меню</p>
            <p style={{color: 'aqua'}}>Лабораторная 2</p>
        </div>
        </>
    );
}

export default Layuot;