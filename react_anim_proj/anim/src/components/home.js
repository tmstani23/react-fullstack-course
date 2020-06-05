import React, {Component} from 'react';
import Profile from './profile';

class Home extends Component {
    state = {
        name: 'Tim',
        lastName: 'Bob',
        age: 34,
        hobbies: ["run", "jump"],
        spanish: true,
        message() {console.log('A unique message..Not!')},
        car: {brand: 'Nissan', model: "Ultima"},
        mother: 'Cindy',
    }

    render() {
        return (
            <>
                <Profile {...this.state} />
            </>
        )
    }
}

export default Home;