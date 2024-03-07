import React from "react";
    
function Menu() {
    return (
<div className="menu" style ={{ display: 'flex', flexDirection: 'column', height: '50%', border: '5px solid aqua', padding: '5px', width: '13%', position: 'fixed', borderRadius: '40px'}}>
            
            <p style={{color: 'aqua'}}>Тут содержимое меню</p>
            <p style={{color: 'aqua'}}>Лабораторная 2</p>
            <p style={{color: 'aqua'}}>Лабораторная 3</p>
        </div>
    ) 
};
export default Menu;
