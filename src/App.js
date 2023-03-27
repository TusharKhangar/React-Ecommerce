import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () =>(
  <div>
      <h1>HatsPage</h1>
      <Link to='/topics'>topics</Link>
  </div>
)
function App() {
  return (
    <div >
      <Routes>
      {/* <Route exact path='/' component= {HomePage}/>
      <Route exact path='/hats' component= {HatsPage}/> */}
      <Route path="/" element={ <HomePage/> } />
      <Route path="/hats" element={ <HatsPage/> } />
      </Routes>
    </div>
  );
}

export default App;
