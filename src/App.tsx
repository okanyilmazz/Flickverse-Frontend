import './App.css'
import Navi from './layouts/Navi/Navi'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './layouts/Footer/Footer';
function App() {

  return (
    <div className='main'>
      <Navi />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
