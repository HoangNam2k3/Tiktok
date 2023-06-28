import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function DefaultLayout( { children} ) {
    return (
        <div className={cx('wrapper','flex')}>
            <Header />
            <div className={cx('container','flex')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>

        </div>
    )
}
export default DefaultLayout