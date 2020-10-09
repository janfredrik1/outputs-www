import React from 'react';
import Link from "next/link";

export default class Nav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <i className="fe fe-x"></i>
                        </button>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <Link href="/whats-new">
                                    <a className="nav-link" id="navbarPages"
                                       aria-haspopup="true" aria-expanded="false">
                                        What’s New
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link href="/support">
                                    <a className="nav-link" id="navbarPages"
                                       aria-haspopup="true" aria-expanded="false">
                                        Support
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link href="/blog">
                                    <a className="nav-link" id="navbarPages"
                                       aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link href="https://outputs-app.com">
                                    <a className="nav-link" id="navbarPages"
                                       aria-haspopup="true" aria-expanded="false">
                                        Create Account
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link href='/https://outputs-app.com'>
                                    <a className="navbar-btn btn btn-sm btn-primary lift ml-auto">
                                        Login
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

