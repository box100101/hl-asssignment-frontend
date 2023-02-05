import "./styles.scss";

export type Props = {
    width?: string;
};

const Divider: React.FC<Props> = ({ width }) => {
    return (
        <>
            <div className="divider__wrapper" style={{ width: width }}></div>
        </>
    );
};

export default Divider;
