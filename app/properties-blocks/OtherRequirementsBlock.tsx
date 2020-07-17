import Head from 'next/head'
import {FC, useState} from "react";
import s from "./otherRequirementsBlock.module.scss";
import cn from "classnames";

export const OtherRequiremetsBlock:FC = () => {
    const [open, setOpen] = useState(false)
    const [openOther1, setOpenOther1] = useState(false)
    const [openOther2, setOpenOther2] = useState(false)

    return (
        <div>
            <ul className={s.listWrapper}>
                <li>
                    <div className={s.headerWrapper}><h3>Дополнительные требования</h3>
                        <div className={s.round}
                             onClick={() => setOpen(open ? false : true)}
                        >{open ? "-" : "+"}</div>
                    </div>
                    <ul className={cn(s.propertyList, {[s.hide]: !open})}>
                        <li>
                            <div className={s.round}
                                 onClick={() => setOpenOther1(openOther1 ? false : true)}
                            >{openOther1 ? "-" : "+"}</div>
                            <div className={s.properties}>Инструменты</div>
                            <ul className={cn(s.propertyListOther, {[s.hide]: !openOther1})}>

                                <li>
                                    <div>Продвинутый уровень</div>
                                    <div className={s.properties}>SAP ERP</div>
                                </li>

                                <li>
                                    <div>Продвинутый уровень</div>
                                    <div className={s.properties}>SAP HR</div>
                                </li>

                            </ul>
                        </li>

                        <li>
                            <div className={s.round}
                                 onClick={() => setOpenOther2(openOther2 ? false : true)}
                            >{openOther2 ? "-" : "+"}</div>
                            <div className={s.properties}>Иностранные языки</div>
                            <ul className={cn(s.propertyListOther, {[s.hide]: !openOther2})}>

                                <li>
                                    <div className={s.languageValue}>Продвинутый уровень</div>
                                    <div className={cn(s.properties, s.language)}>Английский язык</div>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>
        </div>
    )
}

