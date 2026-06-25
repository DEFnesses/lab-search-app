import s from "./Header.module.scss"

function Header() {
    return (
        <div className={s.header}>
            <h1 className={s.header__title}>
                Реестр поиска лабораторных исследований
            </h1>
        </div>
    );
}

export default Header;
