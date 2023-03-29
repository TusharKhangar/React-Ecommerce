import './App.css';
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
      {/* <Route exact path='/' component= {HomePage}/>
      <Route exact path='/hats' component= {HatsPage}/> */}
      <Route exact path='/' element={ <HomePage/> } />
      <Route path='/shop' element={ <ShopPage/> } />
      </Routes>
    </div>
  );
}

export default App;
