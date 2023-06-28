import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
        to,
        href,
        small=false,
        large=false,
        text=false,
        rounded=false,
        disabled = false,
        primary=false,
        ouline = false,
        children,
        className,
        onClick,
        ...passProps
    }){
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps,
    }

    if(disabled){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function')
                delete props[key]
        })
    }

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }

    const cls = cx('wrapper', {
        // custom rieng 
        [className]: className,
         
        text,
        primary,
        ouline,
        small,
        large,
        rounded,
        disabled,
    })
    return (
        <Comp className={cls} {...props}>
            <span>{children}</span>
        </Comp>
    )
}
export default Button