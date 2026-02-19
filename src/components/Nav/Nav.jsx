import React, { useState, useEffect } from "react";
import "./Nav.css";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Assuming router is used, but signOut triggers App state change

function Nav() {
    const [show, handleShow] = useState(false);
    // const navigate = useNavigate(); // Not strictly needed if App.jsx handles auth state

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Signed out successfully");
                // App.jsx will handle redirection to Login
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{ cursor: "pointer" }}
            />

            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Avatar"
                onClick={handleSignOut}
                title="Click to Sign Out"
                style={{ cursor: "pointer" }}
            />
        </div>
    );
}

export default Nav;
