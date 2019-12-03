import { combineReducers } from "redux"
function loginDetails(
    state = 
    {User:"",
    Password:""
},action){

return state;
}
function dashBoard(state = {isDashBoard:false, Userlogin:""},action){
 
switch(action.type){
    case "Dash_board_Login":
        return {
            isDashBoard:true,
            
        }
            break;
    case "Login_Fail":
            return {
                Userlogin:"fail",
            }
    default:
}
return state;
}
export default combineReducers({
    loginDetails,
    dashBoard,
})