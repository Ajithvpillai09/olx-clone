import React, { Fragment ,useContext} from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import { AuthContext } from '../store/Context';
import Login from '../Components/Login/Login';

const CreatePage = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <Fragment>
      {user ? (
        <Create />
      ) : (
        <>          
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default CreatePage;
