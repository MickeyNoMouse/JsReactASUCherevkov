import React from "react";

function Content() {
    return (

        <div style={{border: '5px solid aqua', padding: '5px', display: 'flex', 
        justifyContent: 'center', alignItems: 'center', width: '1200px', height: '500px', position: 'relative', left: '20%', top: '10%',}}>
            
                <div style={{ fontSize: '38px', textAlign: 'center',  color: 'Aqua'}}>
                   Реализованы компоненты Header, Footer, Menu и Content.
                   В меню список лаб.
                   в Content содержимое (тут) 
                </div>

        </div> 
    );
}
export default Content;