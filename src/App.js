import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch} from 'react-router-dom'
import ListBook from './components/listBook';
import CreateBook from './components/createbook';
import ViewBook from './components/viewBook';
import Header from './components/HeaderComponent';




function App() {
  return (
    <div>
       
      <Header/>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Router>
                <div className='container'>
                 
                    <Switch> 
                        <Route path = "/" exact component={ListBook}></Route> 
                        <Route path = '/add-book/:id' component={CreateBook}></Route>
                          <Route path = '/view-book/:id' component={ViewBook} ></Route>
                          <Route path = "/getBookList" component={ListBook}></Route>
                          
                    </Switch>
                </div>  
        </Router>

    </div>
    
  );
}

export default App;