import React, { Component } from 'react';

import moon from './img/moon.svg';
import sun from './img/sun.svg';

import './style.css';

class App extends Component {
    state = {
        visible: true,
    };

    render() {
        return (
            <div className="App">
                {this.state.visible ? sun : moon}
                <button
                    type="button"
                    onClick={() => {
                        this.setState({ visible: false });
                    }}
                >
                    hide
                </button>
            </div>
        );
    }
}

export default App;
