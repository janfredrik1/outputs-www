import React from 'react';
import * as PropTypes from "prop-types";
import Link from "../Link";

export default class UpdatesSubnav extends React.Component {

    render() {
        return (
            <div className="d-none d-sm-block">
                <div className="border-bottom row justify-content-center">
                    <ul className="nav nav-pills">
                        <li className="nav-item">

                            <Link href="/aktuelt" activeClassName="active">
                                <a className="nav-link text-gray-700">
                                    <i className="fe fe-radio mr-1 pt-1"></i>
                                    <small className="text-uppercase font-weight-light">Siste</small>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/aktuelt/nyheter" activeClassName="active">
                                <a className="nav-link text-gray-700">
                                    <i className="fe fe-monitor mr-1 pt-2"></i>
                                    <small className="text-uppercase font-weight-light">Nyheter</small>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/aktuelt/blogg" activeClassName="active">
                                <a className="nav-link text-gray-700">
                                    <i className="fe fe-code mr-1"></i>
                                    <small className="text-uppercase font-weight-light">Blogg</small>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


UpdatesSubnav.propTypes = {
    navItems: PropTypes.array.isRequired
};
