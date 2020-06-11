import React, {Component} from 'react';
import Slider from './slider';
import Subscriptions from '../utils/subscribe';
import HomeArticles from './articles';
import Poll from '../utils/poll'

class Home extends Component {
    
    state = {
        home: ''
    }
    
    render () {
        return (
            <>
                <Slider />
                <Subscriptions />
                <div className='container'>
                    <HomeArticles />
                </div>
                <Poll />
                
            </>
        )
    }
}

export default Home;