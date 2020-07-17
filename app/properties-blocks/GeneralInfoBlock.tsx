import Head from 'next/head'
import {FC, useState} from "react";
import s from "./generalInfoBlock.module.scss";
import cn from "classnames";

export const GeneralInfoBlock:FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
                <ul className={s.listWrapper}>
                    <li>
                        <div className={s.headerWrapper}><h3>Общая информация</h3>
                            <div className={s.round}
                                 onClick={() => setOpen(open ? false : true)}
                            >{open ? "-" : "+"}</div>
                        </div>
                        <ul className={cn(s.propertyList, {[s.hide]: !open})}>
                            <li>
                                <div>Профиль требования к должности</div>
                                <div className={s.properties}>Документ</div>
                            </li>
                            <li>
                                <div>Инженер</div>
                                <div className={s.properties}>Должность</div>
                            </li>
                            <li>
                                <div>Логистика</div>
                                <div className={s.properties}>Функциональное направление</div>
                            </li>
                            <li>
                                <div>Обслуживание и ремонт механического, энергетического и <br/>
                                электрооборудования
                                </div>
                                <div className={s.properties}>Специализация</div>
                            </li>
                        </ul>
                    </li>
                </ul>
        </div>
    )
}

