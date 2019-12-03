import user from '../Data/userList';
export const ThunkAction = (userDetails)=>{
return async (dispatch)=>{
    console.log(userDetails);
    user.user.map(function(value, index, array){
        if(value.UserName == userDetails.userId){
            if(user.user[index].Password ==userDetails.Password){
                fetch("https://jsonplaceholder.typicode.com/users").then(function(data){
                    return data.json()
                }).then(function(data){
                 
                    dispatch({type:"Dash_board_Login", payload:data})
                }).catch(function(error){
                    console.log("error" + error)
                })
            }else{
                dispatch({type:"Login_Fail"})
                
            }
        }
    })

}
}