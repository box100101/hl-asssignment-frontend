import React from "react";
import { setCookie, getCookie } from "typescript-cookie";
import { jokes, text } from "../../constants";
import Button from "../button";
import Divider from "../divider";
import "./styles.scss";
import "./responsive.scss";

export type Props = {};

const Body: React.FC<Props> = () => {
    const [index, setIndex] = React.useState<any>(
        getCookie("index") === undefined ? 0 : getCookie("index")
    );

    const handleOnClick = (): void => {
        setIndex(parseInt(index) + 1);
        setCookie("index", parseInt(index) + 1);
    };

    return (
        <>
            <div className="body__wrapper">
                <div className="body__joke-header">
                    <h3 className="body__joke-header__title">
                        {text.bodySection.textJokeTitlel}
                    </h3>
                    <p className="body__joke-header__des">
                        {text.bodySection.textJokeDes}
                    </p>
                </div>
                <div className="body__joke-body">
                    {index >= 4 ? (
                        <p className="body__joke-message">
                            {text.bodySection.textMessage}
                        </p>
                    ) : (
                        <>
                            <div className="body__joke-content">{jokes[index]}</div>
                            <Divider width="65%" />
                            <div className="body__joke-action">
                                <div className="body__joke-action__container">
                                    <Button
                                        title={text.bodySection.textButtonFunny}
                                        bgColor="blue"
                                        onClickFunc={handleOnClick}
                                    />
                                    <Button
                                        title={text.bodySection.textButtonNotFunny}
                                        bgColor="green"
                                        onClickFunc={handleOnClick}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    <div style={{ width: "100vw", height: "auto" }}>
                        <Divider />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;
