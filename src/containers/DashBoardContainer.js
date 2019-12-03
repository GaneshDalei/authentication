import {connect} from 'react-redux';
import DashBoard from '../components/DashBoard';
const mapStateToProps = (state)=>{
    return{
        isDashBoard:state.dashBoard.isDashBoard,
        data:dashBoard.data,
    }
}

const dispatchStateToProps =(dispach)=>{

}

const DashBoard = connect(mapStateToProps, dispatchStateToProps)(DashBoard);