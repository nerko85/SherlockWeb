import React, { Component } from "react";
import Layout from '../components/Layout';
import CaseWrapper from '../components/case-studies/caseWrapper'
import css from '../styles/main.css'

export default class Index extends Component {
    render(){
        return (
            <Layout>
                <h1>Testiranje</h1>
                < CaseWrapper/>
            </Layout>
        )
    }
}