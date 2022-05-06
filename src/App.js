import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import FarmRegister from 'pages/FarmRegister';
import FarmSettings from 'pages/FarmSettings';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';
import Login from 'pages/Login';
import Reports from 'pages/Reports';
import {useState} from "react";
// import '@font/fontawesome-free/css/all.min.css';
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
// import { useState } from 'react/cjs/react.production.min';


function App() {

    console.log("Local check login"+localStorage.getItem("login"));

    const [login,setLogin]=useState(()=>{
        if(localStorage.getItem("login")==="true")
        return true
        else
        return false;
    });



    if(!login)
    {
        return (
        <>
         <BrowserRouter basename="/fasli">
      
  
         <Switch>
        <Route exact path="/" render={()=><Login checkLogin={setLogin}/>} />;
        <Redirect from="*" to="/" />
        </Switch>
        </BrowserRouter>
            {/* <div className="md:ml-64">
            
            </div>  */}
        </>
        )
    }
    return (
        <>
         <BrowserRouter basename="/fasli">
      
   
          
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={FarmRegister} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/reports" component={Reports} />
                    <Route exact path="/farm-register" component={FarmRegister} />
                    <Route exact path="/farm-settings" component={FarmSettings} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/login" component={Login} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
                
            </div>
            </BrowserRouter>
        </>
    );
}

export default App;
