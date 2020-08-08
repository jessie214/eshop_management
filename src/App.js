import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/index.jsx';
import Layout from './component/layout';

function App() {
  return (  
    <BrowserRouter>{/*  BrowserRouter用于浏览器代表路由,router代表路由规则 */}
      <div>
        <Layout>
        <Route path='/' exact component={Home}></Route> {/*exact表示必须完整路径*/}
        <Route path='/product' exact component={Home}></Route>
        <Route path='/product.category' exact component={Home}></Route>
        <Route path='/order' exact component={Home}></Route>
        <Route path='/user' exact component={Home}></Route>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
