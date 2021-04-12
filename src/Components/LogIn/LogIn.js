import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './LogIn.css'
import LogInImg from '../../images/Group 140.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
 }else {
    firebase.app(); 
 }
const LogIn = () => {

//////context_part//
const [loggedInUser,setLoggedInUser]=useContext(UserContext)

///private route Work=====>>>>>>
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
/// firebaseItem with google////
   const [user,setUser]=useState({
    isSingIn:false,
    name: '',
    email:'',
    photo:'',

   })
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSingIn=()=>{
        firebase.auth()
  .signInWithPopup(provider)
  .then(res => {
    const {displayName, email,photoURL}=res.user
    const singInUser={
        isSingIn:true,
        name:displayName,
        email:email,
        photo:photoURL
    }
    setUser(singInUser)
    setLoggedInUser(singInUser)
    history.replace(from);
    
  }).catch(err => {
    console.log(err);
    console.log(err.message);
  });
    }






    ///////reacthok/////
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    const handleGoogleSingOut=()=>{
        firebase.auth().signOut().then(res => {
            const singOutUser={
                isSingIn:false,
                name: '',
                email:'',
                photo:'',
            }
            setUser(singOutUser)
            console.log(res);
          }).catch((error) => {
           
          });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-section align-self-center">
                       
                              <form onSubmit={handleSubmit(onSubmit)}>
                            <input type='email' placeholder='Email' {...register("example")} name="email" /> <br/>
                             <input placeholder='Password' type {...register("exampleRequired", { required: true })}  type="password" name="password" id=""/>     <br/>                      
                            {errors.exampleRequired && <span>This field is required</span>} 

                            <input type="submit" className='border-none' /> <br/>
                            {user.isSingIn ?
                                <div className="sing-in-with-google mt-2" onClick={handleGoogleSingOut}>
                                <p> <span className='mr-5'> <FontAwesomeIcon icon={faGoogle} /></span> Sing Out</p>
                            </div> 
                            : 
                             <div className="sing-in-with-google mt-2" onClick={handleGoogleSingIn}>
                                <p> <span className='mr-5'> <FontAwesomeIcon icon={faGoogle} /></span>Sing In With Google </p>
                            </div> }
                            {
                                user.isSingIn && <p>welcome {user.name}</p>
                            }
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="doctor-log-in-image-part">
                        <img src={LogInImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;