import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const defaultFn = () => { };

function Menu({ children, placement="top-end", className, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            const isTheme = !!item.theme;
            const isLogout = !!item.logout

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onLogout={isLogout}
                    onThemeChange={isTheme}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // console.log(items);

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[0, 8]}
            zIndex={999999}
            placement={placement}
            render={(attrs) => (
                <div className={
                    `w-max
                    ${className}
                    ${items.length === 0 && 'hidden'}`
                } tabIndex="-1" {...attrs}>
                    <PopperWrapper className="
                        
                    ">
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;