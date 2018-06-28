import React, { Component } from 'react';
import Head from 'next/head';

const Layout = (props) => ( 
    <div>
        <Head>
            <title>Moja probna stranica</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-grid.css'/>
        </Head>
        <div className='container'>
            {props.children} 
        </div>
    </div>
)

export default Layout;