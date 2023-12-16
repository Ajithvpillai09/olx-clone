import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory,Link} from 'react-router-dom'

function Login() {
  const [user,setUser] = useState({
    email:'',
    password:''
  })
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit = (e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
      .then(()=>{
         history.push('/')
      }).catch((err)=>{

      })
    
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={user.name}
            onChange={(e)=>setUser({
              ...user,
              email:e.target.value
            })}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={user.password}
            onChange={(e)=> setUser({
              ...user,
              password:e.target.value
            })}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
       <Link to={'/signup'}>signup</Link>
      </div>
    </div>
  );
}

export default Login;
