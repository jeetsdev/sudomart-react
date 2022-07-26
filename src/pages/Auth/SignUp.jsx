import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { ACTION_TYPE, titleHandler } from "../../utils";
import { Header } from "../../components";

export const SignUp = () => {

    const [signupFormData, setsignupFormData] = useState({
        userName: "",
        email: "",
        password: "",
        passType: "password",
    })

    const { authState: { authToken, error }, signUpFormHandler, authDispatch } = useAuth();
    const { SET_ERROR } = ACTION_TYPE;
    const navigate = useNavigate();
    const location = useLocation();
    const fromLocation = location?.state?.from?.pathname || "/";

    const formSubmitHandler = (event) => {
        event.preventDefault();
        signUpFormHandler(signupFormData);
    };

    // password visibilty handler here 
    const passVisibiltyHandler = () => {
        return signupFormData.passType === "password" ? setsignupFormData({ ...signupFormData, passType: "text" }) : setsignupFormData({ ...signupFormData, passType: "password" });
    }

    useEffect(() => {
        if (authToken) { navigate(fromLocation) }
        // Setting intial error to empty
        authDispatch({
            type: SET_ERROR,
            payload: {
                passwordError: "",
                emailError: "",
            },
        });
        // changing title
        titleHandler(location?.pathname.split("/")[1]);
    }, [authToken, navigate, SET_ERROR, authDispatch, fromLocation, location?.pathname])

    return (
        <div>
            <Header />
            {/* Validation form here */}
            <div className="signup__handler center__flex flex__dir-col">
                <form onSubmit={(event) => formSubmitHandler(event)} className="container__main-login center__flex flex__dir-col">
                    <h4 className="margin-1rem h3">Sign Up</h4>
                    <div className="margin-1rem main__login-inputs center__flex">
                        <FaUserCircle className="icons" />
                        <input type="text" className="margin__lr-8px" placeholder="Enter Name" required value={signupFormData.name} onChange={(event) => setsignupFormData({ ...signupFormData, userName: `${event.target.value}` })} />
                    </div>
                    <div className="margin-1rem main__login-inputs center__flex">
                        <MdEmail className="icons" />
                        <input type="email" className="margin__lr-8px" placeholder="Enter email" required value={signupFormData.email} onChange={(event) => setsignupFormData({ ...signupFormData, email: `${event.target.value}` })} />
                        {error.emailError && <p className="validation-error txt-sml">{error.emailError}</p>}
                    </div>
                    <div className="margin-1rem main__login-inputs center__flex">
                        <RiLockPasswordFill className="icons" />
                        <input type={signupFormData.passType} className="margin__lr-8px" placeholder="Enter password" required value={signupFormData.password} onChange={(event) => setsignupFormData({ ...signupFormData, password: `${event.target.value}` })} />
                        {
                            signupFormData.passType === "password" ?
                                <AiFillEyeInvisible className="icons toggle-pass" onClick={passVisibiltyHandler} />
                                :
                                <AiFillEye className="toggle-pass" onClick={passVisibiltyHandler} />
                        }
                        {error.passwordError && <p className="validation-error txt-sml">{error.passwordError}</p>}
                    </div>
                    <div className="margin-1rem login__remember-sec center__flex">
                        <input type="checkbox" id="tac__btn" required />
                        <label htmlFor="tac__btn" className=" margin__lr-8px">I agree to all the Terms & Conditions</label>
                    </div>
                    <button className="btns btn__primary margin-1rem">Sign Up</button>
                </form>
                <div className="center__flex flex__dir-col margin-1rem">
                    <p>Already have an account? <Link to={"/login"} className="btns btn__link">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
