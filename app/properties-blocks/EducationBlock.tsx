import {FC, useState} from "react"
import s from './educationBlock.module.scss'
import cn from 'classnames'


export const EducationBlock:FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
                <ul className={s.listWrapper}>
                    <li>
                        <div className={s.headerWrapper}><h3>Образование</h3>
                            <div className={s.round}
                                 onClick={() => setOpen(open ? false : true)}
                            >{open ? "-" : "+"}</div>
                        </div>
                        <ul className={cn(s.propertyList, {[s.hide]: !open})}>
                            <li>
                                <div>Высшее/Среднее высшее</div>
                                <div className={s.properties}>Степень</div>
                            </li>
                            <li>
                                <div>Инженерно-техническая</div>
                                <div className={s.properties}>Специализация</div>
                            </li>
                        </ul>
                    </li>
                </ul>
        </div>
    )
}
