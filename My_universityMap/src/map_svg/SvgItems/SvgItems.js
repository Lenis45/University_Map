import { useSelector, useDispatch } from "react-redux";
import { selectBilding, blureTrue, blureFalse, blureAll } from "../../redux/SelectBildings"
import s from "./SvgItems.module.css"

export const SvgMtuciItems = () => {

    const bildings = useSelector(state => state.enclouresCase.enclouresCase);
    const dispatch = useDispatch();

    const onMouse = (id, action) => {
        if (bildings[id - 1].active === false) {
            dispatch(action(id))

            if (action === blureFalse && bildings.filter(item => item.active === false).length === bildings.length) {
                dispatch(blureAll())
            }
        }
    }

    const onClick = (id) => {
        dispatch(selectBilding(id))
        if (bildings.filter(item => item.active === false).length === 6) {
            dispatch(blureTrue(id))
        }
    }
    const onMouseLeaveAll = () => {
        if (bildings.filter(item => item.active === false).length === bildings.length) {
            dispatch(blureAll())
        }
    }
    const colorTumbler = (id, colorFill, blackFill) => {
        let fill;
        if (bildings[id - 1].active === true || bildings[id - 1].blure === true) {
            fill = colorFill;
        } else {
            fill = blackFill;
        } return fill
    }

    return (
        <svg width="565" height="743" viewBox="0 0 678 885" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_77_200)" onMouseLeave={onMouseLeaveAll} className={s.pointer}>
                <g id="2" onMouseEnter={(e) => onMouse(+e.currentTarget.id, blureTrue)}
                    onMouseLeave={(e) => onMouse(+e.currentTarget.id, blureFalse)}
                    onClick={(e) => onClick(+e.currentTarget.id)}
                >
                    <path d="M652.971 661.513H588.044L595.259 675.613H663.464L652.971 661.513Z" fill={colorTumbler(2, "#86C66F", "#9C9C9C")} />
                    <path d="M663.464 675.613H595.258L596.57 874H665.104L663.464 675.613Z" fill={colorTumbler(2, "#A2E48A", "#C0C0C0")} />
                    <path d="M596.57 874L589.028 842.52L588.044 661.513L595.259 675.613L596.57 874Z" fill={colorTumbler(2, "#719A62", "#666666")} />
                </g>

                <path d="M588.7 801.203L592.635 804.81L536.89 805.794V801.203H588.7Z" fill="#585858" />
                <path d="M592.635 842.193H536.89V805.786L592.635 804.811V842.193Z" fill="#878787" />

                <g id="4" onMouseEnter={(e) => onMouse(+e.currentTarget.id, blureTrue)}
                    onMouseLeave={(e) => onMouse(+e.currentTarget.id, blureFalse)}
                    onClick={(e) => onClick(+e.currentTarget.id)}>
                    <path d="M288.66 152.921L295.219 132.918L300.793 142.427L293.907 161.774L288.66 152.921Z" fill={colorTumbler(4, "#C582AA", "#666666")} />
                    <path d="M185.04 123.409L183.401 117.507L275.216 148.003L273.248 153.905L185.04 123.409Z" fill={colorTumbler(4, "#BC83A5", "#666666")} />
                    <path d="M219.799 7L183.401 117.506L288.988 152.593L326.042 40.775L219.799 7Z" fill={colorTumbler(4, "#FFB4E1", "#C0C0C0")} />
                    <path d="M327.682 45.0382L326.042 40.7754L324.731 44.0545L327.682 45.0382Z" fill={colorTumbler(4, "#C582AA", "#666666")} />
                </g>
                <g id="1" onMouseEnter={(e) => onMouse(+e.currentTarget.id, blureTrue)}
                    onMouseLeave={(e) => onMouse(+e.currentTarget.id, blureFalse)}
                    onClick={(e) => onClick(+e.currentTarget.id)}>
                    <path d="M208.978 743.491L218.815 736.604L243.081 799.236L536.89 797.268L537.218 810.713L235.211 811.696L208.978 743.491Z" fill={colorTumbler(1, "#BFA27F", "#9C9C9C")} />
                    <path d="M161.758 296.219L172.579 300.81L84.0432 574.616L143.723 627.41L132.574 635.608L69.2871 577.895L161.758 296.219Z" fill={colorTumbler(1, "#BFA27F", "#9C9C9C")} />
                    <path d="M277.511 857.276L269.313 867.441V847.767H277.511V857.276Z" fill={colorTumbler(1, "#BFA27F", "#666666")} />
                    <path d="M35.84 529.692L21.7397 534.283L41.7424 540.513L44.6936 532.643L35.84 529.692Z" fill={colorTumbler(1, "#BFA27F", "#666666")} />
                    <path d="M61.0893 446.402L49.6124 448.37L69.9429 454.928L72.2382 449.026L61.0893 446.402Z" fill={colorTumbler(1, "#BFA27F", "#666666")} />
                    <path d="M363.752 856.621L358.834 867.442L358.506 847.439H363.752V856.621Z" fill={colorTumbler(1, "#BFA27F", "#666666")} />
                    <path d="M208.978 848.095L178.81 767.756L102.406 659.545L25.6747 589.7L6 583.142L21.7398 534.283L41.0866 540.185L56.8264 498.212L35.84 490.67L49.6123 448.37L69.615 454.6L85.0268 410.988L64.6963 404.101L78.4686 361.473L98.1433 366.719L111.26 328.354L91.2572 320.812L105.685 277.527L161.758 296.218L69.615 578.223L132.574 635.28L359 475.5L434.909 583.142L209.633 743.819L235.211 810.713H442.451H460.158H537.218V867.441H485.736V847.111H449.009V867.441H396.216V848.095H358.834V867.441H307.023V848.095H269.314V867.441H208.978V848.095Z" fill={colorTumbler(1, "#FFD4A1", "#C0C0C0")} />
                </g>

                <g id="6" onMouseEnter={(e) => onMouse(+e.currentTarget.id, blureTrue)}
                    onMouseLeave={(e) => onMouse(+e.currentTarget.id, blureFalse)}
                    onClick={(e) => onClick(+e.currentTarget.id)}>
                    <path d="M437.86 749.394L442.451 810.713H460.158L454.912 745.131L521.15 724.472L518.199 716.275L498.524 656.267L393.592 688.074L415.562 756.608L437.86 749.394Z" fill={colorTumbler(6, "#B0434A", "#A7A7A7")} />
                    <path d="M396.543 683.155L393.592 688.074L498.524 656.266L494.917 652.659L396.543 683.155Z" fill={colorTumbler(6, "#782F33", "#666666")} />
                </g>

                <g id="5" onMouseEnter={(e) => onMouse(+e.currentTarget.id, blureTrue)}
                    onMouseLeave={(e) => onMouse(+e.currentTarget.id, blureFalse)}
                    onClick={(e) => onClick(+e.currentTarget.id)}>
                    <path d="M249.639 469.028L251.606 551.99L266.362 541.497L264.723 449.025L307.679 382.459L264.723 355.57L202.092 452.632L243.408 479.193L249.639 469.028Z" fill={colorTumbler(5, "#F19E9E", "#C0C0C0")} />
                    <path d="M249.967 482.473C247.999 481.38 243.671 479.456 243.408 479.194L249.639 469.028L249.967 482.473Z" fill={colorTumbler(5, "#AE6E6E", "#7A7A7A")} />
                    <path d="M264.395 449.354L266.362 540.841L272.265 536.578L270.953 446.402L310.958 383.115H307.351L264.395 449.354Z" fill={colorTumbler(5, "#AE6E6E", "#9C9C9C")} />
                </g>

                <path d="M143.723 247.359L130.935 285.725L148.97 291.955L162.414 253.262L143.723 247.359Z" fill="#878787" />
                <path d="M162.414 253.262L148.97 291.955L155.528 294.251L166.021 262.771L162.414 253.262Z" fill="#585858" />

                <g id="7" onMouseEnter={(e) => onMouse(+e.currentTarget.id, blureTrue)}
                    onMouseLeave={(e) => onMouse(+e.currentTarget.id, blureFalse)}
                    onClick={(e) => onClick(+e.currentTarget.id)}>
                    <path d="M281.118 291.3L116.178 238.506L139.46 173.252L303.416 225.39L281.118 291.3Z" fill={colorTumbler(7, "#8CA5FF", "#C0C0C0")} />
                    <path d="M166.021 262.772L162.414 253.263L281.446 290.973L298.498 304.745L166.021 262.772Z" fill={colorTumbler(7, "#50619D", "#7A7A7A")} />
                    <path d="M281.118 290.972L303.416 225.39L319.156 244.736L298.17 304.417L281.118 290.972Z" fill={colorTumbler(7, "#6279CC", "#9C9C9C")} />
                    <path d="M132.574 247.36L116.178 238.507L143.723 247.36L142.739 250.968L132.574 247.36Z" fill={colorTumbler(7, "#50619D", "#7A7A7A")} />
                </g>

                <g id="3" onMouseEnter={(e) => onMouse(+e.currentTarget.id, blureTrue)}
                    onMouseLeave={(e) => onMouse(+e.currentTarget.id, blureFalse)}
                    onClick={(e) => onClick(+e.currentTarget.id)}>
                    <path d="M506.722 104.718L482.784 172.596V203.091L505.738 142.1L506.722 104.718Z" fill={colorTumbler(3, "#EAE7A5", "#9C9C9C")} />
                    <path d="M506.722 104.39L301.121 36.1846L277.511 103.734L482.785 172.596L506.722 104.39Z" fill={colorTumbler(3, "#FFFCA9", "#A7A7A7")} />
                    <path d="M300.793 142.428L277.511 103.734L482.785 172.596V203.092L300.793 142.428Z" fill={colorTumbler(3, "#D9D690", "#7A7A7A")} />
                </g>


                <path d="M294.563 159.808L275.544 216.537L268.658 214.569L288.988 152.594L291.94 156.201L294.563 159.808Z" fill="#585858" />
                <path d="M185.696 122.098L165.365 181.778L183.728 187.352L202.747 128L185.696 122.098Z" fill="#878787" />
                <path d="M254.23 210.306L275.216 147.675L288.988 152.593L268.658 214.897L254.23 210.306Z" fill="#878787" />
                <path d="M189.959 189.32L183.729 187.352L202.747 128L208.322 131.607L189.959 189.32Z" fill="#585858" />
            </g>
            <defs>
                <filter id="filter0_d_77_200" x="0" y="0" width="677.104" height="885" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="3" dy="2" />
                    <feGaussianBlur stdDeviation="4.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0125 0 0 0 0 0.0125 0 0 0 0 0.0125 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_200" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_200" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};