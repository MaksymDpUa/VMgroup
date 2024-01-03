import MainButton from "../MainButton/MainButton";
// import { Ichildren } from "../MainComtainer/MainContainer";
import css from "./Hero.module.css"

export default function Hero () {
    return (
            <section className={css.container}>
            <h2 className={css.title}>VM-group</h2>
            <p >Хочешь купить? Установить? Отремонтировать?</p>
            <p className={css.callToAction}>Доверь это профессионалам!</p>
            <MainButton/>
        </section>
    )
}