import React from "react";
import * as PropTypes from "prop-types";


const Header = props => (

    <section className="pt-8 pt-md-11 pb-10 pb-md-10 bg-primary">

        <div className="shape shape-blur-3 svg-shim text-white">
            <svg viewBox="0 0 1738 487" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H1420.92C1420.92 0 2134.35 457.505 1420.92 485.868C707.502 514.231 0 0 0 0Z"
                      fill="url(#paint0_linear)"></path>
                <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="1049.98" y2="912.68"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="currentColor" stopOpacity="0.075"></stop>
                        <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 text-center pt-10 pt-md-8">


                    <div className="icon-circle bg-primary text-white">
                        <i className={'fe ' + props.icon}></i>
                    </div>

                    <h1 className="display-2 text-white mt-3">
                        {props.title}
                    </h1>

                    <p className="lead text-white-80 mb-6 mb-md-8">
                        {props.subtitle}
                    </p>

                </div>
            </div>

        </div>

    </section>


);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.string
};

Header.defaultProps = {
    icon: 'fe-layers'
};

export default Header;
