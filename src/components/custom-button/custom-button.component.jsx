import React from 'react';

import './custom-button.style.scss'

const BUTTON_TYPE_CLASSES = {
    google : 'google-sign-in',
    inverted : 'inverted',
}

const CustomButton = ({children ,buttonType,...otherProps}) => {
    return(
    <button className={`custom-button ${buttonType}`}{...otherProps}>
        {children}
    </button>
)};

export default CustomButton;