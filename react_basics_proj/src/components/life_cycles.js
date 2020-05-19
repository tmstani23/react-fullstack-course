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
        //Allows intercepting state or props before render
    static getDerivedStateFromProps(props, state) {
        console.log("derivedStateFromProps - 2", state);
        //Change state name to Milhouse instead of Joe
        if (state.name === 'Joe') {
            return {
                name: 'Milhouse'
            }
        }
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        let snapshot = 'Snapshot value'
        console.log('getSnapShotBeforeUpdate - x');
        
        return snapshot;
    }   

    //Determines if the component should re-render or not
        //Does not trigger before initial render
    shouldComponentUpdate(nextProps, nextState) {
        console.log('x - shouldCompUpdate');

        if(nextState.name === 'Bob') {
            return false;
        }
        
        console.log(this.state, nextState);
        //must return true or false
        return true;
    }

    //render method fires next
    render() {
        console.log('render - 3');

        return (
            <Fragment>
                LifeCycles
                <br/>
                {this.state.name}
                <div onClick={() => {
                    this.setState({name: 'Joe'})
                }}>Click to change</div>
            </Fragment>
        )
    }
    //lifecycle methods that fire after render:
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('x - component did  update')
        console.log(prevState, this.state);
        //snapshot comes from the getsnapshotbeforeupdate method
        console.log(snapshot);
    }
    //Often useful for database calls
    componentDidMount() {
        console.log("component did mount - 4")
        setTimeout(() => {console.log('fetched db info')}, 2000);
    }

    componentWillUnmount() {
        console.log('component will unmount - 5')
    }
}

export default LifeCycles;

