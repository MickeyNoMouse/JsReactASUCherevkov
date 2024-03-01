import React from "react";

function Container({ children }) {
    return (
        <div style={{border: '5px solid aqua', padding: '5px', display: 'flex', 
        justifyContent: 'center', alignItems: 'center', width: '1200px', height: '900px', position: 'absolute', left: '15%', top: '10%',}}>
            
                <div style={{ fontSize: '38px', textAlign: 'center',  color: 'Aqua', display: 'flex', position: 'absolute'}}>Какой-то контент на странице. Внутри контейнера</div>

                <div style={{marginTop:'20px', display: 'flex', position: 'absolute',  top: '55%',}}> {children} </div>
 
        </div>
    );
}
export default Container;