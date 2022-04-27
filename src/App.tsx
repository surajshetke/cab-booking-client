import React, { useEffect } from 'react';
import {Routes,Route, Navigate} from 'react-router-dom'
import BlankLayout from './layouts/BlankLayout';
import SecuredLayout from './layouts/SecuredLayout';
import AuthService from './services/AuthService';
import { useDispatch } from "react-redux";
import {removeUser} from './app/AuthSlice';
import { useNavigate } from "react-router-dom";
import News from './test/News';
import Main from './test/Main';

function App() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ProtectedRoute = (props:any)=>{

    const token = sessionStorage.getItem('token');
    useEffect(()=>{
      AuthService.validateToken().then((response)=>{console.log("Valid");
      }).catch((error)=>{
        sessionStorage.clear()
        dispatch(removeUser())
        navigate('/login');
      })
    },[])
    return token ? props.children : <Navigate to ='/login' />
  }

  return (<>
      <Routes>
        <Route path='/admin/*' element={
        <ProtectedRoute>
        <SecuredLayout/>
        </ProtectedRoute>}></Route>
        <Route path='/*' element={<BlankLayout/>}></Route>
      </Routes>
    </>);
}

export default App;
