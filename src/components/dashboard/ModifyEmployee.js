import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import ModalHeader from '../common/ModalHeader';
import '../common/Modal.scss';

const ModifyEmployee = (props) => {
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        async function fetchData() {
            const updateEmployee = props.updateEmployee
            _.map(updateEmployee, emp => {
                setEmployee(emp)
            })
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        const newEmployee = _.cloneDeep(employee)
        newEmployee[e.target.name] = e.target.value
        setEmployee(newEmployee);
    }

    const updateProductDetails = async () => {
        await props.afterUpdateList(employee);
    }

    return (
        <Modal
            isOpen={props.isModalOpen}
            preventScroll={false}
            onRequestClose={props.onRequestModalClose}
            className="modal-content-container"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            <ModalHeader headerTitle={props.headerTitle} />
            <div id="editor-metadata-form">
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Employee Name" value={employee.name} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Avatar URL:
                    <input type="text" name="avatar_url" placeholder="avatar_url" value={employee.avatar_url} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" placeholder="location" value={employee.location} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="email" value={employee.email} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Company:
                    <input type="text" name="company" placeholder="company" value={employee.company} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Blog:
                    <input type="text" name="blog" placeholder="blog" value={employee.blog} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Bio:
                    <input type="text" name="bio" placeholder="bio" value={employee.bio} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Twitter Username:
                    <input type="text" name="twitter_username" placeholder="twitter_username" value={employee.twitter_username} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Public_repos:
                    <input type="text" name="public_repos" placeholder="public_repos" value={employee.public_repos} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Followers:
                    <input type="text" name="followers" placeholder="followers" value={employee.followers} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Following:
                    <input type="text" name="following" placeholder="following" value={employee.following} onChange={(e) => handleChange(e)} />
                </label>
                <div className="submit-button" onClick={() => updateProductDetails()}>
                    <button>Update Employee Details</button>
                </div>
            </div>
        </Modal>
    )
};

export default ModifyEmployee;