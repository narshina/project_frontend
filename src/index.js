import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Login.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Userlogin } from './Userlogin';
import AdminRouter from './Admin/AdminRouter/AdminRouter';
import { AdminHome } from './Admin/Home';
import './App.css'
import { Addsecretary } from './Admin/Addsecretary';
import { Addsecr } from './Admin/Addsecr';
import { Viewsec } from './Admin/Viewsec';
import { Viewsecdetail } from './Admin/Viewsecdetail';
import { Editsecretary } from './Admin/Editsecretary';
import { Addstaff } from './Admin/Addstaff';
import { Viewstaff } from './Admin/Viewstaff';
import { Viewstaffdetail } from './Admin/Viewstaffdetail';
import { Editstaff } from './Admin/Editstaff';
import { Addwardmember } from './Admin/Addwardmember';
import { Viewwardmember } from './Admin/Viewwardmember';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='/Login' element={<Userlogin/>}/>
      </Route>


      <Route path='/admin' element={<AdminRouter/>}>
        <Route index element={<AdminHome/>}/>
        <Route path='addsec' element={<Addsecretary/>}/>
        <Route path='addscre' element={<Addsecr/>}/>
        <Route path='viewsecr' element={<Viewsec/>}/>
        <Route path='viewsecdetail' element={<Viewsecdetail/>}/>
        <Route path='editsec' element={<Editsecretary/>}/>
        <Route path='addstaff' element={<Addstaff/>}/>
        <Route path='viewstaff' element={<Viewstaff/>}/>
        <Route path='viewstaffdetail' element={<Viewstaffdetail/>}/>
        <Route path='editstaff' element={<Editstaff/>}/>
        <Route path='addwardmember' element={<Addwardmember/>}/>
        <Route path='viewwardmember' element={<Viewwardmember/>}/>
      </Route>

      <Route path='*' element={<div> no routes</div>}/>
    </Routes>
    </BrowserRouter>
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
