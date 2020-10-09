import React from 'react'
import App from 'next/app'
import Fonts from "../components/utils/fonts";
import Head from "../components/utils/head";
import Js from "../components/utils/js";


export default class MyApp extends App {


    render() {
        const {Component, pageProps} = this.props

        return (
            <div>
                <Head></Head>
                <Fonts/>
                <Component {...pageProps} />
                <Js/>
            </div>
        )
    }
}
