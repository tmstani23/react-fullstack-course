import React, {Component} from 'react';
import Slider from './slider';
import Subscriptions from '../utils/subscribe';

class Home extends Component {
    
    state = {
        home: ''
    }
    
    render () {
        return (
            <>
                <Slider />
                <Subscriptions />
                Home Component
            </>
        )
    }
}

export default Home;