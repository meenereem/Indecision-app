import React from 'react';

const Header = (props) => (
    <div className="header">
        <center>
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
            </center>
    </div>

);

Header.defaultProps = {
    title: 'Indecision'
}

export default Header;