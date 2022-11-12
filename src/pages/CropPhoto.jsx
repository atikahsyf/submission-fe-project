import { render } from "@testing-library/react";
import React, { Component } from "react";
import Header from "../components/Header";

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header title='Potong Gambar'></Header>
            </>
        );
    }
}