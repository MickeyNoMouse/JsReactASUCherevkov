import React, { useState, useEffect } from 'react';

function Content() {
      
      const [count, setCount] = useState(0);
         
    useEffect(() => {
        
        document.title = `Вы нажали ${count} раз`;
    }, [count]); 
    return (

        <div style={{border: '5px solid aqua', padding: '5px', display: 'flex', 
        justifyContent: 'center', alignItems: 'center', width: '1200px', height: '500px', position: 'relative', left: '20%', top: '10%',}}>
            
                <div style={{ fontSize: '22px', textAlign: 'center',  color: 'Aqua'}}>
                <h2>Пример использования useState и useEffect</h2>
            <p>Вы нажали {count} раз</p>
            
            <button onClick={() => setCount(count + 1)}>
                Нажмите кнопку
            </button>
                </div>

        </div> 
    );
}
export default Content;