import { text } from "../../constants";
import "./styles.scss";
import "./responsive.scss";

export type Props = {};

const Footer: React.FC<Props> = () => {
    return (
        <>
            <footer className="footer__wrapper">
                <p className="footer__des">{text.footerSection.textDesWebsite}</p>
                <p className="footer__copyright">
                    {text.footerSection.textCopyright}
                </p>
            </footer>
        </>
    );
};

export default Footer;
