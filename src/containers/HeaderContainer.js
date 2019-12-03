import {connect} from "react-redux";
import Header from '../components/Header';

const mapstateToProps = (state)=>{
    return{
        ganesh: state,
    }

}
const mapDispatchToProps = (dispatch)=>{
return{}
}
const HeaderContainer = connect(mapstateToProps,mapDispatchToProps)(Header)
export default HeaderContainer;