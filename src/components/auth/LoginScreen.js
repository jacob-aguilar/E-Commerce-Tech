import React from 'react'
import { useDispatch} from 'react-redux'
import { startFacebookLogin, startGoogleLogin, startLogin } from '../../actions/auth';



export const LoginScreen = ({ history }) => {

     const dispatch = useDispatch();

    const handleLogin = () => {
        history.push('/');
        //Utilizar replace al hacer la auth
        dispatch(startLogin("aguilat595@gmail.com", "Jacob"))
        console.log(startLogin);
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const handleFacebookLogin = () => {
        dispatch(startFacebookLogin());
    }

    const handleRegister = () => {
        history.push('/auth/register');
    }

    return (

        <div className="container container-register" >
            <div className="row ">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card">

                        <div>
                            <div className="m-0 row justify-content-center">
                                 <img cassName="logo" src={process.env.PUBLIC_URL + '/form_login.png'} alt="logo" /> 
                            </div>
                                <button className="btn btn-lg btn-facebook btn-block text-uppercase" onClick={handleFacebookLogin}><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                <button className="btn btn-lg btn-google btn-block text-uppercase" onClick={handleGoogleLogin}><div></div><img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />Sign in with Google</button>

                                <a href="#" className="count-have" onClick={handleRegister}>You do not have an account?</a>
                                <button className="btn btn-lg btn-return btn-block text-uppercase border-primary">Return</button>
                        </div>
                    </div>   
                </div>
            </div>   
        </div>
    )
}
