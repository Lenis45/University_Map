import { useDispatch } from "react-redux"
import { reboot } from "../redux/SelectBildings"
import { Searcher } from "./Searcher/Searcher";
import icon from "./mtuciLogo.png"
import s from "./Header.module.css"


import { Outlet, Link } from "react-router-dom";

const Header = (props) => {

    const dispatch = useDispatch
    const onClikLink = () => {      
        dispatch(reboot())
    }
    return (
        <>
            <header className={props.s}>
                <nav>
                    <ul className={s.wrapper} >
                        <li >
                            <Link to="mtuci-svg-map/"><img src={icon} alt="mtuci" /></Link>
                        </li>
                        <li>
                            <Link to="mtuci-svg-map/general-Map" onClick={onClikLink}><p className={s.paddingTop}>Общая карта</p></Link>
                        </li>
                        <li>
                            <Searcher />
                        </li>
                        <li>
                            <Link to="mtuci-svg-map/favorites-audiences" onClick={onClikLink}><p className={s.paddingTop}>Свободные аудитории</p></Link>
                        </li>
                        <li>
                            <button>Вход в аккаунт</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Header;