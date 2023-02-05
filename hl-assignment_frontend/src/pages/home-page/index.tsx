import { Body, Footer, Header } from "../../components";
import "./styles.scss";
export type Props = {};

const MainPage: React.FC<Props> = () => {
    return (
        <>
            <div className="main-page__wrapper">
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    );
};

export default MainPage;
