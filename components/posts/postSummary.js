import React from "react";
import * as PropTypes from "prop-types";
import Link from "next/link";
import Author from "./author";
import ReactMarkdown from "react-markdown";
import {truncate} from "../../core/utils/helpers/truncate";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 *
 * @description Heo
 */

const PostSummary = props => {


    return (
        <React.Fragment>
            <h1>
                <Link href={'/aktuelt/' + props.post.fields.slug}>
                    <a>
                        {props.post.fields.title}
                    </a>
                </Link>
            </h1>

            <Author author={props.post.fields.author} createdAt={props.post.sys.createdAt}></Author>

            <ReactMarkdown source={truncate(props.post.fields.body, 300, '')}/>

            <Link href={'/aktuelt/' + props.post.fields.slug}>
            <button className="btn btn-sm btn-primary-soft">Les mere</button>
            </Link>

            <div className="border-bottom-xl border-gray-800-50 my-5"></div>


        </React.Fragment>
    )

};

PostSummary.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostSummary;
