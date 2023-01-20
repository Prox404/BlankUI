import classNames from 'classnames';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    primary = false,
    outline = false,
    primaryOutline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    w100 = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = classNames(
            `wrapper`, 
            className,
            primary,
            outline,
            primaryOutline,
            text,
            disabled,
            rounded,
            small,
            large,
            w100
    );

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={`icon`}>{leftIcon}</span>}
            <span className={`title`}>{children}</span>
            {rightIcon && <span className={`icon`}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;