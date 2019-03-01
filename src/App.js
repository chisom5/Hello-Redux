import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import reducer from './reducers';

// introducing redux
import { createStore } from 'redux';

const initialState = { tech: "Redux" };
const store = createStore(reducer, initialState);


class App extends Component {

    render() {
        return <
            HelloWorld tech = { store.getState().tech }
        /> 

    }
}

export default App;