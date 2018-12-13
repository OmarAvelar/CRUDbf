import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home'
import AddAuthor from './components/authors/AddAuthor';
import AuthorList from './components/authors/AuthorList';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/api/authors" component={AddAuthor} /> */}
    <Route exact path="/api/authors" component={AuthorList} />
  </Switch>
)

export default Routes;