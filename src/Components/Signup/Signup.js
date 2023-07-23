import React, { useState ,useContext} from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import {useHistory} from 'react-router-dom'

export default function Signup() {
  const history = useHistory()
  const [user,setUser] = useState({
    name:'',
    email:'',
    phone:'',
    password:''
  })

  const {firebase} = useContext(FirebaseContext)

    const handleSubmit = (e)=>{
      e.preventDefault();
     firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
     .then((result)=>{
      result.user.updateProfile({displayName:user.name})
      .then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:user.name,
          phone:user.phone
        }).then(()=>{
          history.push('/login')
        })
      })
     })
    }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={user.name}
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e)=> setUser({
              ...user,
              name:e.target.value
            })}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={user.email}
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>setUser({
              ...user,
              email:e.target.value
            })}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={user.phone}
            onChange={(e)=>setUser({
              ...user,
              phone:e.target.value
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
            value={user.password}
            defaultValue="Doe"
            onChange={(e)=>setUser({
              ...user,
              password:e.target.value
            })}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
       <Link to={'/login'}>login</Link>
      </div>
    </div>
  );
}
