import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import AuthImage from '../../Assets/Images/auth.svg'
const initialState = {
    fullName: '',
    userName: '',
    password: '',
    rePassword: '',
    avatar: '',
    phoneNumber: ''
}
const cookies = new Cookies()
const AuthenticationPage = () => {
    const [isInSignIn, setIsInSignIn] = useState(false)
    const [formValues, setFormValues] = useState(initialState)
    const handleChange = (event: any) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }
    const switchMode = () => {
        setIsInSignIn(prevState => !prevState)
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const { fullName, userName, password, avatar, phoneNumber } = formValues;

        const _baseURL = 'http://localhost:4000/auth'

        const { data: { token, userId, hashedPassword } } =
            await axios.post(`${_baseURL}/${isInSignIn ? 'signin' : 'signup'}`, {
                userName, fullName, password, avatar, phoneNumber
            })

        cookies.set('token', token);
        cookies.set('userId', userId);
        cookies.set('hashedPassword', hashedPassword);
        cookies.set('fullName', fullName)
        cookies.set('userName', userName)
        if (!isInSignIn) {
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('avatar', avatar)
            cookies.set('hashedPassword', hashedPassword)
        }

        window.location.reload()
    }
    return (
        <div className="authentication-page__container">
            <div className="authentication-page__container__form__wrapper">
                <div className="authentication-page__form">
                    <div className="authentication-page__form__title">
                        <p className="form__title">
                            {isInSignIn ? 'ورود' : 'ثبت نام'}
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <hr />
                        {!isInSignIn && (
                            <div className="authentication-page__form__fullName form__inputs">
                                <label htmlFor="fullName">نام و نام خانوادگی</label>
                                <input type="text" name="fullName" id="fullName"
                                    placeholder='علی چترایی'
                                    onChange={handleChange}
                                    required />
                            </div>)}
                        <div className="authentication-page__form__userName form__inputs">
                            <label htmlFor="userName">نام کاربری</label>
                            <input type="text" name="userName" id="userName"
                                placeholder='alichatraei'
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="authentication-page__form__password form__inputs">
                            <label htmlFor="password">رمز عبور</label>
                            <input type="password" name="password" id="password"
                                placeholder='1234'
                                onChange={handleChange}
                                required />
                        </div>
                        {!isInSignIn && (
                            <div className="authentication-page__form__rePassword form__inputs">
                                <label htmlFor="rePassword">تکرار مجدد رمز عبور</label>
                                <input type="password" name="rePassword" id="rePassword"
                                    placeholder='1234'
                                    onChange={handleChange}
                                    required />
                            </div>
                        )}
                        {!isInSignIn && (
                            <div className="authentication-page__form__avatar form__inputs">
                                <label htmlFor="avatar">لینک عکس پروفایل</label>
                                <input type="text" name="avatar" id="avatar"
                                    placeholder='avatar.com/your-link'
                                    onChange={handleChange}
                                    required />
                            </div>
                        )}
                        {!isInSignIn && (
                            <div className="authentication-page__form__phoneNumeber form__inputs" >
                                <label htmlFor="phoneNumeber">شماره تماس</label>
                                <input type="text" name="phoneNumber" id="phoneNumber"
                                    placeholder='09399536422'
                                    onChange={handleChange}
                                    required />
                            </div>
                        )}
                        <div className="authentication-page__form__button">
                            <button>{!isInSignIn ? 'ثبت نام' : 'ورود'}</button>
                        </div>
                    </form>
                    <div className="authentication-page__form_fields__acount">
                        <p>
                            {!isInSignIn ? "اکانت دارید ؟" : 'هنوز اکانتی نساختید ؟'}
                            <span className="authentication__form_fields__span" onClick={switchMode}>
                                {!isInSignIn ? 'ورود' : 'ثبت نام'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="authenctication-page__imageSide">
                <img src={AuthImage} alt="Authentication" />
            </div>
        </div>
    )
}

export default AuthenticationPage
