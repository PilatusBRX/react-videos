import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/layout/Header';
import SingleVideo from './pages/SingleVideo';
import Home from './pages/Home';
import AddVideo from './components/videos/AddVideo';
import Categories from './components/categories/Categories';
import EditVideo from './components/videos/EditVideo';
import './global.css';

const App = () => {
  return (
 <Provider store={store}>
      <Router>
    <Header/>    
      <Container className="container">  
        <Switch>     
            <Route path='/' component={Home} exact />
            <Route path='/video/:id' component={SingleVideo} />
            <Route exact path="/videos/edit/:id" component={EditVideo} />
            <Route path='/videos/add-video' component={AddVideo} />                      
            <Route path='/categories' component={Categories} />          
        </Switch>  
      </Container>    
    </Router>
 </Provider>
  )
}
export default App;

const Container = styled.div`
padding: 8em 0
`;
