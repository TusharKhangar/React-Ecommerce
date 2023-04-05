import './App.css';
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in_sign-up/sign-in_sign-up.component';


function App() {
  return (
    <div >
      <Header/>
      <Routes>
      {/* <Route exact path='/' component= {HomePage}/>
      <Route exact path='/hats' component= {HatsPage}/> */}
      <Route exact path='/' element={ <HomePage/> } />
      <Route path='/shop' element={ <ShopPage/> } />
      <Route path='/signin' element={ <SignInAndSignUpPage/> } />
      </Routes>
    </div>
  );
}

export default App;
