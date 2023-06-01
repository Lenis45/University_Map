import { SvgMtuciItems } from "../../map_svg/SvgItems/SvgItems";
import EnclosuresList from "../../map_svg/effects/EnclosuresList/EnclosuresList";
import s from "./home.module.css";

export const Home = () => {

    return (
        <div className={s.block}>
            <SvgMtuciItems />
            <EnclosuresList className={s.list} />
        </div>
    );
};