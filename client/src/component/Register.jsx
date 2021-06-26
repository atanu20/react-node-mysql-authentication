import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({
        email:"",
        password:""
    })
   
    const [msg,setMsg]= useState("");
   const his=useHistory();
   axios.defaults.withCredentials = true;


    const onSub= async (e)=>{
        e.preventDefault();
       let val=  await axios.post("http://localhost:8000/register",user);

      
       if(val.data.msg)
       {
        setMsg(val.data.msg);
       }else{
        his.push("/login");
       }
    // console.log(val)

        

    }

    useEffect(() => {
        const checkLogin= async ()=>{
         let val= await axios.get("http://localhost:8000/login");
        
         if(val.data.user)
         {
             his.push("/profile")
             // console.log(val.data.user[0].email);
         }
        }
        checkLogin();
     }, [])
 
   

    const userInput=(event)=>{
        const {name,value}=event.target;
        setUser((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })

    }
    return (
        <>
       <div className="container" id="formm">
       <div className="row">
           <div className="col-lg-6 col-md-8 col-12 mx-auto">
           {
                  msg ? (
                       <>
                      <div class="alert alert-danger alert-dismissible">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>ERROR!</strong> {msg}
</div>
                       
                       
                       </>
                   ):null
               }
               <br />
           <form onSubmit={onSub}>
  <div className="form-group">
    <label >Email address:</label>
    <input type="email" className="form-control" placeholder="Enter email" name="email" value={user.email} onChange={userInput}  required/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" placeholder="Enter password" name="password" value={user.password} onChange={userInput} required />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
           </div>
       </div>
       </div>
            
        </>
    )
}

export default Register
