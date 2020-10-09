import React from 'react';
import {NextSeo} from "next-seo";

const defaultTitle = 'Outputs. ';
const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

export default class Seo extends React.Component {


    render() {
        return (
            <NextSeo
                title={(this.props.seo.fields.seoTitle || defaultTitle) + ' | World\'s Tiniest Strategy Tool'}
                description={this.props.seo.fields.seoDescription || defaultDescription}
            />
        )
    }


}

