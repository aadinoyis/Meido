// import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Pages from './components/Pages'
import Docker from './components/Docker'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Pages />
        <Docker />
      </BrowserRouter>
    </>
  )
}

export default App