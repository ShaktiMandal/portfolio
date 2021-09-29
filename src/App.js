import './App.css';
import React, {Suspense} from 'react';
import Loading from './Component/Loading';
import {Route, Switch} from 'react-router-dom';

const  NavBar = React.lazy(() => import('./Component/Layout/Navbar'));
const  Body = React.lazy(() => import('./Component/Layout/body/body'));
const  Footer = React.lazy(() => import('./Component/Layout/Footer'));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <NavBar/>
        <Body/>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
