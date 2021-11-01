import './App.css';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import Login from './login/Login';
import Main from './homepage/Main';
import Agency from './homepage/Agency';
import Agency_Registering from './homepage/Agency_Registering';
import Individual from './homepage/Individual';
import Volunteer from './homepage/Volunteer';
import Finding_id from './login/Finding_id';
import Finding_id2 from './login/Finding_id2';
import Finding_pw from './login/Finding_pw';
import Finding_pw2 from './login/Finding_pw2';

import 'antd/dist/antd.css';


const App = () => {
  return(
    <>
    <Router>
      <Route path ='/' exact component = {Main}/>
      <Route path ='/hompage/Agency' exact component = {Agency}/>
     <Route path='/hompage/Agency_Registering' exact component={Agency_Registering}/>
      <Route path ='/hompage/Individual' exact component = {Individual}/>
      <Route path ='/hompage/Volunteer' exact component = {Volunteer}/>
      <Route path ='/login/Login' exact component = {Login}/>
      <Route path ='/login/Finding_id' exact component = {Finding_id}/>
      <Route path ='/login/Finding_id2' exact component = {Finding_id2}/>
      <Route path='/login/Finding_pw' exact component = {Finding_pw}/>
      <Route path='/login/Finding_pw2' exact component = {Finding_pw2}/>

    </Router>
    </>
  )
}

export default App;
