import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Auth.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts";
import { useEffect } from "react";
import { ACTION_TYPE } from "../../utils";
import { Header } from "../../components";

export const Login = () => {

    // Auth context values here 
    const { loginFormHandler, authState: { error, authToken }, authDispatch } = useAuth();
    console.log('authToken: ', authToken);
    const { SET_ERROR } = ACTION_TYPE
    const navigate = useNavigate();

    // Formdata state here
    const [loginFormData, setloginFormData] = useState({
        email: "",
        password: "",
        passType: "password"
    })
    const [rememberMe, setRememberMe] = useState(false);

    // On submit handler 
    const formSubmitHandler = (event) => {
        console.log("getting called");
        event.preventDefault();
        loginFormHandler(loginFormData, rememberMe);
    }

    // To fill test data 
    const testCredentialHandler = () => {
        setloginFormData({
            email: "sudo123@gmail.com",
            password: "sudo123",
            passType: "password",
        })
    }

    // password visibilty handler here 
    const passVisibiltyHandler = () => {
        return loginFormData.passType === "password" ? setloginFormData({ ...loginFormData, passType: "text" }) : setloginFormData({ ...loginFormData, passType: "password" });
    }

    // Checking if alredy login
    useEffect(() => {
        if (authToken) { navigate('/products') }
        // Setting intial error to empty
        authDispatch({
            type: SET_ERROR,
            payload: {
                passwordError: "",
                emailError: "",
            },
        });
    }, [authToken, navigate, SET_ERROR, authDispatch])

    return (
        <div>
            <Header />
            {/* Validation form here */}
            <div className="login__handler center__flex flex__dir-col">
                <form onSubmit={(event) => formSubmitHandler(event)} className="container__main-login center__flex flex__dir-col">
                    <h4 className="margin-1rem h3">Login</h4>
                    {/* Email section here */}
                    <div className="margin-1rem main__login-inputs center__flex">
                        <MdEmail className="icons" />
                        <input type="email" className="margin__lr-8px" placeholder="Enter email" required value={loginFormData.email} onChange={(event) => setloginFormData({ ...loginFormData, email: `${event.target.value}` })} />
                        {error?.emailError && <p className="validation-error txt-sml">{error?.emailError}</p>}
                    </div>
                    {/* Password section here */}
                    <div className="margin-1rem main__login-inputs center__flex">
                        <RiLockPasswordFill className="icons" />
                        <input type={loginFormData.passType} className="margin__lr-8px" placeholder="Enter password" required value={loginFormData.password} onChange={(event) => setloginFormData({ ...loginFormData, password: `${event.target.value}` })} />
                        {
                            loginFormData.passType === "password" ?
                                <AiFillEyeInvisible className="icons toggle-pass" onClick={passVisibiltyHandler} />
                                :
                                <AiFillEye className="toggle-pass" onClick={passVisibiltyHandler} />
                        }
                        {error?.passwordError && <p className="validation-error txt-sml">{error?.passwordError}.</p>}
                    </div>
                    {/* Submit section here */}
                    <div className="margin-1rem login__remember-sec center__flex">
                        <input type="checkbox" id="remember__btn" />
                        <label htmlFor="remember__btn" className=" margin__lr-8px txt-mid" value={rememberMe} onClick={() => setRememberMe((prevState) => !prevState)}>Remember Me</label>
                    </div>
                    <button className="btns btn__primary btn-login border__rad-4px">Login</button>
                    <p className="btns btn__link" onClick={testCredentialHandler}>Use test credentials</p>
                </form>
                {/* Other section */}
                <div className="center__flex flex__dir-col margin-1rem">
                    <p>Don't have an account? <Link to={"/signup"} className="btns btn__link">Sign up</Link></p>
                    <Link to={"/forgot"} className="btns btn__link">Forgot password?</Link>
                </div>
            </div>
        </div>
    )
}
