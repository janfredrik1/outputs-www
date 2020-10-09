import React from 'react';
import {NextSeo} from "next-seo";

const defaultTitle = '';
const defaultDescription = 'Outputs - World\'s Tiniest Strategy Tool';
const defaultOGURL = '';
const defaultOGImage = '';

export default class Seo extends React.Component {


    render() {
        return (
            <NextSeo
                title={(this.props.seo.fields.seoTitle || defaultTitle) + ' | Outputs'}
                description={this.props.seo.fields.seoDescription || defaultDescription}
            />
        )
    }


}

