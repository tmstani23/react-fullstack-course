import React, { Component, Fragment } from 'react';

class LifeCycles extends Component {
    //First constructor is initialized and triggered
    constructor(props) {
        super(props);

        this.state = {
            name: 'Tim'
        }
        console.log("constructor - 1")
    }
    

    //Second trigger
    static getDerivedStateFromProps() {
        console.log("derivedStateFromProps - 2")
        return null;
    }

    //render method fires next
    render() {
        console.log('render - 3');

        return (
            <Fragment>
                LifeCycles
            </Fragment>
        )
    }

    //lifecycle methods that fire after render:
    componentDidMount() {
        console.log("component did mount - 4")
    }

    componentWillUnmount() {
        console.log('component will unmount - 5')
    }
}

export default LifeCycles;

