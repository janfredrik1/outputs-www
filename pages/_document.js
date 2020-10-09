import React from 'react'
import Document, {Head, Html, Main, NextScript} from 'next/document'
import Nav from "../components/nav/nav";

export default class CustomDocument extends Document {
    render() {
        return (<Html>
            <Head>
            </Head>
            <body className={'bg-gray-200'}>
            <Nav></Nav>
            <Main/>
            <NextScript/>
            </body>
        </Html>)
    }
}
