import React from "react";
import * as PropTypes from "prop-types";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 *
 * @description Heo
 */

const PageFeatureList = props => (
    <header>

    </header>
);

PageSelector.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.string
};

PageSelector.defaultProps = {
    icon: 'fe-layers'
};

export default PageSelector;
