import React,{useContext} from 'react';
import { AuthContext,FirebaseContext } from '../../store/Context';
import {useHistory,Link} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

function Header() {
  const {user} = useContext(AuthContext)
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to={'/'}><OlxLogo></OlxLogo></Link>
          
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? 
          <span>{user.displayName}</span>
          :
          <Link to={'/login'}>
           <span>Login</span>
          </Link>
         
           }
           {
            user && <span onClick={()=>{
              firebase.auth().signOut();
              history.push('/')
            }}> logout</span>
           }
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to={'/create'}> <span>SELL</span></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
