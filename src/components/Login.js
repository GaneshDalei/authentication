import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import user from '../Data/userList';
import {Link} from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          
                userId:"",
                Password:"",
            
        }
    }
    componentWillReceiveProps(newProps){
        console.log("newProps>>", newProps.history)
        if(newProps.DashBoardOpen){
            newProps.history.push("/DashBoard");
        }
    }
    userNameChangeHandler = (e)=>{
        this.setState({userId:e.target.value},function(){
            console.log(this.state);
        })
    }
    passwordChangeHandler = (e)=>{
        this.setState({Password:e.target.value},function(){
            console.log(this.state);
        })
    }
    SubmitHandler = (event)=>{
            this.props.SubmitClickHandler(this.state);
            
      }
    render(){
        const responseFacebook = (response) => {
            this.props.history.push("/DashBoard");
          }
        return(
            <div>
            <div className="login-wapper">
                <div className="login-inner">
                    <span>UserName</span>
                <input type="text" className="input-user" onChange={this.userNameChangeHandler}/>
                <span>Password:</span>
                <input type="password" className="input-user" onChange={this.passwordChangeHandler}/>
                <div className="submite_container">
                <div><Link to="/Registation"><span className="Forgot-password">Registation</span></Link></div>
                <div><input type="button" className="SubmitButton" onClick={this.SubmitHandler} value="submit"/></div> <br/><br/>
                </div>
                <FacebookLogin
                 appId="1152108091659745" //APP ID NOT CREATED YET
                fields="name,email,picture"
                callback={responseFacebook}
                    /> <br/>

                    </div>
                    
                </div>
                </div>
        )
    }
}
export default Login;