import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import ModalHeader from '../common/ModalHeader';
import '../common/Modal.scss';

const ShowDetails = (props) => {
    const [employee, setEmployee] = useState({});

    useEffect(async () => {

    }, []);

    const closeModal = () => {
        props.onRequestModalClose();
    }

    return (
        <Modal
            isOpen={props.isModalOpen}
            onRequestClose={props.onRequestModalClose}
            className="modal-content-container"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            <ModalHeader headerTitle={props.headerTitle} />
            <div id="editor-metadata-form">
                <label>
                    Name: <p>{employee.name}</p>
                </label>
                <label>
                    Location: <p>{employee.location}</p>
                </label>
                <label>
                    Company: <p>{employee.company}</p>
                </label>
                <div className="submit-button" onClick={() => closeModal()}>
                    <button>Close Modal</button>
                </div>
            </div>
        </Modal>
    )
};

export default ShowDetails;