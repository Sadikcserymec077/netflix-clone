import React, { useRef } from "react";
import "./Signup.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="signupScreen">
            <div className="signupScreen__background">
                <Link to="/">
                    <img
                        className="signupScreen__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="Netflix Logo"
                    />
                </Link>
                <div className="signupScreen__gradient" />
            </div>

            <div className="signupScreen__body">
                <form>
                    <h1>Sign Up</h1>
                    <input ref={emailRef} placeholder="Email" type="email" />
                    <input ref={passwordRef} placeholder="Password" type="password" />
                    <button type="submit" onClick={register}>
                        Sign Up
                    </button>
                    <h4>
                        <span className="signupScreen__gray">Already have an account? </span>
                        <Link to="/login" className="signupScreen__link">
                            Sign In now.
                        </Link>
                    </h4>
                </form>
            </div>
        </div>
    );
}

export default Signup;
