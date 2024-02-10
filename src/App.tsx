import './App.css'
import Navi from './layouts/Navi/Navi'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  return (
    <div className='main'>
      <Navi />
      <HomePage />
    </div>
  )
}

export default App
