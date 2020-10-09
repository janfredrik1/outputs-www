import React from "react";
import * as PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Paragraph from "./paragraph";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 *
 * @description Hero komponent for side
 */

const Article = props => (

    <React.Fragment>

        <article>
            <div className="row justify-content-md-center">
                <div className="col  col-md-10 col-lg-8">
                    <h2>{props.article.fields.title}</h2>
                    <h3>{props.article.fields.subtitle}</h3>

                    <ReactMarkdown source={props.article.fields.body}/>


                    {props.article.fields.paragraphs.map((paragraph, index) =>
                        <Paragraph paragraph={paragraph}></Paragraph>
                    )}
                </div>
            </div>


        </article>
    </React.Fragment>
);

Article.propTypes = {
    article: PropTypes.object.isRequired
};

export default Article;
