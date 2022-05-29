import React from "react";
import {Button} from "./styled";
import PropTypes from "prop-types";

const Buttons = ({primary, children, classNames, ...props}) => {
    return (
        <Button primary={primary} className={classNames} {...props}>
            {children}
        </Button>
    );
};

Buttons.propTypes = {
    primary: PropTypes.bool,
};

Buttons.defaultProps = {
    primary: false,
};

export default Buttons;
