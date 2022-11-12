import React, { Component } from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ButtonGroup, ButtonToolbar, Button } from "react-bootstrap";
import TakePhoto from "./TakePhoto";
import CropPhoto from "./CropPhoto";


export default class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="layer">
                    <Header title='Ganti Foto Profil'></Header>
                    <Helmet>
                        <title>Profile</title>
                    </Helmet>
                    <div className="container">
                        <div className="photo-profile">
                            <p> </p>
                        </div>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="bttn-grup1" aria-label="First group">
                                <Link to='/take-photo'>
                                    <a href={TakePhoto}>
                                        <Button className="kamera">Ambil dari kamera</Button>
                                    </a>
                                </Link>
                            </ButtonGroup>
                            <ButtonGroup className="bttn-grup2" aria-label="Second group">
                                <Link to='/crop-photo'>
                                    <a href={CropPhoto}>
                                        <Button className="galeri" variant="light">Ambil dari galeri</Button>
                                    </a>
                                </Link>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
            </>
        );
    }
}