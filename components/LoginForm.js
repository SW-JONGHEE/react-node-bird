import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    margin-top : 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({    setIsLoggedIn   }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    //컴포넌트에 함수를 넣는 것은 꼭 useCallback을 써라 --최적화
   {/** 
    const onChangeId = useCallback ((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback ((e) => {
        setPassword(e.target.value);
    }, []);
*/}
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);


    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input
                    name="user-id"
                    type="text"
                    value={id}
                    onChange={onChangeId}
                    required
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input 
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>    
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false} >로그인</Button>
                <Link href="/singup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
            <div>

            </div>
        </FormWrapper>            
    );
};

export default LoginForm;