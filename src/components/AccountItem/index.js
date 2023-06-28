import styles from './AccountItem.module.scss'
import classNames from "classnames/bind"

import { AiFillCheckCircle } from "react-icons/ai";

const cx = classNames.bind(styles)
function AccountItem(){
    return (
        <div className={cx('wrapper', 'flex')}>
            <img className={cx('avatar')} src='https://i.imgur.com/YxPwb7X.jpg' alt=''/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Hoang Van Nam
                    <span><AiFillCheckCircle /></span>
                </p>
                <span className={cx('username')}>namPro</span>
            </div>
        </div>
    )
}
export default AccountItem