import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../Home'
import InfiniteScroll from '../InfiniteScroll'


function Pages() {
    return (
        <Switch>
            <Route path='/infinite-scroll' component={InfiniteScroll} />
            <Route path='/' component={Home} />
        </Switch>
    )
}

export default Pages
