import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const NodeBird = ({  Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>NodeBird</title>
        </Head>
        <Component />
        </>
    );
};

{/**점검용? 안전성*/}
NodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);