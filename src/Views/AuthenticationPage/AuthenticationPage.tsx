import React from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
const isInSignIn = false
const AuthenticationPage = () => {
    return (
        <div className="authentication-page__container">
            <div className="authentication-page__form">
                <div className="authentication-page__form__title">
                    <p className="form__title">
                        {isInSignIn ? 'ورود' : 'ثبت نام'}
                    </p>
                </div>
                <form onSubmit={() => { }}>
                    
                </form>
            </div>
            <div className="authenctication-page__imageSide"></div>
        </div>
    )
}

export default AuthenticationPage
