import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import NotFound from './components/NotFound';
import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';
import { useState } from 'react';
import Index from './components/ECOMM/Index';
import Body from './components/ECOMM/components/Body';
function App() {
  const [storage, addStorage] = useState(false);
  const appStore = useSelector(state=>state.storenav);
  const setStorage = (status) => {
    if (status) {
      localStorage.setItem('USERNAME', 'Admin');
    } else {
      localStorage.clear();
    }
    addStorage(!storage);
  };

  const store = <><Index /><Routes><Route path='/' element={<Body/>} exact /></Routes></>;
  const header = <Header setStorage={setStorage} />; 
  const routes = <Routes>
    <Route element={<PrivateRoutes />}>
      <Route element={<DashBoard />} path="/dashboard" exact />
    </Route>
    <Route element={<PublicRoutes />}>
      <Route element={<Home />} path="/" exact />
      <Route
        element={<Login setStorage={setStorage} />}
        path="/login"
        exact
      />
    </Route>
    <Route path="*" element={<NotFound />}/>
  </Routes>;

  return (
    <div className="App">
      { appStore.value?store:[header,routes] }
    </div>
  );
}

export default App;
