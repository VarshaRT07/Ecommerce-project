import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
    <div className="container">
       <div>
      <h1 className="sneakers">sneakers</h1>
    </div>
    <div class="menu">
      <ul>
        <li>  <a href="#">Collections</a> </li>
        <li> <a href="#">Men</a> </li>
        <li>  <a href="#">Women</a></li>
        <li> <a href="#">About</a></li>
        <li> <a href="#">Contact</a></li>
      </ul>

    </div>
    </div>
    <div className="profile">
    <img src="/images/icon-cart.svg"  className="cart" alt="" />
    <img src="/images/image-avatar.png" alt="" className="avatar"/>
    </div>
    </nav>
      <Home></Home>
    </div>
  

  );
}

export default App;
