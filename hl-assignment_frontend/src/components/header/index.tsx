import "./styles.scss";
import "./responsive.scss";
import logoCompany from "../../assets/images/hl-assignment-logocompany.png";
import avatarUser from "../../assets/images/hl-assignment-avatar.png";
import { text } from "../../constants";

export type Props = {};

const Header: React.FC<Props> = () => {
    return (
        <>
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src={logoCompany} alt="" />
                </div>
                <div className="header__maker-infor">
                    <div className="header__maker-infor__desc">
                        <p className="text-top">{text.headerSection.textInTop}</p>
                        <p className="text-bottom">{text.headerSection.textInBottom}</p>
                    </div>
                    <img className="header__maker-infor__avatar" src={avatarUser} alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;
