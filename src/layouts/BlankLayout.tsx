import React,{Suspense,lazy} from 'react';
import {Route,Routes} from 'react-router-dom'
import Header from '../ui/header/Header';
import FrontendRoutes from '../shared/routes/FrontendRoutes';

// const PageNotFound = lazy(() => import('../ui/page-not-found/PageNotFound'))
// const Home = lazy(() => import('../features/frontend/home'))
// const About = lazy(() => import('../features/frontend/about'))
// const Packages = lazy(() => import('../features/frontend/packages'))
// const Tarrif = lazy(() => import('../features/frontend/tarrif'))
// const Contact = lazy(() => import('../features/frontend/contact'))

interface IBlankLayoutProps {}

const BlankLayout: React.FunctionComponent<IBlankLayoutProps> = (props) => {
  return <>
  <Header/>
  <Suspense fallback={<div>....Loading...</div>}>
    <Routes>
    {
      FrontendRoutes.map(({path,component},i)=>(<Route key={path+i} path={path} element={component}></Route>))
    }
    </Routes>
  </Suspense>
  
  </>;
};

export default BlankLayout;
