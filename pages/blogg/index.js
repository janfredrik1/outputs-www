import React from 'react'
import Layout from "../../components/layouts/layout";
import Seo from "../../components/utils/seo";
import {ApiFetchService} from "../../core/services/apiFetchService";
import PageHero from "../../components/page/pageHero";
import {ConstantsPageKeys} from "../../core/constants/constants.page.keys";


export default class PageBlog extends React.Component {


    static async getInitialProps({req}) {
        const json = await ApiFetchService.getInstance()
            .fetch(`/api/pages?page=${ConstantsPageKeys.PAGE_BLOG}`, req);
        return {page: json}
    }

    render() {
        return (

            <React.Fragment>
                <Seo seo={this.props.page}/>
                <PageHero title={this.props.page.fields.title} subtitle={this.props.page.fields.subtitle}
                          icon='fe-layers'/>
                <Layout></Layout>
            </React.Fragment>
        )
    }
}
