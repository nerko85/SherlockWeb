import React, { Component } from 'react';
import css from './cases.css'

class CaseWrapper extends Component {
    constructor(props){
        super(props)
    };

    render(){
        return(
            <div className={css.test}>Ovo je moja komponenta</div>
        )
    }
}

export default CaseWrapper;