import React, { Component } from "react";
import { Container, Col, Row } from "../Grid";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {


  render() {
    return (
      <nav className={"navbar navbar-expand-lg navbar-light mb-5 pt-0 pb-0"}>
      <Container>
      <h3 className={"font-weight-bold pl-3"} id="name">Geoffrey Godwin-Austen</h3>
            <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={"navbar-toggler-icon"}></span>
            </button>

            <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                <ul className={"navbar-nav ml-auto"}>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href="mailto:geoffrey.godwin-austen@outlook.com"><i className={"fas fa-envelope"}><span
                                    className={"tooltiptext"}>email</span></i></a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href="https://github.com/geoffreygo/" target="_blank"><i className={"fab fa-github"}
                                ><span className={"tooltiptext"}
                                >github</span></i></a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href=" https://www.linkedin.com/in/geoffrey-godwin-austen/"
                                target="_blank"><i className={"fab fa-linkedin"}><span className={"tooltiptext"}
                                >linkedin</span></i></a>
                    </li>
                </ul>
            </div>
        </Container>
      </nav>
    )
  }
}

export default Nav;