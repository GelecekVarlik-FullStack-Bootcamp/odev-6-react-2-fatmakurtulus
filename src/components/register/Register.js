
import Nav from '../Nav';
import React,{useRef,useState,useEffect} from 'react';
import './Register.css';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from '../login/Login';
import axios from '../../api/axios';
import {useNavigate} from 'react-router-dom';

function Register(){

  const userRef = useRef();
    const errRef = useRef();
   const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [passwordConfirm, setPasswordConfirm]=useState("")
const [validMatch,setValidMatch]=useState("")
const navigate = useNavigate();

const api =axios.create({baseURL:'http://localhost:80/'});


  //hata msj 
 const [errMsg, setErrmsg]=useState(false);
  //login  başarılı mı
  const [success, setSucces] = useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!username || !password||!passwordConfirm) {
      setErrmsg("Invalid Entry");
      return;
    }else if(password!=passwordConfirm){
      console.log("şifreeler aynı eğil")
    }

    try{
    
      api({
        method: 'post',
        url:'auth/register',
        data: { username, password,passwordConfirm
          } 
        }).then((response) => {
        console.log(response.data);
        console.log("Succes");
       
      }, (error) => {
        console.log(error);
      });
          setSucces(true);
          setUsername("");
          setPassword("");
          setPasswordConfirm("");
          navigate("/Login");

    }catch(err){
      if (!err?.response) {

        setErrmsg("No Server Response");
  
      } else if (err.response?.status === 409) {
  
        setErrmsg("Username Taken");
  
      } else {
  
        setErrmsg("Registration Failed");
  
      }
  
    }
  }
  

    useEffect(()=>{
   
      setValidMatch(password);
      //pass ve cfrmpass aynı ise match atanır
      const match = password===passwordConfirm;
      console.log(password);
      console.log(passwordConfirm);
      //cfrmpass değeri match olur
      setValidMatch(match);

    },[password,passwordConfirm])


    //alınan değerlerde hata varsa çıktı verir.
    useEffect(()=>{
      setErrmsg('');
    },[username,password,passwordConfirm])

  return (
    <div className='app'>

      <div className='login-form'>
       <div className='form'>
         <h1>Register</h1>
         <form onSubmit={handleSubmit}>

         <div className='input-container'>
           <label>Username
           </label>
           <input 
           type="text" 
           id="username" required 
           autoComplete='off'
           value={username}
           onChange={(e)=>setUsername(e.target.value)}/>
         </div>


         <div className='input-container'>
           <label>password</label>
           <input type="password" id="password" required
           autoComplete='off'
           value={password}
           onChange={(e)=>setPassword(e.target.value)}/>
         
         </div>


         <div className='input-container'>
           <label>confirm password  </label>
           <input type="password" name="paswordConfirm" required 
            value={passwordConfirm}
            autoComplete='off'
            onChange={(e)=>setPasswordConfirm(e.target.value)}/>
         </div>


         <div className='button-container'>
           <input type="submit" />
         </div>
         </form>
         <p>
           Already registered?<br/>
           <span className='line'>
             <a href="Login">Login</a>
           </span>
         </p>
       </div>
       </div>
     </div>
        
    
  )
}

export default Register