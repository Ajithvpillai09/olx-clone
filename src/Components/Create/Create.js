import React, { Fragment ,useContext,useState} from 'react';
import './Create.css';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const{user} = useContext(AuthContext)
  const [product,setProduct] = useState({
    name:'',
    category:'',
    price:'',
    image:''
  })
  const history = useHistory()
  const date = new Date()
  const handleSubmit = ()=>{
   
    firebase.storage().ref(`/image/${product.image.name}`)
     .put(product.image)
     .then(({ref})=>{
      ref.getDownloadURL()
      .then((url)=>{
        
        firebase.firestore().collection('products').add({
          name:product.name,
          category:product.category,
          price:product.price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        .then(()=>{
          history.push('/')
        })
       
      })
     })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={product.name}
              defaultValue="John"
              onChange={(e)=>
                setProduct({
                  ...product,
                 name: e.target.value
                })}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={product.category}
              onChange={(e)=>
                setProduct({
                  ...product,
                 category: e.target.value
                })}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
             className="input"
              type="number" 
              id="fname"
               name="Price"
               value={product.price}
               onChange={(e)=>
                setProduct({
                  ...product,
                 price: e.target.value
                })}
                />
            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px" src={product.image ? URL.createObjectURL(product.image) : ''}></img>
         
            <br />
            <input 
            type="file" 
            onChange={(e)=>{
              setProduct({
                ...product,
                image:e.target.files[0]
              })
            }}
            />
            <br />
            <button className="uploadBtn" onClick={handleSubmit} >upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
