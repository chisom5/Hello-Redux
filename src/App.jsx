import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import ButtonGroup from './components/ButtonGroup';

import store from './store';

class App extends Component {

    render() {
        return ( 
            <div className = "App" >

                <HelloWorld key = { 1 }
                    tech = { store.getState().tech }
                    />  

                <ButtonGroup key = { 2 }
                    technologies = {
                    ["React", "React-redux", "redux-thunk"]
                }/> 
                
            </div>
        )

    }
}


export default App;