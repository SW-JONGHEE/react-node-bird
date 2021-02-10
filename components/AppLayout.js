import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Input, Menu, Row, Col } from 'antd';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`;

const AppLayout = ({    children    }) => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href='/'><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/profile'><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href='/singup'><a>회원가입</a></Link>
                </Menu.Item>
                
            </Menu>
            <Row>
               <Col xs={24} md={6}>
                   { isLoggedIn ? <UserProfile /> : <LoginForm />}
               </Col>
               <Col xs={24} md={12}>
                {children}
               </Col>
               <Col xs={24} md={6}>
                   오른쪽 메뉴
               </Col>
            </Row>
            
        </div>
    );
};


AppLayout.propTypes = {
    children : PropTypes.node.isRequired,

};

export default AppLayout;