import React from "react";
import * as PropTypes from "prop-types";
import Moment from "react-moment";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 *
 * @description Heo
 */

const Author = props => {
    return (
        <div className="row align-items-center py-5 border-top border-bottom mb-5">
            <div className="col">
                <h6 className="text-uppercase mb-0">
                    {props.author.fields.firstname} {props.author.fields.lastname}
                </h6>

                <time className="font-size-sm text-muted" dateTime="2019-05-20">


                    Publisert den <Moment format="DD MMM YYYY">{props.createdAt}</Moment>
                </time>

            </div>
            <div className="col-auto">

                    <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                  Del:
                </span>
                <ul className="d-inline list-unstyled list-inline list-social">
                    <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                            <img src="/img/icons/social/instagram.svg" className="list-social-icon"
                                 alt="..."></img>
                        </a>
                    </li>
                    <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                            <img src="/img/icons/social/facebook.svg" className="list-social-icon"
                                 alt="..."></img>
                        </a>
                    </li>
                    <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                            <img src="/img/icons/social/twitter.svg" className="list-social-icon"
                                 alt="..."></img>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

Author.propTypes = {
    author: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired
};

export default Author;
