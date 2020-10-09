import React from "react";
import * as PropTypes from "prop-types";
import Author from "./author";
import ReactMarkdown from "react-markdown";


/**
 *
 * @param props
 * @returns {*}
 * @constructor
 *
 * @description Heo
 */

const Post = props => {
    console.log(props);
    return (
        <React.Fragment>
            <h1>
                {props.post.fields.title}
            </h1>

            <Author author={props.post.fields.author} createdAt={props.post.sys.createdAt}></Author>

            <ReactMarkdown source={props.post.fields.body}/>


        </React.Fragment>
    )
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;
