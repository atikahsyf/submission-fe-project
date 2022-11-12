import React from "react";
import { Link } from "react-router-dom";

import style from "./header.css";

import {
    Navbar,
    Nav,
    Button,
} from "react-bootstrap";

export default function Header(props) {
    return (
        <>
            <div className="cont-header">
                <Navbar>
                    <ul>
                        <li>
                            <Link to="/">
                                <img className="back-icon" src="https://img.icons8.com/sf-regular-filled/48/000000/circled-left-2.png" />
                            </Link>
                        </li>
                        <li>
                            <h2>{props.title}</h2>
                        </li>
                    </ul>
                </Navbar>
            </div>

        </>
    );
}
