import React, { Component } from 'react';

class Number extends Component {
    render() {
        return (
            <div className="number">{this.props.number}</div>
        );
    }
}

class EvenNumber extends Component {

    constructor(props) {
        super(props);

        console.log("1. constructor")
    }

    // TODO recording
    // Have this method first return true
    // Then add the condition within the method.
    shouldComponentUpdate(nextProps, nextState) {
        console.log("2. shouldComponentUpdate", nextProps, nextState)

        // Do not call set state in this method
        if (nextProps.number % 2 == 0) {
            console.log('shouldComponentUpdate returns true')
            return true;
        }

        console.log('shouldComponentUpdate returns false')
        return false;
    }

    render() {
        console.log("3. render")

        return (
           <div className="evennumber">{this.props.number}</div>
        );
    }

    // getSnapshotBeforeUpdate() must be implemented together with componentDidUpdate(). Otherwise got error
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("4. getSnapshotBeforeUpdate", prevProps, prevProps)

        return prevProps.number
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('5. componentDidUpdate');


        console.log('The previous number was: ', snapshot)
    }

}

class LifecycleComponentDidUpdatePhase extends Component {
    state = {
        index: 0
    }

    next = () => {
        this.setState(function(prevState) {
            return {
                index: prevState.index + 1
            }
        });
    }

    render() {
        var nextNumber = this.props.numbers[this.state.index];
        return (
            <div className="box">
                <EvenNumber number={nextNumber} />
                <Number number={nextNumber} />
                <button className="button" onClick={this.next}>
                    Get next
                </button>
            </div>
        );
    }
}

LifecycleComponentDidUpdatePhase.defaultProps = {
    numbers: [3, 2, 5 , 4, 11, 12, 9, 16,
              13, 14, 12, 20, 19, 23, 26,
              35, 29, 27, 1, 2, 45
    ]
}

export default LifecycleComponentDidUpdatePhase;
