import Layout from "../components/layouts/layout";
import {ApiFetchService} from "../core/services/apiFetchService";
import React from "react";
import Seo from "../components/utils/seo";
import {ConstantsPageKeys} from "../core/constants/constants.page.keys";

import Clipboard from './icons/duotone-icons/Communication/Clipboard-check.svg';

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
                <Layout>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 order-md-2 d-none d-md-block">
                            <Clipboard width={300} height={300}/>
                        </div>
                        <div className="col-12 col-md-6 order-md-1">


                            <span className="badge badge-pill badge-primary-soft mb-3">
              <span className="h6 text-uppercase">Easy</span>
            </span>


                            <h2>
                                <span class="font-weight-bold">Outputs&trade;</span> is a tiny and efficient strategy
                                tool<br/>.
                                <span className="text-primary">that helps your organization realise its ambitions</span>.
                            </h2>


                            <p className="font-size-lg text-gray-700 mb-6 mb-md-6">
                                Rather than worrying about switching offices every couple years, you can instead stay in
                                the same location and grow-up from your shared coworking space to an office that takes
                                up an entire floor.
                            </p>


                            <div className="row">
                                <div className="col-12 col-lg-6">


                                    <div className="d-flex">


                                        <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                                            <i className="fe fe-check"></i>
                                        </div>


                                        <p>
                                            Add space anytime
                                        </p>

                                    </div>


                                    <div className="d-flex">


                                        <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                                            <i className="fe fe-check"></i>
                                        </div>

                                        <p className="mb-lg-0">
                                            Group discounts
                                        </p>

                                    </div>

                                </div>
                                <div className="col-12 col-lg-6">


                                    <div className="d-flex">


                                        <span className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>


                                        <p>
                                            Infinite flexibility
                                        </p>

                                    </div>


                                    <div className="d-flex">


                                        <div className="badge badge-rounded-circle badge-primary-soft mr-1 mr-4">
                                            <i className="fe fe-check"></i>
                                        </div>


                                        <p className="mb-0">
                                            Snacks included
                                        </p>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div className="col-sm-8">
                            <p className="font-size-lg text-gray-700 text-center mt-9">
                                Landkit makes use of the HK Grotesk Pro webfont for both headings and body content. This
                                font (and a license to use the font) is included with Landkit!
                            </p>
                            <div className={'text-center'}>
                                {this.props.page.fields.title}
                                {this.props.page.fields.subtitle}
                            </div>
                        </div>
                    </div>


                </Layout>
            </React.Fragment>
        )
    }
};
