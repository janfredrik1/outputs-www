import React from "react";
import ReactMarkdown from "react-markdown";
import fetch from 'isomorphic-unfetch';

class Welcome extends React.Component {

    state = {
        pageContent: {}
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        fetch("/api/pages/homePageContent")
            .then((res) => res.json())
            .then((pageContent) => {
                this.setState({pageContent: pageContent});
            });

    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9 col-xl-8">


                        <h1 className="display-4 text-center">
                            {this.state.pageContent.title}
                        </h1>


                        <div className="lead mb-7 text-center text-gray-600">
                            <ReactMarkdown className="markdown" source={this.state.pageContent.content}/>

                        </div>

                        <div>


                        </div>


                        <div className="row align-items-center py-5 border-top border-bottom">
                            <div className="col-auto">


                                <div className="avatar avatar-lg">
                                    <img src="img/avatars/avatar-1.jpg" alt="..."
                                         className="avatar-img rounded-circle"/>
                                </div>

                            </div>
                            <div className="col ml-n5">


                                <h6 className="text-uppercase mb-0">
                                    Ab Hadley
                                </h6>


                                <time className="font-size-sm text-muted" dateTime="2019-05-20">
                                    Published on May 20, 2019
                                </time>

                            </div>
                            <div className="col-auto">


                                    <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                  Share:
                </span>


                                <ul className="d-inline list-unstyled list-inline list-social">
                                    <li className="list-inline-item list-social-item mr-3">
                                        <a href="#!" className="text    -decoration-none">
                                            <img src="./img/icons/social/instagram.svg"
                                                 className="list-social-icon" alt="..."/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item list-social-item mr-3">
                                        <a href="#!" className="text-decoration-none">
                                            <img src="./img/icons/social/facebook.svg"
                                                 className="list-social-icon" alt="..."/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item list-social-item mr-3">
                                        <a href="#!" className="text-decoration-none">
                                            <img src="./img/icons/social/twitter.svg"
                                                 className="list-social-icon" alt="..."/>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

export default Welcome;
