import React from "react";
import { Link } from "react-router-dom";
import { menu } from "../data/menu";
import "../styles/Nav.css";
import logo from "./style.ico";
import cart from "./bag-check.svg";
import heart from "./heart.svg";
import person from "./person.svg";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default">
                <div className="container-fluid">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {menu.map((m) => (
                                <li
                                    key={m.id}
                                    className={
                                        m.children ? "dropdown" : "nav-item"
                                    }
                                >
                                    <a
                                        className="nav-link mx-3"
                                        aria-current="page"
                                        href="#/"
                                    >
                                        {m.name}
                                    </a>
                                    {m.children && (
                                        <div class="dropdown-content bg-succcess">
                                            {m.children.map((c) => (
                                                <Link
                                                    to={`/${m.name}/${c.name}`}
                                                    key={c.id}
                                                >
                                                    {c.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <form className="d-flex ">
                            <Link to={"./Cart"}>
                                <img src={cart} alt="" className="mx-4 " />
                            </Link>
                            <Link to={"./Wish"}>
                                {" "}
                                <img src={heart} alt="" />{" "}
                            </Link>
                            <Link to={"./Profile"}>
                                {" "}
                                <img src={person} alt="" className="mx-4" />
                            </Link>

                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search Product"
                                aria-label="Search"
                                id="info"
                            />
                            <button
                                className="btn btn-outline-warning"
                                type="submit"
                            >
                                Search
                            </button>
                            <ul id="result"></ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
