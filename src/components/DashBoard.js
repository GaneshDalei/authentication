import React from 'react';

class DashBoard extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(newProps){
        if(!newProps.isDashBoard){
             this.props.history.push("/login");
         }
    }

  
    render(){
        return(
        <div>
            WellCome to DashBoard <br/><br/><br/>
            
            </div>
        )
    }
}

export default DashBoard;