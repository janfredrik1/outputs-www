import React from "react";

const Layout = props => (
    <section className={'pt-8 pt-md-11 pb-8 pb-md-14'}>
        <div className={'container'}>
            {props.children}
        </div>
    </section>
);

export default Layout;
