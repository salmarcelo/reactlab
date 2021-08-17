import React, {useState} from 'react';
import Header from '../Header';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Home(){
    const [contador, setContador] = useState(0);
    function increment(){
      setContador(contador+1);
    }
  
    return (

      <div className="App">
        
        <Header title="Header Param" />
        <Link to="/cadastro">Acessar cadastro</Link>
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <p>
          <input type="button" value="Clique Aqui !!!" onClick={increment} />
        </p>
        <p>{contador}</p> cliques!
      </div>
    );
}
 
export default Home;