import React from 'react';

class Button extends React.Component {
    render() {
        const { nameBtn } = this.props;
        return(
            <button>{nameBtn}</button>
        )
    }
}

export default Button;