import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';
import './Login.scss';
import store from './LoginStore';
import { observer } from 'mobx-react';
import { History } from 'history';
import { RouteComponentProps } from "react-router-dom"

const onFormSubmit = (event: React.FormEvent<HTMLFormElement>, history: History): void => {
    localStorage.setItem('auth', "true");
    history.push('/dashboard')
    event.preventDefault();
}

const usernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    store.username = e.currentTarget.value;
}

const passwordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    store.password = e.currentTarget.value;
}

export const Login = observer((props: RouteComponentProps): JSX.Element => {
    return (
        <div className="LoginPage">
            <Card className="LoginForm">
                <form onSubmit={(e) => onFormSubmit(e, props.history)}>
                    <h3>Войти</h3>
                    <div className="mt-2">
                        <Input label="Логин"
                            value={store.username}
                            onChange={usernameChange} />
                    </div>
                    <div className='mt-2'>
                        <Input label="Пароль" type="password"
                            value={store.password}
                            onChange={passwordChange} />
                    </div>
                    <div className="mt-4">
                        <Button>Войти</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
})