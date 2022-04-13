import { render } from "@testing-library/react";
import React, { useState } from "react";
import {useNavigate} from 'react-router';
import mystore from "../../store";

function LoginForm()
{
        let navigate=useNavigate();
        const [state,setState]=useState({
            useremail:"",
            pwd:"",
            msg:"",
            admin:{},
            customer:{},
            seller:{},
            //loginerror:""
        });
        const [Error, setError] = useState({
            loginerror:""
        });

    
    const handleChange=(ev)=>{
        setState((state)=>({
                ...state,
               [ev.target.name]:ev.target.value
        }));
    }
       const submitData=(ev)=>{
            ev.preventDefault(); 
           
           const reqOptions={
               method:'POST',
               headers:{
                        'Content-Type':'application/json'
               },
               body:JSON.stringify({
                   email:state.useremail,
                   pass:state.pwd,  
               })
           }
        
        fetch("http://localhost:8080/check",reqOptions)
           .then(resp=>resp.text())
           .then(data=>{if(data.length!=0)
            {
                const json=JSON.parse(data);
                if(json.role=="Admin")
                {
                    setState({admin:json});
                   // alert("Admin");
                     localStorage.setItem("loggedinuser",JSON.stringify(state.admin));
                    mystore.dispatch({type:"LOGGEDIN"})
                   
                  
                    navigate('/adminhome');

                }    
               
                else if(json.role=="Customer")
                {
                   // alert("in customerreq");
                   //setState({customer:json});
                    alert("Customer");
                    localStorage.setItem("loggedinuser",JSON.stringify(json));
                    mystore.dispatch({type:"LOGGEDIN"})
                   
                    navigate('/customerhome');
                }     
                 else
                 {
                   // setState({seller:json});
                    alert("Seller");
                    localStorage.setItem("loggedinuser",JSON.stringify(state.seller));
                    mystore.dispatch({type:"LOGGEDIN"})
                    alert("seller");
                   
                    navigate('/sellerhome');
                 }   
                
            }
            else
            {
                
                setError({loginerror:"Invalid Credentials"});
            }

           })
              
        }

/*
        const myStyle={
            backgroundImage: "url('http://jungleworks.com/wp-content/uploads/2020/12/shutterstock_700890880.jpg')",
            height:'100vh',
            marginTop:'-00px',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
*/


    return(
        
        <div>
        <div >
        
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1" >
           <div class="form-outline mb-4">
            <h1>Login</h1>
            </div>
            
            <form >
            <div class="form-outline mb-4">
                    {/*<label class="form-label" >Enter UserEmail</label>*/}
                    <input type="text" class="form-control form-control-lg"  name="useremail" onChange={handleChange} placeholder="Useremail" /><br/>
           
                    </div>
                    <div class="form-outline mb-4">
                           {/* <label > Enter Password</label>*/}
                            <input type="password"class="form-control form-control-lg" name="pwd" onChange={handleChange} placeholder="Password" /><br/>
                    </div>
                    
                    <input type="submit" class="btn btn-primary btn-lg" value="LOGIN" onClick={submitData}/>

             </form>

                 <p> {state.admin.userid}</p>
                   <p> {state.admin.role}</p>
                    <p style={{color:"red"}}>{Error.loginerror}</p>
                    <div>
                    Don't Have an Account?<a href="/register">Register Here</a>
                    </div>
                    
        </div>
        </div> 
       </div>
    );
}
export default LoginForm ;