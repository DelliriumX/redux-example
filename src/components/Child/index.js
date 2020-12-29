import React, { Component } from 'react';
import { connect } from 'react-redux'

class Child extends Component {

    changeApp = () => {
        this.props.dispatch({
            type: 'CHANGE_VALUE',
            payload: 'dzej'
        })
    }

    render() {
        console.log(this.props)


        return (
            <div>
                <div>Child</div>
                <div>{this.props.dino}</div>
                <button onClick={this.changeApp}>Click</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        dino: state.value
    }
}

const connectedComponent = connect(mapStateToProps)(Child)
export { connectedComponent as Child }