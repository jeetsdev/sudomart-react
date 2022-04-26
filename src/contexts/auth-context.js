import { createContext, useContext } from "react";
import { useReducer } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducer";
import axios from "axios";
import { ACTION_TYPE, validateEmail, validatePassword } from "../utils";

const AuthContext = createContext();
const token = localStorage.getItem("encoded-token");
const userData = JSON.parse(localStorage.getItem("userData"));
const { SET_ERROR, USER_LOGIN, USER_LOGOUT } = ACTION_TYPE;

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(authReducer, {
		authToken: token,
		userName: userData?.userName,
		error: {
			emailError: "",
			passwordError: "",
		},
	});

	// Validating email and password
	const validateEmailAndPass = (email, password) => {
		if (validateEmail(email) && validatePassword(password)) {
			return true;
		} else if (!validateEmail(email)) {
			toast.error("Enter a valid email.");
			dispatch({
				type: SET_ERROR,
				payload: {
					passwordError: "",
					emailError: "Enter a valid email.",
				},
			});
			return false;
		} else if (!validatePassword(password)) {
			toast.error("Must include a number, Minimum 6 char.");
			dispatch({
				type: SET_ERROR,
				payload: {
					passwordError:
						"Must include a number, Minimum 6 characters.",
					emailError: "",
				},
			});
			return false;
		}
	};

	// Login form handler here
	const loginFormHandler = async (loginFormData, rememberMe) => {
		if (validateEmailAndPass(loginFormData.email, loginFormData.password)) {
			dispatch({
				type: SET_ERROR,
				payload: {
					passwordError: "",
					emailError: "",
				},
			});
			try {
				let res = await axios.post("/api/auth/login", loginFormData);
				const {
					status,
					data: { encodedToken, foundUser },
				} = res;
				console.log("res: ", res);

				if (status === 200) {
					// If remember me is true then remember
					if (rememberMe) {
						localStorage.setItem("encoded-token", encodedToken);
						localStorage.setItem(
							"userData",
							JSON.stringify(foundUser),
						);
					}
					dispatch({
						type: USER_LOGIN,
						payload: {
							authToken: encodedToken,
							userName: foundUser?.userName,
						},
					});
					navigate("/", { replace: true });
					toast.success(`Welcome back ${foundUser?.userName}`);
				}
			} catch (error) {
				const { status, statusText } = error.response;
				if (status === 404) {
					toast.error("Email not found.");
					dispatch({
						type: SET_ERROR,
						payload: {
							passwordError: "",
							emailError: `Email ${statusText}!`,
						},
					});
				} else if (status === 401) {
					toast.error("Wrong password.");
					dispatch({
						type: SET_ERROR,
						payload: {
							emailError: "",
							passwordError: `Wrong password!`,
						},
					});
				}
			}
		}
	};

	const signOutHandler = () => {
		dispatch({
			type: USER_LOGOUT,
		});
		toast.success("Sign out successfull");
		navigate("/");
		localStorage.removeItem("encoded-token");
		localStorage.removeItem("userData");
	};

	return (
		<AuthContext.Provider
			value={{
				authState: state,
				authDispatch: dispatch,
				loginFormHandler,
				signOutHandler,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
export const useAuth = () => useContext(AuthContext);
