import React from "react";
import * as PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 *
 * @description Hero komponent for side
 */

const Paragraph = props => (

    <React.Fragment>

        <paragraph>
            <h3>{props.paragraph.fields.title}</h3>

            <ReactMarkdown source={props.paragraph.fields.body}/>

        </paragraph>
    </React.Fragment>
);

Paragraph.propTypes = {
    paragraph: PropTypes.object.isRequired
};

export default Paragraph;
