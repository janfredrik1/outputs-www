import React from "react";

const PostLayout = props => (
    <section className={'pt-8 pt-md-11 pb-8 pb-md-14'}>
        <div className={'container'}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                    {props.children}
                </div>
            </div>
        </div>
    </section>
);

export default PostLayout;
