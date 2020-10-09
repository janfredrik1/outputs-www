import React from "react";
import * as PropTypes from "prop-types";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 *
 * @description Article
 */

const PageArticle = props => (
    <React.Fragment>
        <h2>{props.title}</h2>
    </React.Fragment>
);

PageArticle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    paragraphs: PropTypes.array,
};

export default PageArticle;
