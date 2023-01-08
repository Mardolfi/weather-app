import GlobalStyle from './globalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ThemeContext} from './context/ThemeContext'
import { useContext } from 'react';
import Weather from './pages/Weather'

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <GlobalStyle theme={theme}/>
      <Routes>
        <Route path='/' exact element={<Weather />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
