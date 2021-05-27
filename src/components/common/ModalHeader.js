import React from 'react';

const ModalHeader = (props) => {
    return (
        <div id="modal-header">
            <span id="modal-header-text">{props.headerTitle || 'Modal'}</span>
        </div>
    )
}

export default ModalHeader;