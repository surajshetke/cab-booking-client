import React,{Suspense,lazy} from 'react';
import Sidebar from '../ui/sidebar/Sidebar';

// const PageNotFound = lazy(() => import('../ui/page-not-found/PageNotFound'))
// const Home = lazy(() => import('../features/frontend/home'))
// const About = lazy(() => import('../features/frontend/about'))
// const Packages = lazy(() => import('../features/frontend/packages'))
// const Tarrif = lazy(() => import('../features/frontend/tarrif'))
// const Contact = lazy(() => import('../features/frontend/contact'))

interface ISecuredLayoutProps {}

const SecuredLayout: React.FunctionComponent<ISecuredLayoutProps> = (props) => {
  return <>
  <h1>Layout</h1>
  {/* <Header/>
  <Suspense fallback={<div>....Loading...</div>}>
    <Routes>
    {
      AdminRoute.map(({path,component},i)=>(<Route key={path+i} path={path} element={component}></Route>))
    }
    </Routes>
  </Suspense> */}
  <Sidebar/>
  
  </>;
};

export default SecuredLayout;
