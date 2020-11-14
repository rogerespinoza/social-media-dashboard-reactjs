import React from 'react'
import "./globals.css";
import Header from './Header'
import TopCardList from './TopCardList'
import Overview from './Overview'
import Switch from './Switch'

function App() {
  // const [theme, setTheme] = useState('is-light-mode')
  return (
    //<></> estas etiquetas se llama Fragment implicito nos evitan el uso de un div en la importacion final para no interferir en el uso de estilos, tambien se pueden importar de react {Fragment} 
    <> 
      <Header >
        <Switch/>
      </Header>
      <TopCardList />
      <Overview />
    </>
  );
}

export default App;
