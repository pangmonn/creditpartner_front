import React, { useCallback, useState } from 'react';
import './styles/menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    // 메뉴 위에 마우스를 올렸을 때, 폰트 변환
    const [hoveredMenu, setHoveredMenu] = useState();

    const handleMenuMouseOn = (menu) => {
        setHoveredMenu(menu);
    };

    const handledMenuMouseOut = () => {
        setHoveredMenu();
    };

    // 로그아웃
    /*
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handleLogout = () => {
        // 로그아웃 기능 추가
        setIsLoggedOut(true);
    };
    */

    return (
        <div className='menuContainer'>
            <div 
                className={`menuComponent ${hoveredMenu === '학과별 이수 가이드' ? 'selected' : ''}`}
                onMouseEnter={() => handleMenuMouseOn('학과별 이수 가이드')}
                onMouseLeave={handledMenuMouseOut}
            >
                <Link to="/guide">
                    학과별 이수 가이드
                </Link>
            </div>
            <div 
                className={`menuComponent ${hoveredMenu === '로그아웃' ? 'selected' : ''}`}
                onMouseEnter={() => handleMenuMouseOn('로그아웃')}
                onMouseLeave={handledMenuMouseOut}
            >
                <Link to="/logout">
                    로그아웃
                </Link>
            </div>
        </div>
    );
};

export default Menu;