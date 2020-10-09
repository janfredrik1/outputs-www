import Layout from "../components/layouts/layout";
import {ApiFetchService} from "../core/services/apiFetchService";
import React from "react";
import Seo from "../components/utils/seo";
import Header from "../components/page/header";
import {ConstantsPageKeys} from "../core/constants/constants.page.keys";

export default class PageHome extends React.Component {

    static async getInitialProps({req}) {
        const json = await ApiFetchService.getInstance()
            .fetch(`/api/pages?page=${ConstantsPageKeys.PAGE_HOME}`, req);
        return {page: json}
    }

    render() {
        return (

            <React.Fragment>
                <Seo seo={this.props.page}/>
                <Header title={this.props.page.fields.title} subtitle={this.props.page.fields.subtitle}
                        icon='fe-layers'/>
                <Layout>
                    <p>Content</p>
                </Layout>
            </React.Fragment>
        )
    }
};
