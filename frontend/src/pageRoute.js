import React from 'react'
import 'react-router'
import Article from './components/article'
import CreateArticle from './components/createArticle'
import Login from './components/login'
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function pageRoute() {
  return (
    <div>
        <BrowserRouter>
        <main>
          <Switch>
            <Route
              path="/article"
              exact
              component={Article}
            />
             <Route
              path="/createArticle"
              exact
              component={CreateArticle}
            />
               <Route
              path="/"
              exact
              component={Login}
            />
                
             </Switch>
             </main>
             </BrowserRouter>

    </div>
  )
}
