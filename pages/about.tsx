import Head from 'next/head'
import {MainLayout} from "../app/main-layout/MainLayout";
import {About} from "../app/about/About";
import {FC} from "react";

const AboutPage:FC = () => {
    return (
        <MainLayout>
            <Head>
                <title>About page</title>
            </Head>
            <About/>
        </MainLayout>
    )
}

export default AboutPage;
