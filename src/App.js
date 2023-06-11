import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const[counter,setcounter]=useState(0);
  
  if(counter<0){
    setcounter(0);
  }

  const incre=()=>{
    setcounter((prev)=>prev+1)
  }
  const decre=()=>{
    setcounter((prev)=>prev-1)
  }

  const [activecart,setActiveCart]= useState(true);

  const[cost,setcost]=useState(0);
    
   
  const addtocart =()=>{
    setActiveCart(false);
    setcost(counter *125);

  }
  useEffect(() => {
    console.log(cost);
  }, [cost]);

  
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
    <img src="/images/icon-cart.svg"  className="cart" alt="" onClick={()=> setShowComponent(prevState => !prevState)} />
    <img src="/images/image-avatar.png" alt="" className="avatar" />
    {showComponent && <Cart show={showComponent} activecart={activecart} cost={cost} counter={counter} />}
    
    </div>
    </nav>
    <hr />
      <Home incre={incre} decre={decre} counter={counter} addtocart={addtocart} ></Home>
    </div>
  

  );
}

export default App;
