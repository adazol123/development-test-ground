import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../Home'
import InfiniteScroll from '../InfiniteScroll'
import LazyImage from '../components/LazyLoadImages'

function Pages() {
    return (
        <Switch>
            <Route path='/infinite-scroll' component={InfiniteScroll} />
            <Route path='/lazy-image' component={LazyImage}/>
            <Route path='/' component={Home} />
        </Switch>
    )
}

export default Pages
