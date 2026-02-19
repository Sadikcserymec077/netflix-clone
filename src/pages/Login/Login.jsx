import React, { useRef } from "react";
import "./Login.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <Link to="/">
                    <img
                        className="loginScreen__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="Netflix Logo"
                    />
                </Link>
                <div className="loginScreen__gradient" />
            </div>

            <div className="loginScreen__body">
                <form>
                    <h1>Sign In</h1>
                    <input ref={emailRef} placeholder="Email" type="email" />
                    <input ref={passwordRef} placeholder="Password" type="password" />
                    <button type="submit" onClick={signIn}>
                        Sign In
                    </button>
                    <h4>
                        <span className="loginScreen__gray">New to Netflix? </span>
                        <Link to="/signup" className="loginScreen__link">
                            Sign Up now.
                        </Link>
                    </h4>
                </form>
            </div>
        </div>
    );
}

export default Login;
