import React from 'react';
import '../style/main.scss'
import Header from './Header';
import LoginContainer from '../containers/LoginContainer';
import { Provider} from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import HeaderContainer from "../containers/HeaderContainer";
import DashBoardContainer from '../components/DashBoard';
import Registation from "../components/Registation";
import reducer from '../reducer';
import thunk from 'redux-thunk';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
const store = createStore(reducer,applyMiddleware(thunk));
class Main extends React.Component{
    render(){ 
        return(
            <Router>
            <div>
            <Provider store = {store}>
                <HeaderContainer/>
            <div>
            <switch>
              <Route path="/login" component={LoginContainer}/>
              <Route path="/DashBoard" component={DashBoardContainer}/>
              <Route path="/Registation" component={Registation}/>
              </switch>
                </div>
                </Provider>
                </div>
                </Router>
        )
    }
}

export default Main;
