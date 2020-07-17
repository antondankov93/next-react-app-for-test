import Head from 'next/head'
import {MainLayout} from "../app/main-layout/MainLayout";
import {EducationBlock} from "../app/properties-blocks/EducationBlock";
import {CorpCompetenciesBlock} from "../app/properties-blocks/CorpCompetenciesBlock";
import {GeneralInfoBlock} from "../app/properties-blocks/GeneralInfoBlock";
import {OtherRequiremetsBlock} from "../app/properties-blocks/OtherRequirementsBlock";
import s from './index.module.scss'
import {FC} from "react";



const HomePage:FC = () => {
  return (
    <MainLayout>
      <Head>
          <title>Home page</title>
          <meta name='keywords' constent='next.js, react, for Axes'/>

      </Head>

      <section className={s.mainWrapper}>
          <div className={s.header}>
              <h2 className={s.properties}>Свойства</h2>
              <h2 className={s.values}>Значения</h2>
          </div>
          <GeneralInfoBlock/>
          <EducationBlock/>
          <CorpCompetenciesBlock/>
          <OtherRequiremetsBlock/>
      </section>
    </MainLayout>
  )
}

export default HomePage;
