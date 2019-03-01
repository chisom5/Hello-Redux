import React from 'react'
import store from '../store';
import setText from '../store/actions'

const ButtonGroup = (props) => {

    const buttons = props.technologies.map((btn, i) => {
        return  <button key = { `btn ${i}` } data-text = { btn }
                    onClick = { dispatchHandleClick } >  { btn } 
                </button>
    });

    function dispatchHandleClick  (e)  {

        // get the button text
        const value = e.target.dataset.text;
        
        //invoke action creators
        store.dispatch(setText(value))
    }

   

    return ( 
        <div id = "btn-container" > 
            {buttons} 
        </div>
    );
}

export default ButtonGroup;