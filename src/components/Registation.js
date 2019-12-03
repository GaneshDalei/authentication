import React from "react";
import user from '../Data/userList';
import {Link} from 'react-router-dom'
class Registation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                userId:"",
                Password:"",
            
        }
    }
    userNameChangeHandler = (e)=>{
        this.setState({userId:e.target.value},function(){
            
        })
    }
    passwordChangeHandler = (e)=>{
        this.setState({Password:e.target.value},function(){
           
        })
    }
    SubmitHandler = (event)=>{
        if(this.state.userId !="" && this.state.userId != ""){
            var obj = {
                UserName:this.state.userId,
                Password:this.state.Password
            };
            user.user.push(obj);
           this.props.history.push("/login");
        }

      }
    render(){
        return(
            <div>
            <div className="login-wapper">
                <div className="login-inner">
                    <span>UserName</span>
                <input type="text" className="input-user" onChange={this.userNameChangeHandler}/>
                <span>Password:</span>
                <input type="password" className="input-user" onChange={this.passwordChangeHandler}/>
                <div className="submite_container">
                <div><Link to="/login"><span className="Forgot-password">Login</span></Link></div>
                <div><input type="button" className="SubmitButton" onClick={this.SubmitHandler} value="Register"/></div> <br/><br/>
                </div>
        
                    </div>
                    
                </div>
                </div>
        )
    }
}
export default Registation;