import Head from 'next/head'
import {FC, useState} from "react";
import s from "./corpCompetenciesBlock.module.scss";
import cn from "classnames";

export const CorpCompetenciesBlock:FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
                <ul className={s.listWrapper}>
                    <li>
                        <div className={s.headerWrapper}><h3>Корпоративные компетенции</h3>
                            <div className={s.round}
                                 onClick={() => setOpen(open ? false : true)}
                            >{open ? "-" : "+"}</div>
                        </div>
                        <ul className={cn(s.propertyList, {[s.hide]: !open})}>
                            <li>
                                <div className={s.values}>1</div>
                                <div className={s.properties}>Сотрудничество</div>
                            </li>
                            <li>
                                <div className={s.values}>2</div>
                                <div className={s.properties}>Коммуникации и убеждения</div>
                            </li>
                            <li>
                                <div className={s.values}>3</div>
                                <div className={s.properties}>Достижение результата</div>
                            </li>
                            <li>
                                <div className={s.values}>3</div>
                                <div className={s.properties}>Системное мышление</div>
                            </li>
                            <li>
                                <div className={s.values}>2</div>
                                <div className={s.properties}>Культура безопасности</div>
                            </li>
                            <li>
                                <div className={s.values}>1</div>
                                <div className={s.properties}>Сотрудничество</div>
                            </li>
                        </ul>
                    </li>
                </ul>
        </div>
    )
}

