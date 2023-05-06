import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import React from 'react';

export default function format( { children }){
    return (
        <>
            <Head>
                <title>Blog Marcos</title>
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}
