import React,{Suspense,lazy} from 'react';

import {Routes,Route} from 'react-router-dom';
import AdminRoute from '../../shared/routes/AdminRoute'

interface ISidebarRouteProps {}

const SidebarRoute: React.FunctionComponent<ISidebarRouteProps> = (props) => {
  return <>  
  <Suspense fallback={<div>....Loading...</div>}>
  <Routes>
  {
    AdminRoute.map(({path,component},i)=>(<Route key={path+i} path={path} element={component}></Route>))
  }
  </Routes>
</Suspense>
</>;
};

export default SidebarRoute;
