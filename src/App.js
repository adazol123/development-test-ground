
import './style/css/main.css';
import {BrowserRouter as Router, NavLink } from 'react-router-dom'
import Pages from './route';




function App() {
  return (

    <Router>
      <header className='header'>
        <h6>
        Development Test Ground
        </h6>        
      </header>
      <div className="sidebar">
          <h6>Side Bar</h6>
          <NavLink to='/'>
              <button>Intersection Observer</button>
          </NavLink>
          <NavLink to='/infinite-scroll'>
              <button>Infinite Scroll</button>
          </NavLink>        
      </div>

      <section className="content">
        <Pages/>
      </section>
    </Router>
  );
}

export default App;
