// export interface IHeaderProps {
// children: React.ReactNode
// }
import Link from "next/link"
import css from "./Header.module.css"

export default function Header () {
    return (
        <header className={css.header} >
            <div className={css.container}>
                <p className={css.logo}>VM-group</p>
          
            <nav className={css.nav}>
                <ul className={css.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contacts">Contacts</Link></li>
                </ul>
                </nav>
                  </div>
        </header>
    )
}