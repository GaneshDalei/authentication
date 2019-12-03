import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login';
import {ThunkAction} from '../Data/action';
import { statement } from '@babel/template';
const mapStateToProps = (state)=>{
    
return{
DashBoardOpen:state.dashBoard.isDashBoard,
UserloginStatus:state.dashBoard.Userlogin,
}
return state
}
const dispatchStateToProps =(dispach)=>{
    return{
        SubmitClickHandler:(userId)=>{
           dispach(ThunkAction(userId))
        }
    }
}
const LoginContainr  = connect(mapStateToProps, dispatchStateToProps)(Login);

export default LoginContainr;