import React from "react";
import { useTheme } from "./ThemeContext";
    
function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div style ={{ display: 'flex', textAlign: 'center'}}>
        <h1 style={{fontSize: '25px', textAlign: 'center', color: theme === 'light' ? 'Aqua' : 'Red'}}>
            Header. Тут заголовок. Автор: Черевков Михаил aka M1ck3y, гр.4.105-2
            <button onClick={toggleTheme}>Изменить тему</button> 
        </h1>
        </div>
    )
};
export default Header;