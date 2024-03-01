import React from 'react';
import Container from './components/Container';
import Button from './components/Button';
import Layuot from './components/Layout';


function App() {
  const handleClick = () => {
    alert('Юлий Цезарь носил лавровый венок, чтобы скрыть начинающуюся лысину. Кто-то это вообще прочтет?');
  };

  return (
    <>
  <Layuot />
    <Container>
      <Button onClick={handleClick} >Кнопка. Лучше не нажимать</Button>
    </Container>
    </>

  );
}

export default App;
