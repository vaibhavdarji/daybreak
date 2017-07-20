import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Posts from './posts';
import Post from './post';
import Comments from './comments';
import Comment from './comment';


const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/posts/:id" component={Post} />
            <Route path="/posts" component={Posts}/>
            <Route path="/comments/:id" component={Comment} />
            <Route path="/comments" component={Comments}/>
        </Switch>
    </div>
);

export default Main;
