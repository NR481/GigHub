import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../store/session";
import LoginFormModal from "../auth/LoginFormModal";
import LogoutButton from "../auth/LogoutButton";
import SignupFormModal from "../auth/SignupFormModal";
import "./NavBar.css";

const NavBar = () => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const handleDemo = async (e) => {
        e.preventDefault();
        await dispatch(login("demo@aa.io", "password"));
    };

    return (
        <nav>
            <NavLink to="/" exact={true}>
                <h1 className="title">GigHub</h1>
            </NavLink>
            <ul className="nav-links">
                {!user && (
                    <button
                        onClick={handleDemo}
                        className="nav-buttons demo-login"
                    >
                        Demo
                    </button>
                )}
                {!user && (
                    <li>
                        <LoginFormModal />
                    </li>
                )}
                {!user && (
                    <li>
                        <SignupFormModal />
                    </li>
                )}
                {user && (
                    <li>
                        <LogoutButton />
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
