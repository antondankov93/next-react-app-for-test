import Link from "next/link";
import s from './mainLayout.module.scss'
import {FC} from "react";

export const MainLayout:FC = ({children}) => {
    return (
        <>
            <header className={s.headerWrapper}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
            </header>
            <main className={s.mainWrapper}>
                {children}
            </main>
        </>
    )
}

