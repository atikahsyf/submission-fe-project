import { Helmet } from "react-helmet";
import React from "react";
import { Navbar } from "react-bootstrap";
import ChangePhoto from './ChangePhoto';
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className='layer'>
                    <Header title="Profile"></Header>
                    <Helmet>
                        <title>Profile</title>
                    </Helmet>
                    <div className="container">
                        <ul>
                            <li>
                                <Link to='/change-photo'>
                                    <a className='photo' href={ChangePhoto}>
                                        <img />
                                    </a>
                                </Link>
                            </li>
                            <li className='txt'>
                                <h3>John Doe</h3>
                                <p>Kelas 10 IPA 8</p>
                            </li>
                        </ul>
                        <div className='cont'>
                            <p> </p>
                        </div>
                        <div className='cont'>
                            <p> </p>
                        </div>
                        <div className='cont'>
                            <p> </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}