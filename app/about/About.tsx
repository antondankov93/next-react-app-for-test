import s from './about.module.scss'
import {FC} from "react";

export const About:FC = () => {
    return (
        <section className={s.mainWrapper}>
            <h2>Исполнитель: <b>Даньков Антон</b></h2>
            <p>Ознакомиться с моими проектами на стеке React/Redux/Redux-saga/Typescript
                можно по этой <a target="_blank" href='https://github.com/antondankov93/Swapi-App'>ссылке</a></p>
        </section>
    )
}
