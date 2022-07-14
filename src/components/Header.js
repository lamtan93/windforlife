import React from 'react';
const Header = ({
  words,
}) => {
    /* eslint-disable */
    return (
        <div className='header'>
            <h3>{words?.BIENVENUE_TITLE}</h3>
            <div className='menu'>
                <a href='#'>{words?.MENU_LABEL}</a>
                <a href='#' >{words?.ACCOUNT_LABEL}</a>
                <a target="_blank" href='https://www.linkedin.com/in/lamtan93/' >{words?.ABOUT_ME_LABEL}</a>
            </div>
        </div>
    )
}

export default Header;